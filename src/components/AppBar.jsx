import React , {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "./MainVideo.css";
import wilkiLogo from "../images/wilkiLogo.png"
import {NavLink} from "react-router-dom";

const pages = [
  {text:'SEASON', path:'/season'}, 
  {text:'ROSTER', path:'/roster'},
  {text:'NEWS', path:'/news'},
  {text:'INFO', path:'/info'},
  {text:'TICKETS', path:'/tickets'},
  {text:'SHOP', path:'/shop'},
  {text:'OFFICIAL WEBSITE LEAGUE', path:'https://polskafutbolliga.pl/'},
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [state, setState] = useState(false);

  const changevalueonScroll = () => {
   
    const scrollValue = document.documentElement.scrollTop;
    (scrollValue > 100) ? setState(true) : setState(false); 
  }

  window.addEventListener('scroll', changevalueonScroll);

  return (
    <div>
    <AppBar position='static'>
      <Container className={state ? "appBarFloat" : "appBarStatic"} maxWidth="100%">
        <Toolbar disableGutters>
          <NavLink to="/">
            <img id="logoTeam" src={wilkiLogo} width={150}/>
            </NavLink>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
             
                
                <NavLink to={page.path}>
                   <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >{page.text} 
              </Button>
              </NavLink>
             
            ))}
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>    
    </div>
  );
}
export default ResponsiveAppBar;