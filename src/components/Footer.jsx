import React from "react";
import ResponsiveAppBar from "./AppBar";
import SimpleContainer from "./Container";
import SocialsLinks from "./SocialsLinks";
import DividerStack from './DividerStack';
import MainMovie from './MainVideo';
import "./MainVideo.css";
import GameDay from './GameDay';
import Divider from '@mui/material/Divider';
import "./Footer.css";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Carousel from "./Carousel";

const Footer = () => {
  return (
    <>
      <footer>
        <h2>Our Partners</h2>
        <Carousel />
      <section class="top">
        <div class="links">
          <div class="links-column">
            <h2>TEAM</h2>
            <a>About</a>
            <a>Skills</a>
            <a>Attributes</a>
            <a>Projects</a>
            <a>Testimonials</a>
          </div>
          <div class="links-column">
            <h2>SEASON</h2>
            <a>GitHub</a>
            <a>npm</a>
            <a>Codepen</a>
            <a>Codesandbox</a>
            <a>Dribbble</a>
          </div>
          <div class="links-column">
            <h2>LEAGUE</h2>
            <a>GitHub</a>
            <a>npm</a>
            <a>Codepen</a>
            <a>Codesandbox</a>
            <a>Dribbble</a>
          </div>
          <div class="links-column socials-column">
            <h2>Social Media</h2>
            <p>
              Follow us on social media to get the latest awesome reels and
              posts.
            </p>
            <div class="socials">
              <a > <FacebookIcon /></a>
              <a> <InstagramIcon /></a>
              <a> <YouTubeIcon/> </a>
              <a> <XIcon/> </a>
            </div>
          </div>
        </div>
      </section>
      <section class="bottom">
        <p class="copyright">© 2024 All rights reserved</p>
        <div class="legal">
          <a> Contact </a>
          <a> Terms </a>
          <a> Privacy </a>
        </div>
      </section>
    </footer>
    </>
  );
};

export default Footer;
