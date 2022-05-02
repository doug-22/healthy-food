import React from "react";

import "./styles.scss";

export default function CardBlog({image, title, authorPhoto, AuthorName}) {
  return (
    <div className="container-card-blog">
      <img className="image-blog" src={image} alt="" />
      <div className="content-info-blog">
        <h3>{title}</h3>
        <div className="content-author">
          <img src={authorPhoto} alt="" />
          <p>{AuthorName}</p>
        </div>
      </div>
    </div>
  );
}