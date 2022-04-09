import React from "react";

import Cards from "../../components/card";

import img1 from "../../assets/images/card-image.jpg";

import img2 from "../../assets/images/card-image2.jpg";

function CurrentActions() {
  return (
    <div className="container">
      <div className="card-flex">
        <Cards
          image={img1}
          txt="Akcija dostavljanja hrane"
          first="Pomozi penzionerima i bolesnim"
          second="Razvij svoje socijalne vještine"
          third="Učini dobro djelo"
        />

        <Cards
          image={img2}
          txt="Akcija čišćenja okoline"
          first="Pokupi smeće u prirodi"
          second="Sačuvaj svoju okolinu"
          third="Lakše diši"
        />
      </div>
    </div>
  );
}

export default CurrentActions;
