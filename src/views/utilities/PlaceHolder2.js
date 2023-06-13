import React, { useState, Suspense, useEffect } from 'react';
import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import { gridSpacing } from '../../store/constant';
import moment from 'moment'

// material-ui
import {
    Alert,
    AlertTitle,
    Typography,
    Grid,
    Divider,
    Stack,
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

const PlaceHolder2 = () => {
    const classes = useStyles();
    const [alerts, setAlerts] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      const currentMonth = moment().format('MMM-YYYY');
      console.log(currentMonth)
      const query = ref(db, "/"+currentMonth);
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (snapshot.exists()) {
            const newData = snapshot.val();
            const alerts = Object.values(newData).map((item) => {
              const currentTime = moment().format('DD/MM/YYYY HH:mm:ss');
              const newAlert = {
                alertDate: currentTime,
                symbol : item.Stock_Symbol,
				buyInitiate : item.Buy_Initiate,
				buyTarget : item.Buy_Target,
				buyInitiateFlag : item.Buy_Initiate_Flag,
				buyTargetFlag : item.Buy_Target_Flag,
                buyInitiateColor: item.Buy_Initiate_Flag == true ? "lightgreen" : "lightgrey",
                buyTargetColor: item.Buy_Target_Flag == true ? "lightgreen" : "lightgrey",
              };
              return newAlert;
            });
            setAlerts(alerts);
          }
      });
    }, []);

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
                                        <Typography variant="h4">Market Alerts</Typography>
                                    </Grid>
                                </Grid>
                                <Divider className={classes.divider} />
                                <Stack sx={{ width: '100%' }} spacing={2} style={{marginTop:25}}>
                                   {/* {alerts.slice().reverse().map((alert, index) => (
                                        <Alert key={index} variant="filled" severity={`${alert.alertType}`}>
                                            <AlertTitle>Demo</AlertTitle>
                                            <strong>Symbol - </strong>{alert.symbol}  ::  {alert.buyTarget}
                                        </Alert>
                                     ))} */}
                                      {alerts.slice().reverse().map((alert, index) => (
                                        <Grid key={index} container style={{position: 'relative' }}>
                                            <Grid item lg={4} md={4} sm={4} xs={12} style={{ backgroundColor: 'white', margin: 0,border: '1px solid #ccc',borderTopLeftRadius: '5px',borderBottomLeftRadius: '5px' }}>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                                        <p style={{fontSize:12,marginLeft:4,marginTop:0}}>Date : <span>{alert.alertDate}</span></p>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                                        <p style={{fontSize:15, fontWeight:500, marginLeft:10, marginTop:-4, textAlign: 'center'}}>Symbol : <span>{alert.symbol}</span></p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={4} md={4} sm={4} xs={12} style={{ position: 'relative', backgroundColor: alert.buyInitiateColor, display: 'flex', alignItems: 'center', justifyContent: 'center',borderTop: '1px solid #ccc',borderBottom: '1px solid #ccc' }}>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                                        <p style={{ fontSize: 15, marginLeft:10, fontWeight: 500, textAlign: 'center' }}>
                                                           Buy Initiate: <span>{alert.buyInitiate}</span>
                                                        </p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={4} md={4} sm={4} xs={12} style={{ position: 'relative', backgroundColor: alert.buyTargetColor, display: 'flex', alignItems: 'center', justifyContent: 'center',border: '1px solid #ccc',borderTopRightRadius: '5px',borderBottomRightRadius: '5px' }}>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                                        <p style={{ fontSize: 15, marginLeft:10, fontWeight: 500, textAlign: 'center' }}>
                                                            Buy Target: <span>{alert.buyTarget}</span>
                                                        </p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                     ))}
                                </Stack>
                                </Grid>
                            </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
            </MainCard>
        </div>
    );
};

export default PlaceHolder2;