import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../../../services/operations/SettingsAPI.js";
import IconBtn from "../../../Common/IconBtn.jsx";

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProfileForm = async (data) => {
    try {
      dispatch(updateProfile(token, data));
    } catch (error) {
      console.error("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitProfileForm)} className="space-y-6">
      {/* Profile Information */}
      <div className="my-10 flex flex-col gap-y-6 rounded-md bg-[white] shadow-md shadow-pure-greys-300 hover:shadow-lg p-8">
        <h2 className="text-lg font-bold text-gray-900">Profile Information</h2>

        {/* Name Fields */}
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="firstName" className="text-gray-700 font-bold">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name"
              className="p-2 rounded-md bg-[white] shadow-richblack-800"
              {...register("firstName", { required: true })}
              defaultValue={user?.firstName}
            />
            {errors.firstName && <span className="text-[#f70f0f] text-sm">Please enter your first name.</span>}
          </div>

          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="lastName" className="text-gray-700 font-bold">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last name"
              className="p-2 rounded-md  bg-[white] shadow-richblack-800"
              {...register("lastName", { required: true })}
              defaultValue={user?.lastName}
            />
            {errors.lastName && <span className="text-[#f70f0f] text-sm">Please enter your last name.</span>}
          </div>
        </div>

        {/* Date of Birth & Gender */}
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="dateOfBirth" className="text-gray-700 font-bold">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              className="p-2 rounded-md  bg-[white] shadow-richblack-800"
              {...register("dateOfBirth", {
                required: "Please enter your Date of Birth.",
                max: { value: new Date().toISOString().split("T")[0], message: "Date of Birth cannot be in the future." }
              })}
              defaultValue={user?.additionalDetails?.dateOfBirth}
            />
            {errors.dateOfBirth && <span className="text-[#f70f0f] text-sm">{errors.dateOfBirth.message}</span>}
          </div>

          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="gender" className="text-gray-700 font-bold">Gender</label>
            <select
              id="gender"
              className="p-2 rounded-md  bg-[white] shadow-richblack-800"
              {...register("gender", { required: true })}
              defaultValue={user?.additionalDetails?.gender}
            >
              {genders.map((gender, index) => (
                <option key={index} value={gender}>{gender}</option>
              ))}
            </select>
            {errors.gender && <span className="text-[#f70f0f] text-sm">Please select your gender.</span>}
          </div>
        </div>

        {/* Contact & About */}
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="contactNumber" className="text-gray-700 font-bold">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Enter Contact Number"
              className="p-2 rounded-md bg-[white] shadow-richblack-800"
              {...register("contactNumber", {
                required: "Please enter your Contact Number.",
                minLength: { value: 10, message: "Invalid Contact Number" },
                maxLength: { value: 12, message: "Invalid Contact Number" }
              })}
              defaultValue={user?.additionalDetails?.contactNumber}
            />
            {errors.contactNumber && <span className="text-[#f70f0f] text-sm">{errors.contactNumber.message}</span>}
          </div>

          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="about" className="text-gray-700 font-bold">About</label>
            <textarea
              id="about"
              placeholder="Enter Bio Details"
              className="p-2 rounded-md  h-24 resize-none bg-[white] shadow-md shadow-richblack-800"
              {...register("about", { required: true })}
              defaultValue={user?.additionalDetails?.about}
            />
            {errors.about && <span className="text-[#f70f0f] text-sm">Please enter something about yourself.</span>}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => navigate("/dashboard/my-profile")}
          className="px-5 py-2 rounded-md bg-[white] hover:bg-gray-400 text-gray-900 font-semibold"
        >
          Cancel
        </button>
        <IconBtn type="submit" text="Save" />
      </div>
    </form>
  );
}
