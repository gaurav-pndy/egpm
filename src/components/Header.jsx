import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resettlement", label: "Resettlement" },
    { path: "/emergency", label: "Emergency" },
    { path: "/volunteer", label: "Volunteer" },
    { path: "/core-group", label: "Core Group" },
  ];

  return (
    <header className="bg-white py-2 md:py-0 shadow-md  z-10">
      <div className="flex max-w-5xl mx-auto items-center justify-between md:justify-normal gap-8 lg:gap-18 px-4 md:px-3.5  ">
        <div className="flex items-center ">
          <img
            src="https://static.wixstatic.com/media/e6f22e_41bc48dd07df46e6a3f71c6dd4cfd6c3~mv2.png" // Replace with your logo URL
            alt="EGPM Logo"
            className="w-20 md:w-28 lg:w-33 h-20 md:h-28 lg:h-33 object-contain"
          />
        </div>
        <nav className="hidden md:flex gap-6 lg:gap-14 text-[1.14rem] font-[550] text-[rgb(0,56,98)]">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "hover:text-blue-600  "
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden z-20 absolute w-full h-fit text-center bg-white shadow-lg shadow-black/30 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
