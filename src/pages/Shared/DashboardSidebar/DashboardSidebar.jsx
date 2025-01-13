import {
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaUsers,
  FaClipboardList,
  FaTasks,
  FaPlusCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#D1A054] text-white">
      <div className="p-6">
        {/* Logo Section */}
        <h2 className="text-2xl font-bold">BISTRO BOSS</h2>
        <p className="text-sm">RESTAURANT</p>
      </div>
      <ul className="menu p-4 space-y-2">
        {/* Admin Menu */}
        <li className="mb-4 font-semibold text-lg">Admin Panel</li>
        <li>
          <NavLink to={"/dashboard/add-items"}>
            <FaPlusCircle /> Add Items
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/manage-items"}>
            <FaTasks /> Manage Items
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/manage-bookings"}>
            <FaClipboardList /> Manage Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/all-users"}>
            <FaUsers /> All Users
          </NavLink>
        </li>
        <hr className=" border-white" />
        {/* General Menu */}
        <li>
          <NavLink to={"/home"}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>
            <FaUtensils /> Menu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>
            <FaShoppingCart /> Shop
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>
            <FaPhoneAlt /> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
