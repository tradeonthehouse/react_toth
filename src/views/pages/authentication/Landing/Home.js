import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, useScrollTrigger, ButtonBase, AppBar, Box, Link, Toolbar, IconButton, Typography, Menu, Grid, Container, Button, Tooltip, MenuItem } from '@material-ui/core';


// assets
import { IconMenu2, IconMail, IconUser, } from '@tabler/icons';
import HomeImage from '../../../../assets/images/home.png';
import useStyles from '../../../../styles/styles';


//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//

const Home = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.heroBox}>
                <Grid container spacing={6} className={classes.gridContainer}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" fontWeight={700} className={classes.title} color="primary">
                           Human Intelligence combined with Artificial Intelligence: Explore the power 
                        </Typography><br/>
                        <Typography variant="h3" className={classes.subtitle} >
                            The era of trading manually has passed.
                        </Typography>
                        <Typography variant="h4" className={classes.subtitle}>
                            To maximize your income, employ our algorithms, which are driven by artificial intelligence, machine learning, fundamental analysis, data analysis, and mathematics.
                        </Typography>
                        <Typography variant="h4" className={classes.subtitle}>
                            Instead of feelings, we choose data.
                        </Typography>
                        <Link href="/contact" color="inherit" style={{textDecoration: 'none'}}>
                        <Button
                            variant="contained"
                            sx={{ width: '150px',height:'50px', fontSize: '16px',backgroundColor:'#ffac33' }}
                        >
                            Contact Us
                        </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <img src={HomeImage} width={500} alt="My Team" className={classes.largeImage} />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

Home.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Home;
