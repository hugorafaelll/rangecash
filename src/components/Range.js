import React, { useState } from "react";
import "./Range.scss";

import principal from "./range betheshark/principal.png";
import Ep from "./range betheshark/open raise/ep 18,5.png";

function Range() {
  const [background, setBackground] = useState(principal);
  const [titulo, setTitulo] = useState();

  const chamar = (background, titulo) => {
    setBackground(background);
    setTitulo(titulo);
  };

  return (
    <div className="container">
      <div className="imagen">
        <img src={background} alt="range inicial" width="500" heigth="450" />
      </div>
      <div></div>
      <div className="geral">
        <div className="esquerda">
          <div>
            <button
              className="open"
              onClick={() => chamar(Ep, "Ep - Open raise")}
            >
              EP
            </button>
            <button
              className="oop"
              onClick={() => chamar(principal, "Testando esse caraio")}
            >
              OOP
            </button>
          </div>
          <div>
            <button className="open">MP</button>
            <button className="flat">VS EP </button>
            <button className="oop">IP</button>
            <button className="oop">OOP</button>
          </div>
          <div>
            <button className="open">CO</button>
            <button className="flat">vs EP/MP</button>
            <button className="oop">IP</button>
            <button className="oop">OOP</button>
          </div>
          <div>
            <button className="open">CO</button>
            <button className="flat">vs EP-MP</button>
            <button className="oop">IP</button>
            <button className="oop">OOP</button>
          </div>
          <div>
            <button className="open">BTN</button>
            <button className="flat">vs EP-MP</button>
            <button className="flat" id="co">
              vs CO
            </button>
            <button className="oop">OOP</button>
          </div>
          <div>
            <button className="open">SB</button>
            <button className="raise">vs EP-MP</button>
            <button className="raise">vs CO BTN</button>
          </div>
          <div>
            <button className="call">Ep/MP</button>
            <button className="call">CO</button>
            <button className="call">BTN</button>
            <button className="call">SB</button>
          </div>
          <div> direita</div>
        </div>
      </div>
    </div>
  );
}

export default Range;
