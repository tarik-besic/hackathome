import React from "react";
import add from "../../assets/images/add-images.svg";
import elissa from "../../assets/images/elissa.png";
import DropDown from "../../components/DropDown";
import HeaderImage from "../../components/headerImg";
import Input from "../../components/input";

function Project() {
  return (
    <div className="container">
        <HeaderImage img={elissa} text={"UNOS PODATAKA O VOLONTERSKOJ AKCIJI"} />
      <h2>Forma - Kreiranje prijava za volonterske akcije</h2>
      <div className="input-wrapper">
        <div className="left">
          <Input name="Naziv akcije:" />
          <Input name="Organizator:" />
          <Input name="Broj telefona:" />
          <Input name="Email:" />
          <DropDown
            name="Socijalne mreže"
            select="Odaberi socijalnu mrežu"
            option1="Facebook"
            option2="Instagram"
            option3="Twitter"
            option4="TikTok"
          />
        </div>

        <div className="left">
          <Input name="Lokacija:" />
          <Input name="Datum:" />
          <Input name="Vrijeme:" />
          <Input name="Zarađeni sati:" />
          <DropDown
            name="Tip projekta"
            select="Odaberi tip projekta"
            option1="Indirektno"
            option2="Direktno"
            option3="Istraživanje"
            option4="Zagovaranje"
          />
        </div>
      </div>

      <div className="row">
        <div className="label">Kratki opis i karakteristike akcije: </div>
        <input type="text" className="info-input"></input>
      </div>

      <div className="row">
        <div className="add-txt">
          IZABERITE PROMOTIVNU SLIKU ZA VAŠU AKCIJU:
        </div>

        <img alt="" src={add} />

        <button className="upload">OBJAVI</button>
      </div>
    </div>
  );
}
export default Project;