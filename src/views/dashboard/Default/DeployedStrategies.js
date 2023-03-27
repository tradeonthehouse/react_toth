import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonPopularCard from '../../../ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from '../../../store/constant';

// assets
import { TextField, useTheme } from '@material-ui/core';

// style constant
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

const Status = [
    {
        value: 'all',
        label: 'All'
    },
	{
        value: 'ative',
        label: 'Active'
    },
	{
        value: 'liveentered',
        label: 'Live-Entered'
    },
	{
        value: 'paused',
        label: 'Paused'
    },
	{
        value: 'liverepaired',
        label: 'Live-Repaired'
    },
	{
        value: 'exited',
        label: 'Exited'
    },
	{
        value: 'exitpending',
        label: 'Exit-Pending'
    },
	{
        value: 'livetranching',
        label: 'Live-Tranching'
    },
	{
        value: 'errorexecution',
        label: 'Error-Execution'
    },
	{
        value: 'awaitingoneClick',
        label: 'Awaiting-OneClick'
    },
	{
        value: 'blocked',
        label: 'Blocked'
    },
	{
        value: 'inactiveblocked',
        label: 'Inactive-Blocked'
    },
]

const Execution = [
    {
        value: 'all',
        label: 'All'
    },
    {
        value: 'papertrading',
        label: 'Paper Trading'
    },
    {
        value: 'liveoffline',
        label: 'Live Offline'
    },
    {
        value: 'liveautoneclick',
        label: 'Live Auto One Click'
    },
    {
        value: 'liveauto',
        label: 'Live Auto'
    },
];

//-----------------------|| DASHBOARD DEFAULT - POPULAR CARD ||-----------------------//

const DeployedStrategies = ({ isLoading }) => {
    const classes = useStyles();
    const [executionValue, setexEcutionValue] = React.useState('all');
    const [statusValue, setStatusValue] = React.useState('all');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">Deployed Strategies</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item lg={2.5} md={6} sm={6} xs={12}>
                                    <Typography variant="subtitle1" color="inherit">Execution</Typography>
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        value={executionValue}
                                        size="small"
                                        onChange={(e) => setexEcutionValue(e.target.value)}
                                        style={{width:200,marginTop:8}}>
                                            {Execution.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={2.5} md={6} sm={6} xs={12}>
                                    <Typography variant="subtitle1" color="inherit">Status</Typography>
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        size="small"
                                        value={statusValue}
                                        onChange={(e) => setStatusValue(e.target.value)}
                                        style={{width:200,marginTop:8}}>
                                            {Status.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                </Grid>
                                <Grid item lg={1.2} md={6} sm={6} xs={12}>
                                    <Button color="secondary" variant="contained" style={{width:90,padding:7,marginTop:32}}>Filter</Button>
                                </Grid>
                                <Grid item lg={1.2} md={6} sm={6} xs={12}>
                                    <Button variant="outlined" style={{width:90,padding:7,marginTop:32}}>Reset</Button>
                                </Grid>
                            </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>

                                    </Grid>
                                </Grid> 
                                <Divider className={classes.divider} />
                                <Grid container direction="column">
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item lg={2.4} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle2" color="inherit">Strategy (Counter)</Typography>
                                        </Grid>
                                        <Grid item lg={2.4} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle2" color="inherit">Execution</Typography>
                                        </Grid>
                                        <Grid item lg={2.4} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle2" color="inherit">Open | Total Positions</Typography>
                                        </Grid>
                                        <Grid item lg={2.4} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle2" color="inherit">Multiplier | Status</Typography>
                                        </Grid>
                                        <Grid item lg={2.4} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle2" color="inherit">Total P&L</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions className={classes.cardAction}>
                        <Button size="small" disableElevation>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions> */}
                </MainCard>
            )}
        </React.Fragment>
    );
};

DeployedStrategies.propTypes = {
    isLoading: PropTypes.bool
};

export default DeployedStrategies;
