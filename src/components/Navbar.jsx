import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import {
  FiShoppingCart,
  FiShoppingBag,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";
import logo from "../assets/icon.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    "Home",
    "Find Doctors",
    "Lab Tests",
    "Shop",
    "Forum",
    "About Us",
  ];

  const linkBase =
    "pb-1 px-2 transition text-sm font-medium text-[#0C5C4C] hover:text-[#0C5C4C]";

  return (
    <header className="bg-[#FFF9E9] border-b border-gray-200 w-full">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* TOP ROW - PHONE / HAMBURGER / LOGO / LOGIN MOBILE */}
        <div className="flex items-center justify-between px-4 py-2">
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-[#0C5C4C] text-2xl"
            onClick={() => setOpen(!open)}
          >
            <HiMenu />
          </button>

          {/* LOGO MOBILE */}
          <Link to="/" className="md:hidden flex items-center justify-center">
            <img
              src={logo}
              alt="Amrutam Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* PHONE LEFT (desktop only) */}
          <div className="hidden relative top-[32px] left-[20px]  md:flex items-center gap-2 text-[#0C5C4C] text-sm font-medium">
            📞 +91 9826352321
          </div>

          {/* LOGIN BUTTON MOBILE RIGHT */}
          <button className="md:hidden bg-[#3A643B] text-white px-4 py-1 rounded-full text-xs font-semibold">
            Login
          </button>
        </div>

        {/* CENTER LOGO ROW DESKTOP */}
        <div className="hidden md:flex items-center justify-center  z-1 py-1">
          <Link to="/" className="flex items-center justify-center">
            <img
              src={logo}
              alt="Amrutam Logo"
              className="
    h-8 w-auto         
    sm:h-10              
    md:h-12      
    lg:h-14                
    object-contain
  "
            />
          </Link>
        </div>

        {/* NAV LINKS + ICONS DESKTOP */}
        <nav className="hidden md:flex items-center justify-center px-6 py-3">
          {/* NAV LINKS */}
          <div className="flex items-center justify-center gap-10">
            {nav.map((item) => (
              <NavLink
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? "border-b-2 border-[#0C5C4C] font-semibold" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* ICONS RIGHT */}
          <div className="ml-9 flex items-center gap-3">
            <Link
              to="/orders"
              className="relative h-10 w-10 bg-[#E6EFE6] rounded-full flex items-center justify-center"
            >
              <FiShoppingBag className="text-[#0C5C4C] text-xl" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#0C5C4C] text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            <Link
              to="/cart"
              className="relative h-10 w-10 bg-[#E6EFE6] rounded-full flex items-center justify-center"
            >
              <FiShoppingCart className="text-[#0C5C4C] text-xl" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#0C5C4C] text-white text-xs rounded-full flex items-center justify-center">
                1
              </span>
            </Link>

            <Link
              to="/wallet"
              className="h-10 w-10 bg-[#E6EFE6] rounded-full flex items-center justify-center"
            >
              💰
            </Link>

            <Link
              to="/profile"
              className="h-10 w-10 bg-[#E6EFE6] rounded-full flex items-center justify-center"
            >
              <FiUser className="text-[#0C5C4C] text-xl" />
            </Link>

            <FiChevronDown className="text-[#0C5C4C] text-xl" />
          </div>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        {open && (
          <div className="md:hidden flex flex-col items-start px-5 pb-4 gap-3 bg-[#FFF9E9]">
            {nav.map((item) => (
              <NavLink
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                onClick={() => setOpen(false)}
                className="text-[#0C5C4C] text-base font-medium"
              >
                {item}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
