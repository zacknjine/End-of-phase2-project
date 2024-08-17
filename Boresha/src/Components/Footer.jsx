import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#661148] text-white py-5 px-5">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Boresha French Beans</h1>
            <p className="mt-2">
              &copy; 2024 Boresha French Beans. All rights reserved.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="mt-2">Email: info@boreshafrenchbeans.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
