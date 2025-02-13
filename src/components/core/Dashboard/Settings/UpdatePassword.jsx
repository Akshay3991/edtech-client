import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../../../services/operations/SettingsAPI.js";
import IconBtn from "../../../Common/IconBtn.jsx";

export default function UpdatePassword() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitPasswordForm = async (data) => {
    try {
      await changePassword(token, data);
    } catch (error) {
      console.error("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitPasswordForm)} className="space-y-6">
      {/* Password Change Section */}
      <div className="my-10 flex flex-col gap-y-6 rounded-md bg-gray-100 shadow-md hover:shadow-lg p-8">
        <h2 className="text-lg font-semibold text-gray-900">Update Password</h2>

        {/* Password Fields */}
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Current Password */}
          <div className="relative flex flex-col gap-2 md:w-1/2">
            <label htmlFor="oldPassword" className="text-gray-700">Current Password</label>
            <input
              type={showOldPassword ? "text" : "password"}
              id="oldPassword"
              placeholder="Enter Current Password"
              className="p-2 rounded-md border border-gray-300"
              {...register("oldPassword", { required: "Please enter your Current Password." })}
            />
            <span
              onClick={() => setShowOldPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showOldPassword ? <AiOutlineEyeInvisible size={24} fill="#555" /> : <AiOutlineEye size={24} fill="#555" />}
            </span>
            {errors.oldPassword && <span className="text-red-500 text-sm">{errors.oldPassword.message}</span>}
          </div>

          {/* New Password */}
          <div className="relative flex flex-col gap-2 md:w-1/2">
            <label htmlFor="newPassword" className="text-gray-700">New Password</label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              placeholder="Enter New Password"
              className="p-2 rounded-md border border-gray-300"
              {...register("newPassword", { required: "Please enter your New Password." })}
            />
            <span
              onClick={() => setShowNewPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showNewPassword ? <AiOutlineEyeInvisible size={24} fill="#555" /> : <AiOutlineEye size={24} fill="#555" />}
            </span>
            {errors.newPassword && <span className="text-red-500 text-sm">{errors.newPassword.message}</span>}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => navigate("/dashboard/my-profile")}
          className="px-5 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold"
        >
          Cancel
        </button>
        <IconBtn type="submit" text="Update" />
      </div>
    </form>
  );
}
