import React from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; // Mobile Menu Icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="hover:text-yellow-400">HOME</Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400">CONTACT US</Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400">DASHBOARD</Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400">OUR MENU</Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400">OUR SHOP</Link>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-7xl fixed z-10 bg-opacity-30 bg-black text-white">
      {/* Mobile Menu Icon (Left) */}
      <div className="dropdown">
        <label tabIndex={0} className="btn p-0 btn-sm btn-ghost lg:hidden">
          <HiMenu className="text-3xl" />
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 z-[50] p-4 shadow bg-[#1f2937] rounded-box w-52"
        >
          {links}
        </ul>
      </div>

      {/* Logo (Center on Mobile, Left on Desktop) */}
      <div className="flex-1">
        <a className="text-2xl font-bold tracking-wide">
          BISTRO BOSS <br /> <span className="font-light">RESTAURANT</span>
        </a>
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Cart & User (Right Section) */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <FaShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
            1
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>SIGN OUT</span>
          <FaUserCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
