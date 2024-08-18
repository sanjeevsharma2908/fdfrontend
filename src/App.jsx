import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import LoginPopUp from "./components/Login/LoginPopUp";

const App = () => {
  const  [showLogin,setShowLogin] = useState(false);
  return (
    <>
  
    {showLogin?<LoginPopUp setShowLogin ={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin ={setShowLogin} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
