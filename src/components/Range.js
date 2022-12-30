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

import bbDefendEP from "./range/bb vs ep.png";
import bbDefendCo from "./range/bb vs co.png";
import bbDefendBtn from "./range/bb vs btn.png";
import bbDefendSb from "./range/bb vs sb.png";

import epIp from "./range/ep ip.png";
import epOop from "./range/ep oop.png";
import mpIp from "./range/mp ip.png";
import mpOop from "./range/mp oop.png";
import coIp from "./range/co ip.png";
import coOop from "./range/co oop.png";
import btnIp from "./range/btn ip.png";

function Range() {
  const [background, setBackground] = useState(Btn);
  const [titulo, setTitulo] = useState();
  const [size, setSize] = useState();

  const chamar = (background, titulo, size) => {
    setBackground(background);
    setTitulo(titulo);
    setSize(size);
  };

  return (
    <div className="container">
      <div className="imagen">
        <img
          src={background}
          className="geral-image"
          alt="range inicial"
          width="600px"
        />
      </div>
      <div className="titulo">
        <h3>{titulo}</h3>
        <div className="size">
          <h4>Size: {size}</h4>
        </div>
      </div>
      <div className="geral">
        <div className="esquerda">
          <div>
            <button
              className="open"
              onClick={() => chamar(Ep, "Ep - Open raise", "2 bb")}
            >
              EP
            </button>
            <button
              className="oop"
              onClick={() => chamar(epIp, "Ep vs 3bet Ip", "4bet 2,2x")}
            >
              IP
            </button>
            <button
              className="oop"
              onClick={() => chamar(epOop, "Ep vs 3bet Oop", "4bet 2,75x")}
            >
              OOP
            </button>
          </div>
          <div>
            <button
              className="open"
              onClick={() => chamar(Mp, "Mp - Open raise", "2 bb")}
            >
              MP
            </button>
            <button
              className="flat"
              onClick={() =>
                chamar(flatEP, "MP vs Open Raise EP", "3bet - 3,0x")
              }
            >
              VS EP
            </button>
            <button
              className="oop"
              onClick={() => chamar(mpIp, "MP vs 3bet Ip", "4bet 2,2x")}
            >
              IP
            </button>
            <button
              className="oop"
              onClick={() => chamar(mpOop, "MP vs 3bet Oop", "4bet 2,2x")}
            >
              OOP
            </button>
          </div>

          <div>
            <button
              className="open"
              onClick={() => chamar(Co, "Ep - Open raise", "2,2 bb")}
            >
              CO
            </button>
            <button
              className="flat"
              onClick={() =>
                chamar(flatEP, "CO vs Open Raise EP - MP", "3bet - 3,0x")
              }
            >
              vs EP-MP
            </button>
            <button
              className="oop"
              onClick={() => chamar(coIp, "Co vs 3bet Ip", "4bet 2,2x")}
            >
              IP
            </button>
            <button
              className="oop"
              onClick={() => chamar(coOop, "Co vs 3bet Oop", "4bet 2,75x")}
            >
              OOP
            </button>
          </div>
          <div>
            <button
              className="open"
              onClick={() => chamar(Btn, "Ep - Open raise", "2,2 bb")}
            >
              BTN
            </button>
            <button
              className="flat"
              onClick={() =>
                chamar(flatEP, "BTN vs Open Raise EP - MP", "3bet - 3,0x")
              }
            >
              vs EP-MP
            </button>
            <button
              className="flat"
              id="co"
              onClick={() =>
                chamar(flatBTN, "BTN vs Open Raise CO", "3bet - 3,0x")
              }
            >
              vs CO
            </button>
            <button
              className="oop"
              onClick={() => chamar(btnIp, "BTN vs 3bet Ip", "4bet - 2,2x")}
            >
              IP
            </button>
          </div>
          <div>
            <button
              className="open"
              onClick={() => chamar(Sb, "Ep - Open raise", "2,5 bb")}
            >
              SB
            </button>
            <button
              className="raise"
              onClick={() =>
                chamar(raiseEP, "Sb 3bet EP - MP", "3bet - 4,5x / 4bet - 2,75x")
              }
            >
              vs EP-MP
            </button>
            <button
              className="raise"
              onClick={() =>
                chamar(
                  raiseCO,
                  "Sb 3bet Co - BTN",
                  "3bet - 4,5x / 4bet - 2,75x"
                )
              }
            >
              vs CO BTN
            </button>
          </div>
          <div>
            <button
              className="call"
              onClick={() =>
                chamar(
                  bbDefendEP,
                  "BB defende vs EP",
                  "3bet - 4,5x / 4bet - 2,75x"
                )
              }
            >
              Ep/MP
            </button>
            <button
              className="call"
              onClick={() =>
                chamar(
                  bbDefendCo,
                  "BB defende vs CO ",
                  "3bet - 4,5x / 4bet - 2,75x"
                )
              }
            >
              CO
            </button>
            <button
              className="call"
              onClick={() =>
                chamar(
                  bbDefendBtn,
                  "BB defende vs Btn",
                  "3bet - 4,5x / 4bet - 2,75x"
                )
              }
            >
              BTN
            </button>
            <button
              className="call"
              onClick={() =>
                chamar(
                  bbDefendSb,
                  "BB defende vs Sb",
                  "3bet - 4,5x / 4bet - 2,75x"
                )
              }
            >
              SB
            </button>
          </div>
        </div>
        <div className="direita"></div>
      </div>
    </div>
  );
}

export default Range;
