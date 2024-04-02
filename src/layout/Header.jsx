import React from "react";
import { useLocation } from "react-router-dom";
import { ROUTER } from "../constant/router";
import { Link } from "react-router-dom";
import { activeLink } from "../utils/ActiveLink";
import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { useThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, handleSwitch } = useThemeContext()

  const { pathname } = useLocation()
  return (
    <>
      <header className="bg-white py-2 lg:py-4 uppercase font-poppins dark:bg-black">
        <nav className="container flex justify-between items-center  w-full">
          <div>
            <Link to={ROUTER.Home}
              className="pl-3 md:pl-0 text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-700 to-gega-red  "
            >
              Movie App
            </Link>
          </div>
          <div className="hidden lg:flex items-center lg:text-lg space-x-4 lg:space-x-8">
            <span className="hover:text-blue-400 transition duration-500 text-2xl space-x-4 ">
              <Link
                to={ROUTER.Home}
                className={
                  activeLink(ROUTER.Home, pathname)
                    ? "text-gega-red hover:text-sky-600 transition duration-500"
                    : "text-sky-600 hover:text-gega-red transition duration-500"
                }
              >
                Movies
              </Link>
              <span className="hover:text-blue-400 transition duration-500 text-2xl ">
                <Link
                  to={ROUTER.WishList}
                  className={
                    activeLink(ROUTER.WishList, pathname)
                      ? "text-gega-red hover:text-sky-600 transition duration-500"
                      : "text-sky-600 hover:text-gega-red transition duration-500"
                  }
                >
                  WishList
                </Link>
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8 pr-3">
            <button
              className="px-4 transition-all duration-500"
              onClick={handleSwitch}
            >
              {
                theme === "light" ? (
                  <FiSun size={45} className="text-gega-red dark:text-sky-200" />
                ) : "dark" ? (
                  <GoMoon size={45} className="text-sky-800 dark:text-sky-200" />
                ) : ""
              }

            </button>
          </div>
        </nav>
      </header>

    </>
  )
};

export default Header;
