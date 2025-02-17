import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formattedDate } from "../../../utils/dateFormatter.js";
import IconBtn from "../../Common/IconBtn.jsx";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="mb-8 text-2xl font-black font-sans">My Profile</h1>

      {/* Profile Section */}
      <div className="flex flex-col  md:flex-row items-center justify-between bg-white shadow-md rounded-lg  md:p-8">
        <div className="flex items-center gap-x-4 p-6 md:p-0">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="w-[70px] h-[70px] md:w-[78px] md:h-[78px] rounded-full object-cover shadow-md shadow-black"
          />
          <div className="space-y-1">
            <p className="text-lg uppercase font-extrabold text-gray-900">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm font-normal italic text-gray-600">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => navigate("/dashboard/settings")}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      {/* About Section */}
      <div className="mt-8 bg-white font-sans shadow-md rounded-lg p-6 md:p-8">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-black">About</p>
          <IconBtn text="Edit" onclick={() => navigate("/dashboard/settings")}>
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`mt-4 text-sm italic  font-medium ${user?.additionalDetails?.about ? "text-gray-900" : "text-gray-500"
            }`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      {/* Personal Details Section */}
      <div className="mt-8 bg-white shadow-md font-sans rounded-lg p-6 md:p-8">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-black">Personal Details</p>
          <IconBtn text="Edit" onclick={() => navigate("/dashboard/settings")}>
            <RiEditBoxLine />
          </IconBtn>
        </div>

        {/* Details Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="space-y-5">
            <div>
              <p className="text-sm text-black">First Name</p>
              <p className="text-sm uppercase font-medium text-gray-900">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="text-sm text-black">Email</p>
              <p className="text-sm font-medium text-gray-900">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="text-sm text-black">Gender</p>
              <p className="text-sm font-medium text-gray-900">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            <div>
              <p className="text-sm text-black">Last Name</p>
              <p className="text-sm font-medium text-gray-900">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-black">Phone Number</p>
              <p className="text-sm font-medium text-gray-900">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="text-sm text-black">Date Of Birth</p>
              <p className="text-sm font-medium text-gray-900">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
