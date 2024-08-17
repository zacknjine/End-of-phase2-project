import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/auth");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className="bg-[#1b3838] p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/src/logo.png" alt="Logo" className="h-12" />
        <h1 className="font-bold text-3xl ml-4 text-white font-mono">&#127808; BORESHA FRENCH BEANS</h1>
      </div>
      
      <nav className="flex space-x-6">
        <Link to="/" className="text-white hover:text-gray-400 text-xl font-sans font-semibold">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-400 font-semibold text-xl font-sans">About Us</Link>
        <Link to="/weekly-expenses" className="text-white hover:text-gray-400 font-semibold text-xl font-sans">Weekly Expenses</Link>
        <Link to="/farm-inputs" className="text-white hover:text-gray-400 font-semibold text-xl font-sans">Farm Inputs</Link>
        <Link to="/weekly-kilos" className="text-white hover:text-gray-400 font-semibold text-xl font-sans">Weekly Kilos</Link>
      </nav>
      
      {user ? (
        <button
          onClick={handleSignOut}
          className="px-6 py-2 bg-[#84a845] text-white hover:text-[#661148] rounded-full"
        >
          Sign Out
        </button>
      ) : (
        <>
          <button
            onClick={() => navigate("/auth")}
            className="px-6 py-2 bg-[#84a845] text-white hover:text-[#661148] rounded-full"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="px-6 py-2 bg-[#84a845] text-white hover:text-[#661148] rounded-full"
          >
            Sign Up
          </button>
        </>
      )}
    </header>
  );
};

export default Navbar;