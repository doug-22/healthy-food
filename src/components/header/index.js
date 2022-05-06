import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import UseMedia from "../Hooks/useMedia";

import "./styles.scss";

export default function Header({green}) {

  const [open, setOpen] = useState(false);
  const mobile = UseMedia('(max-width: 40rem)');
  const location = useLocation();

  return (
    <header className={`container-header ${green && 'green'} ${mobile && 'green'}`}>
      <Link to="/"><h2 className="title">Healthy Food</h2></Link>

      {mobile && (
        <div className={`mobile-button ${location.pathname === "/register" && 'disabled-mobile-button'}`} onClick={() => setOpen(!open)}>
          <div className={`${open && 'mobile-button-line'}`}/>
          <div className={`${open && 'mobile-button-line'}`}/>
          <div className={`${open && 'mobile-button-line'}`}/>
        </div>
      )}
      
      <nav className={`${mobile ? 'nav-mobile' : 'nav'} ${open && 'nav-mobile-active'}`}>
        <ul className={`${location.pathname === "/register" && 'disabled-mobile-button'}`}>
          <li><a href="#recipes" className="nav-button">HEALTHY RECIPES</a></li>
          <li><a href="#blog" className="nav-button">BLOG</a></li>
          <li><a href="#join" className="nav-button">JOIN</a></li>
          <li><Link to="/register"><button className='login-button'>REGISTER</button></Link></li>
        </ul>
      </nav>
    </header>
  );
}
