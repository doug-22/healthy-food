import React from "react";

import "./styles.scss";

export default function CardRecipe({image, title}) {
  return (
    <div className="container-card-recipe">
      <img className="image-recipe" src={image} alt="" />
      <div className="content-info">
        <h3>{title}</h3>
        <button>See Recipe</button>
      </div>
    </div>
  );
}