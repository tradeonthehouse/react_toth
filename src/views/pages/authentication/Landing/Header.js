import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
// import { Link } from 'react-router-dom';
// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Avatar, useScrollTrigger, useMediaQuery, ButtonBase, AppBar, Box, Toolbar, IconButton, Typography, Menu, Grid, Container, Button, Tooltip, MenuItem, Link } from '@material-ui/core';

// project imports
import LogoSection from '../../../../layout/MainLayout/LogoSection';

// assets
import { IconMenu2, IconMail, IconUser, } from '@tabler/icons';
import config from './../../../../config';
import Logo from './../../../../ui-component/Logo';

// style constant
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    headerAvatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        transition: 'all .2s ease-in-out',
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.dark,
        '&:hover': {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light
        }
    },
    boxContainer: {
        width: '228px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 'auto'
        }
    }
}));


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//

const Header = (props) => {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [visible, setVisible] = React.useState("");

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(()=>{
        // console.log(window.location.pathname);
        setVisible(window.location.pathname)
    })
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: "white" }}>
        <Toolbar>
        <Link href="/home" color="inherit" style={{textDecoration: 'none'}}>
            <ButtonBase disableRipple>
                <Logo />
            </ButtonBase>
        </Link>
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                      >
                      <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                              <Avatar variant="rounded" className={classes.headerAvatar} color="inherit">
                                  <IconMenu2 stroke={1.5} size="1.3rem" />
                              </Avatar>
                      </ButtonBase>
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
                     
                      >
                          <MenuItem>
                          <Link href="/home" color="inherit" style={{textDecoration: 'none'}}>
                          <Typography textAlign="center">Home</Typography>
                          </Link>
                          </MenuItem>
                          <MenuItem>
                          <Link href="/strategies" color="inherit" style={{textDecoration: 'none'}}>
                          <Typography textAlign="center">Strategies</Typography>
                          </Link>
                          </MenuItem>
                          <MenuItem>
                          <Link href="/login" color="inherit" style={{textDecoration: 'none'}}>
                          <Typography textAlign="center">Dashboard</Typography>
                          </Link>
                          </MenuItem>
                          <MenuItem>
                          <Link href="/contact" color="inherit" style={{textDecoration: 'none'}}>
                          <Typography textAlign="center">Contact</Typography>
                          </Link>
                          </MenuItem>
                          <MenuItem>
                          <Link href="/register" color="inherit" style={{textDecoration: 'none'}}>
                          <Typography textAlign="center">SIGN UP</Typography>
                          </Link>
                          </MenuItem>
                          <MenuItem>
                          <Link href="/login" color="inherit" style={{textDecoration: 'none'}}>
                          <Typography textAlign="center">SIGN IN</Typography>
                          </Link>
                          </MenuItem>
                      </Menu>
                  </Box>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:"center" } }} style={{marginLeft:310}} >
                      <Link href="/home" color="inherit" style={{textDecoration: 'none'}}>
                          <Button 
                              sx={{ my: 1, color:(visible == "/home") ? "secondary" : "black", display: 'block', marginLeft:2 }}
                          >
                              Home
                          </Button>
                      </Link>
                      <Link href="/strategies" color="inherit" style={{textDecoration: 'none'}}>
                          <Button
                              sx={{ my: 1, color:(visible == "/strategies") ? "secondary" : "black", display: 'block', marginLeft:2 }}
                          >
                              Strategies
                          </Button>
                      </Link>
                      <Link href="/login" color="inherit" style={{textDecoration: 'none'}}>
                          <Button
                              sx={{ my: 1, color: 'black', display: 'block', marginLeft:2 }}
                          >
                              Dashboard
                          </Button>
                      </Link>
                      <Link href="/contact" color="inherit" style={{textDecoration: 'none'}}>
                          <Button
                              sx={{ my: 1, color:(visible == "/contact") ? "secondary" : "black", display: 'block', marginLeft:2 }}
                          >
                              Contact
                          </Button>
                      </Link>
                      <div style={{marginTop:5,marginLeft:70}}>
                          <Link href="/register" color="inherit" style={{textDecoration: 'none'}}>
                             <Button variant="contained" style={{width:110, height:40, marginLeft:150}}>SIGN UP</Button>
                          </Link>
                          <Link href="/login" color="inherit" style={{textDecoration: 'none'}}>
                             <Button color="secondary" style={{width:110,height:40, marginLeft:20}} variant="contained" startIcon={<IconUser />}>SIGN IN</Button>
                          </Link>
                      </div>
                  </Box>
        </Toolbar>
      </AppBar>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
