import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import configData from '../../../src/config';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { IconEdit, IconFileDownload, IconSquarePlus } from '@tabler/icons';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography, TextField, Chip } from '@material-ui/core';

// project imports
import MainCard from './../../ui-component/cards/MainCard';
import { gridSpacing } from './../../store/constant';

// assets
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

import { createStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import CancelIcon from "@material-ui/icons/Cancel";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import _without from "lodash/without";

// style constant
const useStyles = makeStyles((theme) => ({

        // redBackground: {
        //   backgroundColor: "#C00",
        //   padding: 10
        // },
        whiteBackground: {
          backgroundColor: "#FFF"
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
          maxWidth: 300
        },
        chips: {
          display: "flex",
          flexWrap: "wrap"
        },
        chip: {
          margin: 2,
          backgroundColor: "#FFF"
        },
        noLabel: {
          marginTop: theme.spacing(3)
        }, 
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

const Brokers = [
    {
        value: 'none',
        label: 'Select Broker'
    },
    {
        value: 'alpaca',
        label: 'Alpaca'
    },
    {
        value: 'zerodha',
        label: 'Zerodha'
    },
    {
        value: 'upstox',
        label: 'Upstox'
    },
];

const Exchanges = [
   "BITBNS (INR (₹))",
   "CDS (INR (₹))",
   "Cryto (USD ($))",
   "FX (USD ($))",
   "MCX (INR (₹))",
   "NASDAQ-EQ (USD ($))",
   "NFO (INR (₹))",
   "NSE (INR (₹))",
   "NSE_IDX (INR (₹))"
];

const initialSelected = [
    "CDS (INR (₹))",
    "MCX (INR (₹))",
    "NFO (INR (₹))",
    "NSE (INR (₹))",
]
  

//-----------------------|| DASHBOARD DEFAULT - POPULAR CARD ||-----------------------//

const CreateBroker = ({ isLoading }) => {
    const classes = useStyles();
    const [brokerValue, setBrokerValue] = useState('none');
    const [ExchangeName, setExchangesName] = useState([]);
    const [fieldFlag, setFieldFlag] = useState(false);
    const [api_key, setApi_key] = useState("")
    const [loading, setLoading] = useState(false);
    const [api_secret, setApi_secret] = useState("")

    const AddBroker = () => {
        const temp = JSON.parse(localStorage.getItem('berry-account'));
        console.log(temp);
        if(api_key != "" && api_secret != ""){
            setLoading(true);
            axios
            .post(configData.API_SERVER + 'users/addbroker',{
                Broker_name : brokerValue,
                Cust_Id : '10005',
                API_Key  : api_key,
                API_Secret  : api_secret ,
                Username  : '',
                Password  : '',
                Market_Types : '' 
            })
            .then((result) => {
                alert(result.data)
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
        }
    }


    const handleBroker = (event) => {
        if(event.target.value == "zerodha" || event.target.value == "upstox" || event.target.value == "alpaca"){
            setFieldFlag(true)
        }else{
            setFieldFlag(false)
        }
        setBrokerValue(event.target.value)
    }
  
    const handleChange = (event) => {
        setExchangesName(event.target.value);
    };
  
    const handleDelete = (e: React.MouseEvent,value) => {
        setExchangesName((current) => _without(current, value));
    };

    return (
        <React.Fragment>
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">Add Broker</Typography>
                                    </Grid>
                                </Grid>
                                <Divider className={classes.divider} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item lg={4} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle1" color="inherit">Select Broker</Typography>
                                            <TextField
                                                id="standard-select-currency"
                                                select
                                                value={brokerValue}
                                                size="small"
                                                onChange={(e) => handleBroker(e)}
                                                style={{width:250,marginTop:8}}>
                                                    {Brokers.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle1" color="inherit">Exchanges</Typography>
                                            <div className={classes.redBackground}>
                                                <FormControl className={classes.formControl}>
                                                    <Select
                                                        size="small"
                                                        style={{width:350}}
                                                        labelId="demo-mutiple-chip-checkbox-label"
                                                        id="demo-mutiple-chip-checkbox"
                                                        multiple
                                                        value={ExchangeName}
                                                        onChange={handleChange}
                                                        IconComponent={KeyboardArrowDownIcon}
                                                        renderValue={(selected) => (
                                                        <div className={classes.chips}>
                                                            {selected.map((value) => (
                                                                <Chip
                                                                    key={value}
                                                                    label={value}
                                                                    clickable
                                                                    variant="outlined"
                                                                    deleteIcon={
                                                                    <CancelIcon
                                                                        onMouseDown={(event) => event.stopPropagation()}
                                                                    />
                                                                    }
                                                                    className={classes.chip}
                                                                    onDelete={(e) => handleDelete(e, value)}
                                                                />
                                                            ))}
                                                        </div>
                                                        )}>
                                                        {Exchanges.map((name) => (
                                                            <MenuItem key={name} value={name}>
                                                                {name}
                                                            </MenuItem>
                                                        ))}
                                                     </Select>
                                                </FormControl>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider className={classes.divider} />
                            </Grid>
                            {fieldFlag && ( 
                                <div style={{marginLeft:25}}>                    
                                    <Grid item xs={12}>
                                        <Grid container direction="column">
                                            <Grid container spacing={gridSpacing}>
                                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                                    <Typography variant="subtitle1" color="inherit">Setup Link : </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Divider className={classes.divider} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="column">
                                            <Grid container spacing={gridSpacing}>
                                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                                    <Typography variant="subtitle1" color="inherit">api_key</Typography>
                                                    <TextField
                                                        id="api_key"
                                                        onChange={(e) => setApi_key(e.target.value)}
                                                        size="small"
                                                        style={{width:250,marginTop:8}}>
                                                    </TextField>
                                                </Grid>
                                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                                <Typography variant="subtitle1" color="inherit">api_secret</Typography>
                                                <TextField
                                                        id="api_secret"
                                                        onChange={(e) => setApi_secret(e.target.value)}
                                                        size="small"
                                                        style={{width:250,marginTop:8}}>
                                                </TextField>
                                                </Grid>
                                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                                <Typography variant="subtitle1" color="inherit">token</Typography>
                                                <TextField
                                                        id="token"
                                                        size="small"
                                                        style={{width:250,marginTop:8}}>
                                                    </TextField>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Divider className={classes.divider} />
                                    </Grid>
                                </div> 
                            )}  
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid container spacing={gridSpacing}>
                                        <Grid xs={2}>
                                            <Button href="/utils/brokers-and-exchanges" color="error" variant="contained" style={{width:120,marginLeft:25,marginTop:10}}>Back</Button>
                                        </Grid>
                                        <Grid xs={2}>
                                            <Button onClick={AddBroker} color="secondary" variant="contained" style={{width:120,marginLeft:0,marginTop:10}}>Save</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
        </React.Fragment>
    );
};

CreateBroker.propTypes = {
    isLoading: PropTypes.bool
};

export default CreateBroker;
