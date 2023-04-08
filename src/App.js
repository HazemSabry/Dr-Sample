import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMegaMenu from "./Components/HeaderMegaMenu";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import ContactUs from "./Pages/ContactUs";
import LoginOrSignup from "./Pages/LoginOrSignup";

function App() {
  return (
    <BrowserRouter>
      <HeaderMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Login-or-Signup" element={<LoginOrSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
