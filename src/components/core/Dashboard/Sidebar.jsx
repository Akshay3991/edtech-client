import { VscSignOut, VscSettingsGear } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links.js";
import SidebarLink from "./SidebarLink.jsx";

export default function Sidebar({ toggleSidebar, setSidebarOpen }) {
  const { user, loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center bg-white">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="w-[100vw] md:w-[20vw] bg-transparent h-screen"
        onClick={toggleSidebar}
      >
        <div
          className={`flex h-full md:h-[calc(100vh-3.5rem)] w-[55%] md:w-[100%] bg-gradient-to-b from-[white] to-[whitesmoke] flex-col py-10  shadow-2xl`}
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
            <SidebarLink
              link={{ name: "Logout", path: "/dashboard/confirm" }}
              iconName="VscSignOut"
            />

          </div>


        </div>
      </div>
    </>

  );
}
