import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Divider, TextField, useScrollTrigger, ButtonBase, AppBar, Box, Toolbar, IconButton, Typography, Menu, Grid, Container, Button, Tooltip, MenuItem } from '@material-ui/core';


// assets
import { IconMenu2, IconMail, IconUser, } from '@tabler/icons';
import ConactImage from '../../../../assets/images/contact.png';
import useStyles from '../../../../styles/styles';
import Header from './Header';
import { gridSpacing } from './../../../../store/constant';
import MainCard from '../../../../ui-component/cards/MainCard';


//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//

const Contact = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header />
            <Box className={classes.heroBox}>
                <Grid container spacing={10} className={classes.gridContainer} style={{marginTop:-90}}>
                    <Grid item xs={12} md={6}>
                    <img src={ConactImage} width={500} alt="My Team" className={classes.largeImage} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                                            <Typography style={{marginBottom:10}} variant="h2" color="inherit">Contact For Any Query</Typography>
                                            <TextField
                                            style={{marginTop:5}}
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            label="Full Name"
                                            />
                                            <TextField
                                            style={{marginTop:8}}
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Email"
                                            />
                                            <TextField
                                            style={{marginTop:8}}
                                            required
                                            fullWidth
                                            id="outlined-required"
                                            label="Subject"
                                            />
                                            <TextField
                                            style={{marginTop:8}}
                                            id="outlined-multiline-static"
                                            label="Multiline"
                                            multiline
                                            fullWidth
                                            rows={4}
                                            label="Message"
                                            />
                                            <Button type="submit" color='warning' variant="contained" style={{width:130,padding:7,marginTop:20,float:'right'}}>Send Message</Button>
                                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

Contact.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Contact;
