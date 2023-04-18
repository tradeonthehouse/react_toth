import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import configData from '../../../../config';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import {
    Avatar,
    Link,
    Card,
    CardContent,
    Chip,
    ClickAwayListener,
    Divider,
    Grid,
    InputAdornment,
    List,
    ListItemIcon,
    ListItemText,
    OutlinedInput,
    Paper,
    Popper,
    Switch,
    Typography,
    ButtonBase,
    Box,
    Button
} from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';

// project imports
import MainCard from '../../../../ui-component/cards/MainCard';
import Transitions from '../../../../ui-component/extended/Transitions';
import { LOGOUT } from './../../../../store/actions';

// assets
import { IconLogout, IconSearch, IconSettings, IconArrowRight, IconUser, IconKey, IconLayoutGridAdd, IconId } from '@tabler/icons';
import User1 from './../../../../assets/images/users/user-round.svg';

// style const
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

//-----------------------|| PROFILE MENU ||-----------------------//

const LandingMenus = () => {

    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [visible, setVisible] = React.useState("");

    const theme = useTheme();

    useEffect(()=>{
        console.log(window.location.pathname);
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
        <React.Fragment>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:"center" } }} style={{marginLeft:150}} >
                      <Link href="/home" color="inherit" style={{textDecoration: 'none'}}>
                          <Button 
                              sx={{ my: 1, color:(visible == "/home") ? "secondary" : "black", display: 'block', marginLeft:2 }}
                          >
                              Home
                          </Button>
                      </Link>
                      <Link href="/utils/trading-algo" color="inherit" style={{textDecoration: 'none'}}>
                          <Button
                              sx={{ my: 1, color:(visible == "/utils/trading-algo") ? "secondary" : "black", display: 'block', marginLeft:2 }}
                          >
                              Strategies
                          </Button>
                      </Link>
                      <Link href="/dashboard/default" color="inherit" style={{textDecoration: 'none'}}>
                          <Button
                              sx={{ my: 1, color:(visible == "/dashboard/default") ? "secondary" : "black", display: 'block', marginLeft:2 }}
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
                  </Box>
        </React.Fragment>
    );
};

export default LandingMenus;
