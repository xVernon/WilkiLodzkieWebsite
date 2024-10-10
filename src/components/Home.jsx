import React from "react";
import ResponsiveAppBar from "./AppBar";
import SimpleContainer from "./Container";
import SocialsLinks from "./SocialsLinks";
import DividerStack from './DividerStack';
import MainMovie from './MainVideo';
import "./MainVideo.css";
import "./Home.css"
import GameDay from './GameDay';
import Divider from '@mui/material/Divider';
import Footer from './Footer';
import BasicTable from "./BasicTable";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <SimpleContainer>
        <MainMovie />
        <GameDay />
        <ResponsiveAppBar />
        <Divider className="sectionDivider" style={{paddingTop:40, paddingBottom:40, fontSize:24}}>STANDINGS POLSKA FUTBOL LIGA PFL2</Divider>
        <Container fixed>
          <BasicTable />
        </Container>
        <Divider className="sectionDivider" style={{paddingTop:40, paddingBottom:40, fontSize:24}}>NEWS</Divider>
        <DividerStack  />
        <Footer />
      </SimpleContainer>
      <SocialsLinks />
    </>
  );
};

export default Home;
