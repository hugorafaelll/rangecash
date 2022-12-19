import React, { useState } from "react";
import "./range.scss";

import principal from "./range betheshark/principal.png";

function Range() {
  const [background, setBackground] = useState(principal);

  const chamarImagen = (background) => {
    setBackground(background);
  };

  return (
    <div className="container">
      <div className="imagen">
        <img src={background} alt="range inicial" />
      </div>
    </div>
  );
}

export default Range;
