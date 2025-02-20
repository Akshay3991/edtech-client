import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { resetCourseState } from "../../../slices/courseSlice.js";
export default function SidebarLink({ link, iconName }) {
  const dispatch = useDispatch();

  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => matchPath({ path: route }, location.pathname);

  const data = {
    text1: "Are you sure?",
    text2: "You will be logged out of your account.",
    btn1Text: "Logout",
    btn2Text: "Cancel"
  }
  return (
    <NavLink
      to={link.path}
      state={{ data }}
      onClick={() => dispatch(resetCourseState())}
      className={`relative flex items-center gap-x-3 px-6 py-3 rounded-md text-sm font-medium
        transition-all duration-200  shadow-sm hover:shadow-md hover:shadow-black
        ${matchRoute(link.path) ? "bg-[whitesmoke] text-[#050000]" : "text-gray-700"}
      `}
    >
      {/* Sidebar Indicator */}
      <span
        className={`absolute left-0 top-0 h-full w-1 bg-black transition-all duration-300 ${matchRoute(link.path) ? "opacity-100" : "opacity-0"
          }`}
      ></span>

      {/* Icon */}
      <Icon className="text-xl text-gray-600" />

      {/* Link Name */}
      <span>{link.name}</span>
    </NavLink>
  );
}
