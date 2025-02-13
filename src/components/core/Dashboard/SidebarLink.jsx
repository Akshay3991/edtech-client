import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { resetCourseState } from "../../../slices/courseSlice.js";

export default function SidebarLink({ link, iconName }) {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => matchPath({ path: route }, location.pathname);

  return (
    <NavLink
      to={link.path}
      onClick={() => dispatch(resetCourseState())}
      className={`relative flex items-center gap-x-3 px-6 py-3 rounded-md text-sm font-medium
        transition-all duration-200 bg-white shadow-md hover:shadow-lg hover:shadow-black
        ${matchRoute(link.path) ? "bg-black text-white" : "text-richblack-900"}
      `}
    >
      {/* Sidebar Indicator */}
      <span
        className={`absolute left-0 top-0 h-full w-1 bg-[white] transition-all duration-300 ${matchRoute(link.path) ? "opacity-100" : "opacity-0"
          }`}
      ></span>

      {/* Icon */}
      <Icon className="text-xl text-richblack-800" />

      {/* Link Name */}
      <span>{link.name}</span>
    </NavLink>
  );
}
