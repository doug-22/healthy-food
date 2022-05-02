import React, { useState } from "react";

import UseMedia from "../Hooks/useMedia";

import "./styles.scss";

export default function Header({green}) {

  const [open, setOpen] = useState(false);
  const mobile = UseMedia('(max-width: 40rem)');

  return (
    <header className={`container-header ${green && 'green'} ${mobile && 'header-mobile'}`}>
      <a href="#featured"><h2 className="title">Healthy Food</h2></a>

      {mobile && (
        <div className="mobile-button" onClick={() => setOpen(!open)}>
          <div className={`${open && 'mobile-button-line'}`}/>
          <div className={`${open && 'mobile-button-line'}`}/>
          <div className={`${open && 'mobile-button-line'}`}/>
        </div>
      )}
      
      <nav className={`${mobile ? 'nav-mobile' : 'nav'} ${open && 'nav-mobile-active'}`}>
        <ul>
          <li><a href="#recipes" className="nav-button">HEALTHY RECIPES</a></li>
          <li><a href="#blog" className="nav-button">BLOG</a></li>
          <li><a href="#join" className="nav-button">JOIN</a></li>
          <li><button className='login-button'>REGISTER</button></li>
        </ul>
      </nav>
    </header>
  );
}