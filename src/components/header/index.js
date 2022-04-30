import React, { useState } from "react";

import UseMedia from "../hooks/useMedia";

import "./styles.scss";

export default function Header({green}) {

  const [open, setOpen] = useState(false);
  const mobile = UseMedia('(max-width: 40rem)');

  return (
    <header className={`container-header ${green && 'green'}`}>
      <a href="#/"><h2 className="title">Healthy Food</h2></a>

      {mobile && (
        <div className="mobile-button" onClick={() => setOpen(!open)}>
          <div className={`${open && 'mobile-button-line'}`}/>
          <div className={`${open && 'mobile-button-line'}`}/>
          <div className={`${open && 'mobile-button-line'}`}/>
        </div>
      )}
      
      <nav className={`${mobile ? 'nav-mobile' : 'nav'} ${open && 'nav-mobile-active'}`}>
        <ul>
          <li><a href="#/" className="nav-button">HEALTHY RECIPES</a></li>
          <li><a href="#/" className="nav-button">BLOG</a></li>
          <li><a href="#/" className="nav-button">JOIN</a></li>
          <li><button className='login-button'>REGISTER</button></li>
        </ul>
      </nav>
    </header>
  );
}