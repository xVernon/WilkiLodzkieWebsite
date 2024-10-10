import React , { Children, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DividerStack from './DividerStack';
import ResponsiveAppBar from './AppBar';
import MainMovie from './MainVideo';
import "./MainVideo.css";
import GameDay from './GameDay';

export default function SimpleContainer({children}) {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters="true">
        <Box sx={{height: '130vh', maxWidth: '100%'}}>
          {children}
        </Box> 
      </Container>
    </React.Fragment>
  );
}