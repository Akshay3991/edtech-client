import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown, BsSun, BsMoon } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import logo from "../../assets/Logo/logo.png";
import { NavbarLinks } from "../../data/navbar-links.js";
import { apiConnector } from "../../services/apiConnector.js";
import { categories } from "../../services/apis.js";
import { ACCOUNT_TYPE } from "../../utils/constants.js";
import ProfileDropdown from "../core/Auth/ProfileDropdown.jsx";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // Toggle light/dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`flex w-[100vw] h-[10vh] items-center justify-center ${
        isDarkMode ? "bg-richblack-900 text-white" : "bg-white text-richblack-900"
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            width={170}
            height={35}
            loading="lazy"
            className={`${isDarkMode ? "invert" : ""}`}
          />
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-8">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-500"
                          : isDarkMode
                          ? "text-richblack-100"
                          : "text-richblack-900"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div
                        className={`invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg ${
                          isDarkMode ? "bg-richblack-800" : "bg-white"
                        } p-4 ${
                          isDarkMode ? "text-richblack-100" : "text-richblack-900"
                        } opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] shadow-lg`}
                      >
                        <div
                          className={`absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded ${
                            isDarkMode ? "bg-richblack-800" : "bg-white"
                          }`}
                        ></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length ? (
                          <>
                            {subLinks
                              ?.filter((subLink) => subLink?.courses?.length > 0)
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className={`rounded-lg bg-transparent py-2 pl-4 hover:bg-opacity-10 ${
                                    isDarkMode
                                      ? "hover:bg-richblack-700"
                                      : "hover:bg-richblack-100"
                                  } transition-all duration-200`}
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-500"
                          : isDarkMode
                          ? "text-richblack-100"
                          : "text-richblack-900"
                      } hover:text-yellow-500 transition-all duration-200`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDarkMode ? "bg-richblack-700" : "bg-richblack-100"
            } hover:bg-opacity-80 transition-all duration-200`}
          >
            {isDarkMode ? (
              <BsSun className="text-xl text-yellow-500" />
            ) : (
              <BsMoon className="text-xl text-richblack-900" />
            )}
          </button>

          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart
                className={`text-2xl ${
                  isDarkMode ? "text-richblack-100" : "text-richblack-900"
                }`}
              />
              {totalItems > 0 && (
                <span
                  className={`absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full ${
                    isDarkMode ? "bg-richblack-700" : "bg-richblack-100"
                  } text-center text-xs font-bold ${
                    isDarkMode ? "text-yellow-100" : "text-yellow-500"
                  }`}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {token === null && (
            <Link to="/login">
              <button
                className={`rounded-[8px] border ${
                  isDarkMode ? "border-richblack-700" : "border-richblack-100"
                } bg-[#942C2F] px-[12px] py-[8px] ${
                  isDarkMode ? "text-richblack-100" : "text-richblack-900"
                } hover:bg-opacity-80 transition-all duration-200`}
              >
                Log in
              </button>
            </Link>
          )}

          {token === null && (
            <Link to="/signup">
              <button
                className={`rounded-[8px] border ${
                  isDarkMode ? "border-richblack-700" : "border-richblack-100"
                } bg-[#942C2F] px-[12px] py-[8px] ${
                  isDarkMode ? "text-richblack-100" : "text-richblack-900"
                } hover:bg-opacity-80 transition-all duration-200`}
              >
                Sign up
              </button>
            </Link>
          )}

          {token !== null && <ProfileDropdown />}
        </div>

        {/* Mobile Menu Button */}
        <button className="mr-4 md:hidden">
          <AiOutlineMenu
            fontSize={24}
            className={`${isDarkMode ? "text-richblack-100" : "text-richblack-900"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;