import React from "react";
import "./global.scss";

import Header from "./components/header";
import Home from "./pages/home";

export default function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}