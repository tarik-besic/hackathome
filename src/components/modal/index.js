import React from "react";
import Button from "../button/index";

function Modal(props) {
  return (
    <forum>
      <div className="modal-wrapper">
        <div className={`modal ${props?.className ?? ""}`} style={props?.style}>
          <div className="modal-header">
            <div className="header-txt">Forma za prijavu</div>
          </div>
          <div className="center">
            <label>Ime & Prezime:</label>

            <input className="input" type="text"></input>
            <label>Broj telefona:</label>
            <input className="input" type="text"></input>
            <label>Email:</label>
            <input className="input" type="email"></input>
            <label>Srednja škola:</label>
            <input className="input" type="text" placeholder=""></input>
            <button className="signup-button">Prijavi se</button>
          </div>
        </div>
        <div
          className="background"
          onClick={() => {
            if (props?.close) props?.close();
          }}
        />
      </div>
    </forum>
  );
}

export default Modal;