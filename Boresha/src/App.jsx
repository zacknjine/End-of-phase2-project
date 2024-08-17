import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BackgroundSection from "./Components/BackgroundSection";
import About from "./Components/About";
import Cards from "./Components/Cards";
import MoreInfo from "./Components/MoreInfo";
import Auth from "./Auth";
import Home from "./Components/Home";
import WeeklyExpenses from "./Components/ WeeklyExpenses";
import FarmInputs from "./Components/FarmInputs";
import WeeklyKilos from "./Components/WeeklyKilos";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/background" element={<BackgroundSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/more-info" element={<MoreInfo />} />
        <Route path="/weekly-expenses" element={<WeeklyExpenses />} />
        <Route path="/farm-inputs" element={<FarmInputs />} />
        <Route path="/weekly-kilos" element={<WeeklyKilos />} />
        <Route path="*" element={<Home />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
};

export default App;
