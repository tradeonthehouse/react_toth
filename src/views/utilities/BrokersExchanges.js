import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { IconEdit, IconFileDownload, IconSquarePlus } from '@tabler/icons';
import { Link, Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';

// project imports
import MainCard from './../../ui-component/cards/MainCard';
import { gridSpacing } from './../../store/constant';

// assets
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

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

//-----------------------|| DASHBOARD DEFAULT - POPULAR CARD ||-----------------------//

const BrokersExchanges = ({ isLoading }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">List of Brokers</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/utils/create-broker" color="inherit" style={{textDecoration: 'none'}}><Button size="small" variant="outlined" component="label" style={{marginRight:30,marginTop:-10}}>Add Broker</Button></Link>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            className={classes.primaryLight}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'   
                                            }}
                                        >
                                                       
                                            <MenuItem onClick={handleClose} > EXPORT AS CSV</MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                                <Divider className={classes.divider} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item lg={3} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle1" color="inherit">Broker Name</Typography>
                                        </Grid>
                                        <Grid item lg={4} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle1" color="inherit">Exchanges</Typography>
                                        </Grid>
                                        <Grid item lg={3} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle1" color="inherit">Info</Typography>
                                        </Grid>
                                        <Grid item lg={2} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle1" color="inherit">Action</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider className={classes.divider} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item lg={3} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle2" color="inherit">TT Paper Trading</Typography>
                                        </Grid>
                                        <Grid item lg={4} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle2" color="inherit">BITBNS, CDS, Crypto, FX, MCX, NASDAQ-EQ, NFO, NSE, NSE_IDX</Typography>
                                        </Grid>
                                        <Grid item lg={3} md={6} sm={6} xs={12}>
                                            <Typography variant="subtitle2" color="inherit"></Typography>
                                        </Grid>
                                        <Grid item lg={2} md={6} sm={6} xs={12}>
                                            <Link href="/utils/edit-broker" color="inherit" style={{textDecoration: 'none'}}><Typography variant="subtitle2" color="inherit"><IconEdit /></Typography></Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
        </React.Fragment>
    );
};

BrokersExchanges.propTypes = {
    isLoading: PropTypes.bool
};

export default BrokersExchanges;
