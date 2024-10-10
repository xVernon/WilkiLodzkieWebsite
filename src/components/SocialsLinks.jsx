import * as React from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import './SocialsLinks.css';

function SocialsLinks() {
  return (
    <div className="social">
      <ul>
        <li>
          <a className="facebook" href="https://www.facebook.com/WilkiLodz/?locale=pl_PL">
            FACEBOOK
            <FacebookIcon className="logo"/>
          </a>
        </li>
        <li>
          <a className="instagram" href="https://www.instagram.com/wilki_lodzkie/?hl=pl">
            INSTAGRAM
            <InstagramIcon className="logo"/>
          </a>
        </li>
        <li>
          <a className="youtube" href="https://www.youtube.com/watch?v=93eHLbfCmT0&list=PL2We6Yli5C-Sxbs6X96oVZwpt1OSr0-Pv&pp=iAQB">
            YOUTUBE
            <YouTubeIcon className="logo"/>
          </a>
        </li>
        <li>
          <a className="twitter" href="https://twitter.com/wilkilodzkie">
            X (TWITTER)
            <XIcon className="logo"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialsLinks;
