import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-neutral-content">
      <div className="flex flex-col md:flex-row">
        {/* Contact Section */}
        <div className="w-full md:w-1/2 p-10 text-center">
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p className="leading-relaxed">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="mt-2">+88 123456789</p>
          <div className="mt-4">
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="bg-[#111827] w-full md:w-1/2 p-10 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4">Follow US</h3>
          <p>Join us on social media</p>
          <div className="flex gap-6 mt-6">
            <a href="#" className="text-2xl hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="text-2xl hover:text-primary">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-primary">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-black py-5 text-center">
        <p>Copyright © Bistro Boss. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
