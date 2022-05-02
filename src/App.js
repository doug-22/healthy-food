import React, {useState, useEffect} from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./global.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Footer from "./components/Footer";

export default function App() {
  const [greenHeader, setGreenHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
        if(window.scrollY > 20){
            setGreenHeader(true);
        } else {
            setGreenHeader(false);
        }
    }

    window.addEventListener("scroll", scrollListener);
    
    return () => {
        window.removeEventListener("scroll", scrollListener);
    }
  }, []);
  
  return (
    <BrowserRouter>
      <Header green={greenHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}