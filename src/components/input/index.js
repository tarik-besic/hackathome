import React from "react";

function Input(props) {
  return (
    <div className="row">
      <div className="label">{props.name}</div>
      <input type="text" className="input"></input>
    </div>
  );
}

export default Input;
