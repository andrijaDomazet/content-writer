import React from "react";
import "./AboutMe.scss";
import Slika from "../../girl.jpg";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="picture">
        <img src={Slika} alt="" />
      </div>
      <h3>About me</h3>
      <div className="details">
        <div className="personalDetails">Personal details</div>
        <div className="lorem">
          Lorem ipsum
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis vel reiciendis, soluta quidem assumenda quisquam cumque,
            ab culpa modi ducimus ut aut vitae minus voluptates explicabo
            ratione sit omnis autem, nulla consequuntur. Eum officiis vero
            asperiores et necessitatibus!
          </p>
        </div>
      </div>
    </div>
  );
}
