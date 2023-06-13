import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { gridSpacing } from '../../store/constant';
import moment from 'moment'

// material-ui
import {
    Grid,
    Alert,
    Stack,
    AlertTitle,
    Typography,
    Divider
} from '@material-ui/core';

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

;

const PlaceHolder3 = () => {
    const classes = useStyles();
    const [socket, setSocket] = useState(null);
    const [alerts, setAlerts] = useState([]);
  
    useEffect(() => {
        const initial_Data = [
            {"eventId":1671035046955718,"events":[{"delta":"-0.03","price":"28570.03","reason":"cancel","remaining":"0.0","side":"ask","type":"change"}],"socket_sequence":1,"timestamp":1682939110,"timestampms":1682939110503,"type":"update"},
            {"eventId":1671035046955719,"events":[{"delta":"-0.01400495","price":"28570.64","reason":"cancel","remaining":"0.0","side":"ask","type":"change"}],"socket_sequence":2,"timestamp":1682939120,"timestampms":1682939110505,"type":"update"},
            {"eventId":1671035046955720,"events":[{"delta":"0.03","price":"28570.02","reason":"place","remaining":"0.03","side":"ask","type":"change"}],"socket_sequence":3,"timestamp":1682939150,"timestampms":1682939110508,"type":"update"},
        ]

        const alerts = initial_Data.map((data) => {
            const adate = moment.unix(data.timestamp).format("DD/MM/YYYY HH:mm:ss");
            const newAlert = {
              alertType: data.events[0].reason === "place" ? "success" : "error",
              alertSymbol: "BTCUSD",
              alertPrice: data.events[0].price,
              alertAction: data.events[0].reason === "place" ? "Success" : "Cancel",
              alertMessage: `Price changed to ${data.events[0].price}`,
              alertDate: adate,
              alertUpdate : false
            };
            return newAlert;
        });
          
        setAlerts(alerts);
        
    }, []);

    // useEffect(() => {
        
    //     const newSocket = new WebSocket('wss://api.gemini.com/v1/marketdata/BTCUSD');
    
    //     newSocket.onopen = () => {
    //       console.log('WebSocket connected');
    //     };
    
    //     newSocket.onmessage = (event) => {
    //       const data = JSON.parse(event.data);
    //       let adate = moment.unix(data.timestamp).format("DD/MM/YYYY HH:mm:ss");
    //       const newAlert = {
    //           alertType: data.events[0].reason == "place" ? 'success' : 'error',
    //           alertSymbol: "BTCUSD",
    //           alertPrice: data.events[0].price,
    //           alertAction: data.events[0].reason == "place" ? 'Success' : 'Cancel',
    //           alertMessage: `Price changed to ${data.events[0].price}`,
    //           alertDate: adate,
    //           alertUpdate : false
    //       };
    //       setAlerts([...alerts, newAlert]);
    //       console.log(alerts)
    //     };
    
    //     newSocket.onclose = () => {
    //       console.log('WebSocket disconnected');
    //     };
    
    //     setSocket(newSocket);
    
    //     return () => {
    //       newSocket.close();
    //     };
    //   }, [alerts]);

    return (
        <div>
            <MainCard>
                <Grid container spacing={2}>
                    <Grid container direction="column">
                        <MainCard style={{marginLeft:15,marginTop:15}}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Grid container alignContent="center" justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant="h4">PlaceHolder 3</Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider className={classes.divider} />
                                    {/* <Stack sx={{ width: '100%' }} spacing={2} style={{marginTop:25}}> */}
                                     {/* {alerts.slice().reverse().map((alert, index) => (
                                        <Alert key={index} variant="filled" severity={`${alert.alertType}`}>
                                            <AlertTitle>{alert.alertAction}</AlertTitle>
                                             <strong>{alert.alertDate}</strong>  :: <strong>Symbol - </strong> {alert.alertSymbol} :: {alert.alertMessage}
                                        </Alert>
                                     ))} */}
                                    {/* {alerts.slice().reverse().map((alert, index) => (
                                        <Grid key={index} container style={{ border: '2px solid #ccc', borderRadius: '5px', position: 'relative' }}>
                                            <Grid item lg={6} md={6} sm={6} xs={12} style={{ backgroundColor: 'cyan ', margin: 0 }}>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                                        <p style={{fontSize:12,marginLeft:10}}>Date : <span>{alert.alertDate}</span></p>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                                        <p style={{fontSize:15, fontWeight:500, marginLeft:10, marginTop:8}}>Symbol : <span>{alert.alertSymbol}</span></p>
                                                    </Grid>
                                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                                        <p style={{fontSize:15, fontWeight:500,marginLeft:10, marginTop:8}}>Price : <span>{alert.alertPrice}</span></p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            {/* <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', borderLeft: '1px solid #ccc' }}></div> */}
                                            {/* <Grid item lg={6} md={6} sm={6} xs={12} style={{ position: 'relative', backgroundColor: 'lightgreen' }}>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                                        <p style={{fontSize:12,marginLeft:10}}>Date : <span>{alert.alertDate}</span></p>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                                        <p style={{fontSize:15, fontWeight:500, marginLeft:10, marginTop:8}}>Symbol : <span>{alert.alertSymbol}</span></p>
                                                    </Grid>
                                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                                        <p style={{fontSize:15, fontWeight:500,marginLeft:10, marginTop:8}}>Price : <span>{alert.alertPrice}</span></p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid> */}
                                     {/* ))}
                                    </Stack> */}
                                </Grid>
                            </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
            </MainCard>
        </div>
    );
};

export default PlaceHolder3;