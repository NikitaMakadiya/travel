import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const nlink = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  {
    title: "Services",
    url: "/services",
    submenu: [
      { title: "Hotel Booking", url: "/services/hotel-booking" },
      { title: "Flight Booking", url: "/services/flight-booking" },
      { title: "Tour Guide", url: "/services/tour-guide" },
    ],
  },
  { title: "Packages Archive", url: "/packages-archive" },
  { title: "Upcoming Packages", url: "/upcoming-packages" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow text-white">
      <div className="max-w-7xl h-auto mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <div className="flex justify-between h-16 items-center">
          <div className="text-3xl">Travel</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {nlink.map((link, index) => (
              <div key={index} className="relative group">
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-xl underline decoration-primary underline-offset-9"
                      : "text-shadow-white hover:underline decoration-primary underline-offset-9"
                  }
                >
                  {link.title}
                </NavLink>

                {/* Submenu (Desktop) */}
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                    {link.submenu.map((sublink, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={sublink.url}
                        className="block px-4 py-2 hover:bg-primary hover:text-white"
                      >
                        {sublink.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          {/* <div className="hidden md:flex w-1/8 h-[58px] bg-primary text-white justify-center items-center rounded-[10px]">
            <p className="">Get in touch</p>
          </div> */}
          <button className="btn hidden">Get In Touch</button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pt-4 pb-3 space-y-2 bg-white rounded-lg mt-2">
            {nlink.map((link, index) => (
              <div key={index}>
                <NavLink
                  to={link.url}
                  className="block text-primary text-lg hover:text-primary"
                  onClick={() => {
                    if (!link.submenu) setMenuOpen(false);
                  }}
                >
                  {link.title}
                </NavLink>

                {/* Submenu (Mobile) */}
                {link.submenu && (
                  <>
                    <button
                      className=" text-sm  text-gray-400"
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    >
                      {mobileSubmenuOpen ? "▲" : "▼"}
                    </button>
                    {mobileSubmenuOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {link.submenu.map((sublink, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={sublink.url}
                            className="block text-primary hover:text-primary text-sm"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sublink.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
