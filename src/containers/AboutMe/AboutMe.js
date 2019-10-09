import React from "react";
import "./AboutMe.scss";
import Slika from "../../girl.jpg";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <h3>About me</h3>
      <div style={{ display: "flex" }}>
        <div className="picture">
          <img src={Slika} alt="" />
        </div>
        <div className="personalDetails">Personal details</div>
        <div className="lorem">
          Lorem ipsum
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis vel reiciendis, soluta quidem assumenda quisquam cumque,
            ab culpa modi ducimus ut aut vitae minus voluptates explicabo
            ratione sit omnis autem, nulla consequuntur. Eum officiis vero
            asperiores et necessitatibus! Aperiam ipsa quaerat veritatis at,
            quis aspernatur provident officiis laboriosam aliquid ullam qui
            quibusdam quod possimus voluptatibus error architecto earum quia,
            reprehenderit deserunt a itaque doloribus est assumenda vitae!
            Ratione sint, sed, sapiente perferendis, tempora eius architecto
            tempore quisquam aliquam nemo alias! Nobis, aut illo. Minus culpa
            ipsa nulla, nesciunt incidunt aut ratione vitae unde explicabo iure,
            illum aspernatur amet vero fugit.
          </p>
        </div>
      </div>
    </div>
  );
}
