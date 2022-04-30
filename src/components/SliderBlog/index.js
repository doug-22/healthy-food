import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import useMedia from "../hooks/useMedia";

import CardBlog from "../CardBlog";

import "./styles.scss";
import Blog_1 from "../../assets/blog_image_1.svg";
import Blog_2 from "../../assets/blog_image_2.svg";
import Blog_3 from "../../assets/blog_image_3.svg";
import Blog_4 from "../../assets/blog_image_4.svg";
import User from "../../assets/user.png";

export default function Slider() {

  const mobile = useMedia('(max-width: 40rem)');

  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 1.2);
    if( x > 0) {
        x = 0;            
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    if(mobile) {
      let x = scrollX - Math.round(window.innerWidth / 1.2);
      if( (window.innerWidth - (4 * 330)) > x) {
          x = (window.innerWidth - (4 * 330));
      }
      setScrollX(x);
    } else {
      let x = scrollX - Math.round(window.innerWidth / 1.2);
      if( (window.innerWidth - (4 * 330)) > x) {
          x = (window.innerWidth - (4 * 330)) - 200;
      }
      setScrollX(x);
    }
  }

  return (
    <div className="container-slider">
      <div className="arrow-left" onClick={handleLeftArrow} >
        <BsArrowLeftShort style={{fontSize: 40}}/>
      </div>
      <div className="arrow-right"  onClick={handleRightArrow}>
        <BsArrowRightShort style={{fontSize: 40}}/>
      </div>

      <div className="content-shadow-reft"></div>
      <div className="content-shadow-right"></div>

      <div className="content-slider-area">
        <div
          className="content-slider-list"
          style={{
            marginLeft: scrollX,
            width: 4 * 300
          }}
        
        >
          <CardBlog image={Blog_1} title={"Quick-start guide to nuts and seeds"} authorPhoto={User} AuthorName={"Kevin Ibrahim"} />
          <CardBlog image={Blog_2} title={"Nutrition: Tips for Improving Your Health"} authorPhoto={User} AuthorName={"Mike Jackson"} />
          <CardBlog image={Blog_3} title={"The top 10 benefits of eating healthy"} authorPhoto={User} AuthorName={"Bryan McGregor"} />
          <CardBlog image={Blog_4} title={"Lorem Ipsum is simply dummy text"} authorPhoto={User} AuthorName={"Douglas Oliveira"} />
        </div>
      </div>
    </div>
  );
}