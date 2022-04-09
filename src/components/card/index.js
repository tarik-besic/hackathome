import React from "react";
import Button from "../button";

function Cards(props) {
  return (
    <div className="card-wrapper">
      <img className="card-img" src={props.image} />
      <div className="txt">{props.txt}</div>
      <ul>
        <li>{props.first}</li>

        <li>{props.second}</li>

        <li>{props.third}</li>
      </ul>
      <Button input="POPUNI FORMU I PRIJAVI SE" />
    </div>
  );
}

export default Cards;
