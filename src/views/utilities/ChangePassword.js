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

const ChangePassword = () => {
    const classes = useStyles();

    return (
        <MainCard>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <MainCard>
                            <Typography variant="h5" color="inherit">Change Password</Typography>
                            <Divider className={classes.divider} />
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField
                                prop sx={{width: 400}}
                                style={{marginLeft:18,marginTop:8}}
                                required
                                id="outlined-required"
                                label="Current Password"
                                />
                            </Grid>

                                <TextField
                                prop sx={{width: 400}}
                                style={{marginLeft:18,marginTop:8}}
                                required
                                id="outlined-required"
                                label="New Password"
                                />

                               <TextField
                                prop sx={{width: 400}}
                                style={{marginLeft:18,marginTop:8}}
                                required
                                id="outlined-required"
                                label="Confirm Password"
                                />

                            <Button variant="contained" style={{width:150,padding:7,marginTop:20,marginLeft:20}}>Change Password</Button>
                            <Button variant="outlined" color='error' style={{width:100,padding:7,marginTop:20,marginLeft:20}}>Clear</Button>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </MainCard>
    );
};

export default ChangePassword;
