import { useState } from "react";
import { VscSignOut, VscSettingsGear } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sidebarLinks } from "../../../data/dashboard-links.js";
import { logout } from "../../../services/operations/authAPI.js";
import ConfirmationModal from "../../Common/ConfirmationModal.jsx";
import SidebarLink from "./SidebarLink.jsx";

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null);

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center bg-[whitesmoke]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>

      <div
        className={`flex h-full md:h-[calc(100vh-3.5rem)] min-w-[220px] bg-gradient-to-b from-[white] to-[whitesmoke] flex-col py-10  shadow-2xl`}
      >
        {/* Sidebar Links */}
        <div className="flex flex-col gap-2 px-4">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return <SidebarLink key={link.id} link={link} iconName={link.icon} />;
          })}
        </div>

        {/* Divider (Optional - Can be removed if needed) */}
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-white/20" />

        {/* Settings & Logout Buttons */}
        <div className="flex flex-col px-4">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-black hover:bg-white/10 rounded-lg transition-colors flex items-center gap-x-2"
          >
            <VscSignOut className="text-lg" />
            <span>Logout</span>
          </button>
        </div>


      </div>



      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}
