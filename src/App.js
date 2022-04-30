import React from "react";
import "./global.scss";

import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}