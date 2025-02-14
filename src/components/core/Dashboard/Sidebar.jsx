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

  // State for sidebar toggle
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center bg-[whitesmoke]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        ☰
      </button>

      {/* Sidebar - Mobile (Sliding Drawer) & Desktop (Fixed) */}
      <div
        className={`fixed md:relative flex h-full md:h-[calc(100vh-3.5rem)] min-w-[220px] bg-gradient-to-b from-blue-600 to-blue-800 flex-col py-10 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 shadow-2xl`}
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
            className="px-8 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-x-2"
          >
            <VscSignOut className="text-lg" />
            <span>Logout</span>
          </button>
        </div>

        {/* Close Button for Mobile Sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 md:hidden text-white text-2xl hover:text-gray-300 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}
