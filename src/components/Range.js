import React, { useState } from "react";
import "./Range.scss";

// import principal from "./range betheshark/principal.png";
import Ep from "./range/ep.png";
import Mp from "./range/mp.png";
import Co from "./range/co.png";
import Btn from "./range/btn.png";
import Sb from "./range/sb.png";

import flatEP from "./range/FLAT VS EP-MP.png";
import flatBTN from "./range/FLAT BTN VS CO.png";
import defbbvssb from "./range/BB 3BET SB.png";

import raiseEP from "./range/3BET SB VS EP-MP.png";
import raiseCO from "./range/3BET SB VS CO-BTN.png";

function Range() {
  const [background, setBackground] = useState(Btn);
  const [titulo, setTitulo] = useState();

  const chamar = (background, titulo) => {
    setBackground(background);
    setTitulo(titulo);
  };

  return (
    <div className="container">
      <div className="imagen">
        <img
          src={background}
          className="geral-image"
          alt="range inicial"
          width="500"
          heigth="450"
        />
      </div>
      <div className="titulo">
        <h7>{titulo}</h7>
      </div>
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
              onClick={() => chamar("", "Testando esse caraio")}
            >
              OOP
            </button>
          </div>
          <div>
            <button
              className="open"
              onClick={() => chamar(Mp, "Mp - Open raise")}
            >
              MP
            </button>
            <button
              className="flat"
              onClick={() => chamar(flatEP, "MP vs Open Raise EP")}
            >
              VS EP
            </button>
            <button className="oop">IP</button>
            <button className="oop">OOP</button>
          </div>

          <div>
            <button
              className="open"
              onClick={() => chamar(Co, "Ep - Open raise")}
            >
              CO
            </button>
            <button
              className="flat"
              onClick={() => chamar(flatEP, "CO vs Open Raise EP - MP")}
            >
              vs EP-MP
            </button>
            <button className="oop">IP</button>
            <button className="oop">OOP</button>
          </div>
          <div>
            <button
              className="open"
              onClick={() => chamar(Btn, "Ep - Open raise")}
            >
              BTN
            </button>
            <button
              className="flat"
              onClick={() => chamar(flatEP, "BTN vs Open Raise EP - MP")}
            >
              vs EP-MP
            </button>
            <button
              className="flat"
              id="co"
              onClick={() => chamar(flatBTN, "BTN vs Open Raise CO")}
            >
              vs CO
            </button>
            <button
              className="oop"
              onClick={() => chamar(defbbvssb, "BTN vs 3bet do BB")}
            >
              IP
            </button>
          </div>
          <div>
            <button
              className="open"
              onClick={() => chamar(Sb, "Ep - Open raise")}
            >
              SB
            </button>
            <button
              className="raise"
              onClick={() => chamar(raiseEP, "Sb 3bet EP - MP")}
            >
              vs EP-MP
            </button>
            <button
              className="raise"
              onClick={() => chamar(raiseCO, "Sb 3bet Co - BTN")}
            >
              vs CO BTN
            </button>
          </div>
          <div>
            <button className="call">Ep/MP</button>
            <button className="call">CO</button>
            <button className="call">BTN</button>
            <button className="call">SB</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Range;
