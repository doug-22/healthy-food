import React, {useState, useEffect} from "react";
import "./global.scss";

import Header from "./components/header";
import Home from "./pages/home";
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
    <>
      <Header green={greenHeader} />
      <Home />
      <Footer />
    </>
  );
}