import React from "react";

function DropDown(props) {
  return (
    <div className="row">
      <div className="label">{props.name}</div>
      <select className="input">
        <option disabled selected value>
          {props.select}
        </option>
        <option>{props.option1}</option>
        <option>{props.option2}</option>
        <option>{props.option3}</option>
        <option>{props.option4}</option>
      </select>
    </div>
  );
}

export default DropDown;
