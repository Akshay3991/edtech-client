import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown, BsSun, BsMoon } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        // console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);



  // Toggle light/dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`fixed z-50 w-full h-[8vh] p-2 font-mono text-[18px] flex items-center justify-between ${isDarkMode ? "bg-[#010a01] text-white" : "bg-[whitesmoke] text-richblack-900"} transition-all duration-200 px-4 sm:px-6 md:px-8`}>
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" width="40" height="40" loading="lazy" className="p-1" />
        <span className="font-black font-sans text-[20px]">Education<i className="text-[#fc2146]">Mart</i></span>
      </Link>

      {/* Navigation Links - Hidden in Mobile */}
      <nav className="hidden md:flex space-x-6">
        {NavbarLinks.map((link, index) => (
          <li key={index} className="list-none">
            {link.title === "Catalog" ? (
              <div className="relative group cursor-pointer flex items-center gap-1">
                <p>{link.title}</p>
                <BsChevronDown />
                <div className={`invisible absolute left-1/2 top-full z-10 w-[200px] translate-x-[-50%] flex flex-col rounded-lg ${isDarkMode ? "bg-richblack-800" : "bg-white"} p-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 shadow-lg`}>
                  {loading ? <p className="text-center">Loading...</p> : subLinks.length ? (
                    subLinks.filter(sub => sub?.courses?.length > 0).map((sub, i) => (
                      <Link key={i} to={`/catalog/${sub.name.split(" ").join("-").toLowerCase()}`} className="py-2 pl-4 hover:bg-opacity-10 rounded-lg">
                        <p>{sub.name}</p>
                      </Link>
                    ))
                  ) : <p className="text-center">No Courses Found</p>}
                </div>
              </div>
            ) : (
              <Link to={link?.path} className="hover:underline">
                <p>{link.title}</p>
              </Link>
            )}
          </li>
        ))}
      </nav>

      {/* Right Section - Buttons & Theme Toggle */}
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="p-2 rounded-full bg-opacity-80 transition-all duration-200">
          {isDarkMode ? <BsSun className="text-xl text-yellow-500" /> : <BsMoon className="text-xl" />}
        </button>
        {user && user?.accountType !== "INSTRUCTOR" && (
          <Link to="/dashboard/cart" className="relative">
            <AiOutlineShoppingCart className="text-2xl" />
            {totalItems > 0 && <span className="absolute -bottom-2 -right-2 h-5 w-5 grid place-items-center bg-red-500 text-white text-xs font-bold rounded-full">{totalItems}</span>}
          </Link>
        )}
        {token ? <ProfileDropdown /> : (
          <>
            <Link to="/login"><button className="hidden md:block bg-[#055305] text-white px-3 py-1 rounded-md">Log in</button></Link>
            <Link to="/signup"><button className="hidden md:block bg-[#055305] text-white px-3 py-1 rounded-md">Sign up</button></Link>
          </>
        )}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <AiOutlineMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[8vh] left-0 w-full bg-[#FC2146] shadow-lg p-4 md:hidden">
          <ul className="space-y-4">
            {NavbarLinks.map((link, index) => (
              <li key={index} className="list-none" >
                {link.title === "Catalog" ? (
                  <div className="relative group cursor-pointer flex items-center gap-1">
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className={`invisible absolute left-1/2 top-full z-10 w-[200px] translate-x-[-50%] flex flex-col rounded-lg ${isDarkMode ? "bg-richblack-800" : "bg-white"} p-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 shadow-lg`}>
                      {loading ? <p className="text-center">Loading...</p> : subLinks.length ? (
                        subLinks.filter(sub => sub?.courses?.length > 0).map((sub, i) => (
                          <Link key={i} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} to={`/catalog/${sub.name.split(" ").join("-").toLowerCase()}`} className="py-2 pl-4 hover:bg-opacity-10 rounded-lg">
                            <p>{sub.name}</p>
                          </Link>
                        ))
                      ) : <p className="text-center">No Courses Found</p>}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="hover:underline">
                    <p>{link.title}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mt-4 flex flex-col gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200">{isDarkMode ? <BsSun className="text-xl text-yellow-500" /> : <BsMoon className="text-xl" />}</button>
            {user && user?.accountType !== "INSTRUCTOR" && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl" />
                {totalItems > 0 && <span className="absolute -bottom-2 -right-2 h-5 w-5 grid place-items-center bg-red-500 text-white text-xs font-bold rounded-full">{totalItems}</span>}
              </Link>
            )}
            {token === null && (
              <>
                <Link to="/login"><button className="w-full bg-[#054705] text-white px-3 py-1 rounded-md">Log in</button></Link>
                <Link to="/signup"><button className="w-full bg-[#065306] text-white px-3 py-1 rounded-md">Sign up</button></Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;