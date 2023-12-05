import React from "react";
import "./App.css";
import SignUp from "./pages/sign_up/SignUp";
import SignIn from "./pages/sign_in/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home_chat/HomeChat";
import MobileChat from "./pages/mobile_chat/MobileChat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<MobileChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
