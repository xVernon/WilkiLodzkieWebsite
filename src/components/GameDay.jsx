import React from "react";
import Countdown from "./Countdown";
import "./GameDay.css";
import homeLogoTeam from "../images/wilkiLogo.png";
import awayLogoTeam from "../images/falconsLogo.png";

const GameDay = () => {
  return (
    <div className="gameDayContainer">
      <div className="gameCard">
        <div className="teamLeft">
            <img src={homeLogoTeam} />
            <p>WILKI LODZKIE</p>
        </div>
        <div className="gameInfo">
            <Countdown />
        </div>
        <div className="teamRight">
            <img src={awayLogoTeam} />
            <p>TYCHY FALCONS</p>
        </div>
      </div>
     
    </div>
  );
};

export default GameDay;
