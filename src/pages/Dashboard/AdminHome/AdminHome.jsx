import React from "react";
import useAuth from "../../../hooks/useAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBoxOpen, FaMoneyBillWave, FaTruck, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {/* Revenue */}
        <div className="stat bg-purple-500 text-white shadow-md rounded-lg">
          <div className="stat-figure text-white">
            <FaMoneyBillWave className="text-5xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
        </div>

        {/* Customers */}
        <div className="stat bg-yellow-500 text-white shadow-md rounded-lg">
          <div className="stat-figure text-white">
            <FaUsers className="text-5xl" />
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        {/* Products */}
        <div className="stat bg-pink-500 text-white shadow-md rounded-lg">
          <div className="stat-figure text-white">
            <FaBoxOpen className="text-5xl" />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats.menuItems}</div>
        </div>

        {/* Orders */}
        <div className="stat bg-blue-500 text-white shadow-md rounded-lg">
          <div className="stat-figure text-white">
            <FaTruck className="text-5xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
