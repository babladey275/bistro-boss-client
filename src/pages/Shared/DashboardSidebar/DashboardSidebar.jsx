import {
  FaHome,
  FaUtensils,
  FaUsers,
  FaClipboardList,
  FaTasks,
  FaPlusCircle,
  FaPhoneAlt,
  FaShoppingCart,
  FaRegCalendarAlt,
  FaCreditCard,
  FaStar,
  FaListAlt,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const DashboardSidebar = () => {
  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="w-64 min-h-screen bg-[#D1A054] text-white">
      <div className="p-6">
        {/* Logo Section */}
        <h2 className="text-2xl font-bold">BISTRO BOSS</h2>
        <p className="text-sm">RESTAURANT</p>
      </div>
      <ul className="menu p-4 space-y-2">
        {isAdmin ? (
          <>
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
          </>
        ) : (
          <>
            {/* User Menu */}
            <li className="mb-4 font-semibold text-lg">User Panel</li>
            <li>
              <NavLink to={"/dashboard/reservation"}>
                {" "}
                <FaRegCalendarAlt /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/payment-history"}>
                <FaCreditCard /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/cart"}>
                <FaShoppingCart /> My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/add-review"}>
                <FaStar /> Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/my-booking"}>
                <FaListAlt /> My Booking
              </NavLink>
            </li>
          </>
        )}
        <hr className="border-white" />
        {/* General Menu */}
        <li>
          <NavLink to={"/"}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>
            <FaUtensils /> Menu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/order/salad"}>
            <MdFastfood />
            Order Food
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
