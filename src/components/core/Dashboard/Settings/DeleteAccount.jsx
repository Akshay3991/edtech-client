import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProfile } from "../../../../services/operations/SettingsAPI.js";

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate));
    } catch (error) {
      console.error("ERROR MESSAGE - ", error.message);
    }
  }

  return (
    <div className="my-10 flex flex-col md:flex-row gap-5 rounded-md bg-gray-100 shadow-md hover:shadow-lg p-6">
      {/* Trash Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-700 shadow-md">
        <FiTrash2 className="text-3xl text-red-200" />
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-semibold text-gray-900">Delete Account</h2>
        <div className="text-gray-700">
          <p>Would you like to delete your account?</p>
          <p>
            This account may contain Paid Courses. Deleting your account is
            permanent and will remove all content associated with it.
          </p>
        </div>

        {/* Delete Button */}
        <button
          type="button"
          className="w-fit cursor-pointer italic text-red-500 hover:underline"
          onClick={handleDeleteAccount}
        >
          I want to delete my account.
        </button>
      </div>
    </div>
  );
}
