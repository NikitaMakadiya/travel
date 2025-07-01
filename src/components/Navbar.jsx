import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const nlink = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Upcomming Packages', url: '/Upcomming Packages' }

];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-2xl  text-black-600">Travel</div>

                    <div className="hidden md:flex space-x-8">
                        {nlink.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.url}
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'text-black'
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}


                    </div>

                    <div className="hidden md:flex w-[152px] h-[58px] bg-primary text-white  justify-center items-center border-2 rounded-[10px]">
                        <p class="">Get in touch</p>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-700 text-2xl focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block text-gray-700 hover:text-primary">
                            Home
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-primary">
                            About
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-primary">
                            Services
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-primary">
                            Upcomming Packages
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
