import React from "react";
import { BiSearch } from "react-icons/bi";

import CardRecipe from "../../components/CardRecipe";

import "./styles.scss";
import featuredImage from "../../assets/Illustration.svg";
import Food_1 from "../../assets/comida_1.svg";
import Food_2 from "../../assets/comida_2.svg";
import Food_3 from "../../assets/comida_3.svg";
import Food_4 from "../../assets/comida_4.svg";
import Services from "../../assets/bloco_services.svg";
import Slider from "../../components/SliderBlog";

export default function Home() {
  return (
    <>
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

      <section className="container-recipes">
        <h2>Our Best Recipes</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
        <div className="content-cards-recipes">
          <CardRecipe image={Food_1} title={"Broccoli Salad with Bacon"} />
          <CardRecipe image={Food_2} title={"Classic Beef Burgers"} />
          <CardRecipe image={Food_3} title={"Classic Potato Salad"} />
          <CardRecipe image={Food_4} title={"Cherry Cobbler on the Grill"} />
        </div>
      </section>

      <section className="container-service">
        <img className="image-service" src={Services} alt="" />
        <div className="content-service">
          <h2>
            The best services ready
            <br/>
            To serve you
          </h2>
          <br/>
          <p>
            Far far away, behind the word mountains, far from
            the countries Vokalia and Consonantia, there live the
            blind texts.
            <br/>
            <br/>
            Separated they live in Bookmarksgrove right at the
            coast of the Semantics, a large language ocean.
            <br/>
            <br/>
            A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
          </p>
          <br/>
          <button>Know More</button>
        </div>
      </section>
      
      <section className="container-blog">
        <h2>Read Our Blog</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className="content-slider">
          <Slider />
        </div>
      </section>
    </>
  );
}
