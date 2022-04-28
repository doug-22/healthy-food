import React from "react";
import { BiSearch } from "react-icons/bi";

import "./styles.scss";
import featuredImage from "../../assets/Illustration.svg";

export default function Home() {
  return (
    <section className="container-featured">
      <div className="content-search">
        <p>
          Ready for Trying a new recipe?
        </p>
        <form className="form">
          <input className="input" placeholder="Search healthy recipes"/>
          <button className="button-search"><BiSearch className="search-icon"/></button>
        </form>
      </div>
      <img className="image-featured" src={featuredImage} alt=""/>
    </section>
  );
}