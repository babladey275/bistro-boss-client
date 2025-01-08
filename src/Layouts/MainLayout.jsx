import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  // console.log(location);
  const isNoHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="max-w-7xl mx-auto">
      {isNoHeaderFooter || (
        <header>
          <Navbar />
        </header>
      )}
      <main className="min-h-[calc(100vh-310px)]">
        <Outlet />
      </main>
      {isNoHeaderFooter || (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default MainLayout;
