import React from "react";
import data from "../../Deatils";
import "./Portfolio.scss";

export default function Portfolio() {
  console.log(data);

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="papers">{papers()}</div>
    </div>
  );
}

const papers = () => {
  return data.map((paper, index) => {
    return (
      <div key={index} className="paper">
        <h5>{paper.title}</h5>
        <p>{paper.body}</p>
      </div>
    );
  });
};
