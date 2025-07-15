import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const nlink = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Upcomming Packages", url: "/Upcomming Packages" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow text-white ">
      <div className="max-w-7xl h-20 mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <div className="flex justify-between h-16 items-center">
          <div className="text-3xl ">Travel</div>

          <div className="hidden md:flex space-x-8 ">
            {nlink.map((link, index) => (
              <NavLink
                key={index}
                to={link.url}
                className={({ isActive }) =>
                  isActive ? "text-white text-xl" : "text-shadow-white"
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex w-[152px] h-[58px] bg-primary text-white  justify-center items-center  rounded-[10px]">
            <p class="">Get in touch</p>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block text-white hover:text-primary">
              Home
            </a>
            <a href="#" className="block text-white hover:text-primary">
              About
            </a>
            <a href="#" className="block text-white hover:text-primary">
              Services
            </a>
            <a href="#" className="block text-white hover:text-primary">
              Upcomming Packages
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
