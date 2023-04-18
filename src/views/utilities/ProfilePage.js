import React, { useState } from 'react';
import axios from 'axios';

import configData from '../../config';
import Dp from './../../assets/images/users/user-round.svg';

// material-ui
import {
    Button,
    Typography,
    Grid,
    TextField,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    MenuItem,
    CardMedia

} from '@material-ui/core';
import { gridSpacing } from './../../store/constant';
import { makeStyles } from '@material-ui/styles';

// project imports
import MainCard from '../../ui-component/cards/MainCard';

//==============================|| SAMPLE PAGE ||==============================//

const useStyles = makeStyles((theme) => ({
    cardAction: {
        padding: '10px',
        paddingTop: 0,
        justifyContent: 'center'
    },
    primaryLight: {
        color: theme.palette.primary[200],
        cursor: 'pointer'
    },
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    avatarSuccess: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
        marginLeft: '15px'
    },
    successDark: {
        color: theme.palette.success.dark
    },
    avatarError: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        marginLeft: '15px'
    },
    errorDark: {
        color: theme.palette.orange.dark
    }
}));

const ProfilePage = () => {
    const classes = useStyles();

    return (
        <MainCard>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={5} md={6} sm={6} xs={12}>
                        <MainCard>
                            <Typography variant="h5" color="inherit">Profile Picture</Typography>
                            <Divider className={classes.divider} />
                            <img src={Dp} style={{marginLeft:110,marginTop:10}} width="100px" />
                            <Typography variant="subtitle2" style={{marginLeft:71,marginTop:10}} color="inherit">Upload/Change Your Profile Image</Typography>
                            <Button variant="contained" style={{width:130,padding:7,marginTop:20,marginLeft:100}}>Upload</Button>
                        </MainCard>
                    </Grid>
                    <Grid item lg={7} md={6} sm={6} xs={12}>
                        <MainCard>
                            <Typography variant="h5" color="inherit">Edit Account Details</Typography>
                            <Divider className={classes.divider} />

                            <TextField
                            prop sx={{width: 235}}
                            style={{marginLeft:18,marginTop:5}}
                            required
                            id="outlined-required"
                            label="First Name"
                            />
                            <TextField
                            prop sx={{width: 235}}
                            style={{marginLeft:18,marginTop:5}}
                            required
                            id="outlined-required"
                            label="Last Name"
                            />
                            <TextField
                            prop sx={{width: 488}}
                            style={{marginLeft:18,marginTop:8}}
                            required
                            id="outlined-required"
                            label="Email"
                            />

                            <TextField
                            prop sx={{width: 235}}
                            style={{marginLeft:18,marginTop:8}}
                            required
                            id="outlined-required"
                            label="Mobile"
                            />
                            <TextField
                            prop sx={{width: 235}}
                            style={{marginLeft:18,marginTop:8}}
                            required
                            id="outlined-required"
                            label="Country"
                            />
                            <TextField
                            prop sx={{width: 235}}
                            style={{marginLeft:18,marginTop:8}}
                            required
                            id="outlined-required"
                            label="State"
                            />
                            <TextField
                            prop sx={{width: 235}}
                            style={{marginLeft:18,marginTop:8}}
                            required
                            id="outlined-required"
                            label="PAN"
                            />
                            <TextField
                            prop sx={{width: 488}}
                            style={{marginLeft:18,marginTop:8}}
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            label="Address"
                            />
                            <Button variant="contained" style={{width:130,padding:7,marginTop:20,marginLeft:20}}>Change Details</Button>

                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </MainCard>
    );
};

export default ProfilePage;
