import React from "react";
import videoBg from "../assets/Klip.mp4"
import './MainVideo.css';
import LogoTeam from "./LogoTeam";


const MainMovie = () => {
    return (
        <div className='mainMovie'>
            <LogoTeam/>
            <div className="content">
                <h1>WILKI ŁÓDZKIE</h1>
                <p>AMERICAN FOOTBALL TEAM</p>
            </div>
        </div>
    )
}

export default MainMovie;