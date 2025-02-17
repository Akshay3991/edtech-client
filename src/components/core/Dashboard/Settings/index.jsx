import ChangeProfilePicture from "./ChangeProfilePicture.jsx"
import DeleteAccount from "./DeleteAccount.jsx"
import EditProfile from "./EditProfile.jsx"
import UpdatePassword from "./UpdatePassword.jsx"

export default function Settings() {
  return (
    <>
      <h1 className="mb-8 text-3xl font-black font-sans text-richblack-800">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* Password */}
      <UpdatePassword />
      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}
