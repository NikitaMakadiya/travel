import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Navbarlink = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  {
    title: "Services",
    url: "/services",
    submenu: [
      { title: "Web Development", url: "/services/web-development" },
      { title: "App Development", url: "/services/app-development" },
      { title: "UI/UX Design", url: "/services/ui-ux" },
    ],
  },
  { title: "Upcoming Packages", url: "/upcoming-packages" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSubmenu = (title) => {
    setSubmenuOpen((prev) => (prev === title ? null : title));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setSubmenuOpen(null);
  };

  return (
    <nav className="w-full shadow-md fixed top-0 left-0 z-50 bg-transparent md:bg-transparent">
      <div className="responsive-container">
        <div className="flex justify-between h-20 items-center">
          <div className="text-3xl font-bold text-white">Travel</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {Navbarlink.map((link, index) => (
              <div key={index} className="relative group">
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white  font-semibold flex items-center underline decoration-primary decoration-3  underline-offset-6 gap-1"
                      : "text-white font-semibold hover:text-primary flex items-center gap-1"
                  }
                >
                  {link.title}
                  {link.submenu && <FiChevronDown className="text-sm" />}
                </NavLink>

                {link.submenu && (
                  <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 transition-opacity bg-white text-gray-800 rounded-md shadow-lg z-50 min-w-[200px]">
                    {link.submenu.map((sublink, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={sublink.url}
                        className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                        onClick={closeAll}
                      >
                        {sublink.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button>Get in Touch</button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white text-black rounded-lg shadow-md mt-2 py-6 px-4 space-y-4">
            {Navbarlink.map((link, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    if (link.submenu) {
                      toggleSubmenu(link.title);
                    } else {
                      closeAll();
                    }
                  }}
                >
                  <NavLink
                    to={link.url}
                    className="text-base font-medium py-2 w-full"
                    onClick={() => {
                      if (!link.submenu) closeAll();
                    }}
                  >
                    {link.title}
                  </NavLink>

                  {link.submenu && (
                    <span className="pr-2">
                      {submenuOpen === link.title ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  )}
                </div>

                {/* Submenu */}
                {link.submenu && submenuOpen === link.title && (
                  <div className="ml-10 mt-1 space-y-2">
                    {link.submenu.map((sublink, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={sublink.url}
                        className="block text-sm hover:text-primary"
                        onClick={closeAll}
                      >
                        {sublink.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="btn">Get in Touc</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
