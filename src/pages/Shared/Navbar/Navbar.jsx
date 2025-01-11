import React, { useContext } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const links = (
    <>
      <li>
        <Link to={"/"} className="hover:text-yellow-400">
          HOME
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400">CONTACT US</Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400">DASHBOARD</Link>
      </li>
      <li>
        <Link to={"/menu"} className="hover:text-yellow-400">
          OUR MENU
        </Link>
      </li>
      <li>
        <Link to={"/order/salad"} className="hover:text-yellow-400">
          ORDER FOOD
        </Link>
      </li>
      {user ? (
        <>
          <li className="flex flex-row">
            <button onClick={handleLogOut} className="hover:text-yellow-400">
              SIGN OUT
            </button>
            {/* <span className="relative">
              <img
                src={user.photoURL}
                className="w-8 h-8 rounded-full"
                alt="User Avatar"
                data-tooltip-id="user-tooltip"
                data-tooltip-place="left"
                aria-describedby="user-tooltip"
              />
              <Tooltip id="user-tooltip" content={user.displayName || "User"} />
            </span> */}
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"} className="hover:text-yellow-400">
              LOGIN
            </Link>
          </li>
        </>
      )}
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

      <div>
        {user && (
          <span className="relative cursor-pointer mr-4">
            <img
              src={user.photoURL}
              className="w-9 h-9 rounded-full"
              alt="User Avatar"
              data-tooltip-id="user-tooltip"
              data-tooltip-place="left"
            />
            <Tooltip id="user-tooltip" content={user.displayName || "User"} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
