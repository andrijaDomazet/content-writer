import React from "react";
import "./Carousel.scss";
import img from "./img/background.jpg";
import { images } from "../../images.js";

export default function Carousel(props) {
  console.log("Slike", images.img);
  console.log(props);

  return (
    <div className="carousel">
      {/* <div></div>
      <div></div>
      <div></div>
      <div></div> */}
      <img src={images[props.showingNumber].img} alt="picture" />
      <div
        className="overlay"
        style={{ background: images[props.showingNumber].overlay }}
      ></div>
    </div>
  );
}
