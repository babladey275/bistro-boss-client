import { Outlet } from "react-router-dom";
import DashboardSidebar from "../pages/Dashboard/DashboardSidebar/DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Content Area */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
