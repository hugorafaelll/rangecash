import React, { useState } from "react";
import "./Range.scss";

// import principal from "./range betheshark/principal.png";
import Ep from "./range/ep.png";
import Mp from "./range/mp.png";
import Co from "./range/co.png";
import Btn from "./range/btn.png";
import Sb from "./range/sb.png";

function Range() {
  const [background, setBackground] = useState();
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
            <button className="flat">VS EP </button>
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
            <button className="flat">vs EP-MP</button>
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
            <button className="flat">vs EP-MP</button>
            <button className="flat" id="co">
              vs CO
            </button>
            <button className="oop">OOP</button>
          </div>
          <div>
            <button
              className="open"
              onClick={() => chamar(Sb, "Ep - Open raise")}
            >
              SB
            </button>
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
