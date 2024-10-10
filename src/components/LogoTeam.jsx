import React from "react";
import videoBg from "../assets/Klip.mp4"
import './LogoTeam.css';

const LogoTeam = () => {
    return ( <video className="logoTeam" src={videoBg} autoPlay loop muted/> )
}

export default LogoTeam;