import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, useScrollTrigger, LinearProgress, ButtonBase, AppBar, Box, Toolbar, IconButton, Typography, Menu, Grid, Container, Button, Tooltip, MenuItem } from '@material-ui/core';


// assets
import { IconTable,IconChartBar,IconAffiliate,IconBallFootball,IconUsers } from '@tabler/icons';
import AboutImage from '../../../../assets/images/about.png';
import AuthImage from '../../../../assets/images/auth/auth-pattern.svg';
import useStyles from '../../../../styles/styles';
import MainCard from '../../../../ui-component/cards/MainCard';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress color="secondary" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  function LinearProgressWithLabel2(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress color="warning"  {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  function LinearProgressWithLabel3(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress color="success" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }


//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//
const useStyles1 = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light,
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: 'linear-gradient(210.04deg, ' + theme.palette.primary[200] + ' -50.94%, rgba(144, 202, 249, 0) 83.49%)',
            borderRadius: '50%',
            top: '-30px',
            right: '-100px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: 'linear-gradient(140.9deg, ' + theme.palette.primary[200] + ' -14.02%, rgba(144, 202, 249, 0) 77.58%)',
            borderRadius: '50%',
            top: '-160px',
            right: '-130px'
        }
    },
    content: {
        padding: '16px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.primary[800],
        color: '#fff'
    },
    primary: {
        color: '#fff'
    },
    secondary: {
        color: theme.palette.primary.light,
        marginTop: '5px'
    },
    padding: {
        paddingTop: 0,
        paddingBottom: 0
    }
}));

const About = (props) => {
    const classes = useStyles();
    const classes1 = useStyles1();
    return (
        <React.Fragment>
            <Box className={classes.heroBox} style={{backgroundColor:"white"}}>
                <Grid container spacing={6} className={classes.gridContainer}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" fontWeight={400} className={classes.subtitle} color="#ffac33" style={{marginBottom:-30}}>
                         ABOUT US ---
                        </Typography><br/>
                        <Typography variant="h1" fontWeight={700} className={classes.title} color="black">
                           Best Algo Trading Software in the world 
                        </Typography><br/>
                        <Typography variant="h4" fontWeight={400} className={classes.subtitle}>
                           Trade on the house is a strategy makers. How? By allowing them to automate their quant strategies and sell them to investors and traders the world over. The best part? You never have to write a single bit of code. Algo Trading made easy.
                        </Typography>
                        <Typography variant="h4" fontWeight={500} className={classes.subtitle} style={{marginBottom:-20}}>
                           Our Improved Accuracy
                        </Typography>
                        <LinearProgressWithLabel value={95} style={{marginBottom:20}} />
                        <Typography variant="h4" fontWeight={500} className={classes.subtitle} style={{marginBottom:-20}}>
                           Reduced Risk
                        </Typography>
                        <LinearProgressWithLabel2 value={90} style={{marginBottom:20}} />
                        <Typography variant="h4" fontWeight={500} className={classes.subtitle} style={{marginBottom:-20}}>
                           Happy Customers
                        </Typography>
                        <LinearProgressWithLabel3 value={100} style={{marginBottom:20}} />
                        <Button
                            variant="contained"
                            color='secondary'
                            sx={{ width: '150px',height:'50px', marginTop:2, fontSize: '16px' }}
                        >
                            Read More
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <img src={AboutImage} width={500} alt="My Team" className={classes.largeImage} />
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.heroBox} style={{backgroundColor:"#673ab7",backgroundImage:`url(${AuthImage})`,width: '100%', display: 'flex', minHeight: '300px', alignItems: 'center', justifyContent: 'center',marginTop:100}}>
                <Grid container spacing={6} className={classes1.gridContainer} style={{marginLeft:5,marginRight:5,marginTop:15,paddingBottom:100}}>
                    <Grid item xs={12} md={3} style={{marginLeft:0}}>
                    <MainCard border={false} className={classes1.card} contentClass={classes1.content}>
                    <List className={classes1.padding}>
                        <ListItem alignItems="center" disableGutters className={classes1.padding}>
                            <ListItemAvatar>
                                <Avatar variant="rounded" className={classes1.avatar}>
                                    <IconUsers fontSize="inherit" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                className={classes1.padding}
                                sx={{
                                    mt: 0.45,
                                    mb: 0.45
                                }}
                                primary={
                                    <Typography variant="h4" className={classes1.primary}>
                                        1000
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant="subtitle2" className={classes1.secondary}>
                                        Signups
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </MainCard>
                    </Grid>
                    <Grid item xs={12} md={3} style={{marginLeft:-20}}>
                    <MainCard border={false} className={classes1.card} contentClass={classes1.content}>
                    <List className={classes1.padding}>
                        <ListItem alignItems="center" disableGutters className={classes1.padding}>
                            <ListItemAvatar>
                                <Avatar variant="rounded" className={classes1.avatar}>
                                    <IconAffiliate fontSize="inherit" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                className={classes1.padding}
                                sx={{
                                    mt: 0.45,
                                    mb: 0.45
                                }}
                                primary={
                                    <Typography variant="h4" className={classes1.primary}>
                                        30
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant="subtitle2" className={classes1.secondary}>
                                        Algos
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </MainCard>
                       
                    </Grid>
                    <Grid item xs={12} md={3} style={{marginLeft:-20}}>
                    <MainCard border={false} className={classes1.card} contentClass={classes1.content}>
                    <List className={classes1.padding}>
                        <ListItem alignItems="center" disableGutters className={classes1.padding}>
                            <ListItemAvatar>
                                <Avatar variant="rounded" className={classes1.avatar}>
                                    <IconChartBar fontSize="inherit" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                className={classes1.padding}
                                sx={{
                                    mt: 0.45,
                                    mb: 0.45
                                }}
                                primary={
                                    <Typography variant="h4" className={classes1.primary}>
                                        1500
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant="subtitle2" className={classes1.secondary}>
                                        Live Trades Daily
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </MainCard>
                    </Grid>
                    <Grid item xs={12} md={3} style={{marginLeft:-20}}>
                    <MainCard border={false} className={classes1.card} contentClass={classes1.content}>
                    <List className={classes1.padding}>
                        <ListItem alignItems="center" disableGutters className={classes1.padding}>
                            <ListItemAvatar>
                                <Avatar variant="rounded" className={classes1.avatar}>
                                    <IconBallFootball fontSize="inherit" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                className={classes1.padding}
                                sx={{
                                    mt: 0.45,
                                    mb: 0.45
                                }}
                                primary={
                                    <Typography variant="h4" className={classes1.primary}>
                                        5
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant="subtitle2" className={classes1.secondary}>
                                        Broker APIs Connected
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </MainCard>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

About.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default About;
