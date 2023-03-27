import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Tabs, Tab, Avatar, TextField, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import { TabContext, TabList, TabPanel,  } from '@material-ui/lab';
import { gridSpacing } from '../../../store/constant';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import SkeletonPopularCard from '../../../ui-component/cards/Skeleton/PopularCard';
import { IconChartBar, IconBellRinging, IconNotes, IconFloatNone, IconRuler } from '@tabler/icons';

// assets

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


function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }


//-----------------------|| DASHBOARD DEFAULT - POPULAR CARD ||-----------------------//

const DashboardPanels = ({ isLoading }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState("1");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                    <TabContext value={value}>
                        <Box sx={{ width: '100%',marginTop:1 }}>
                            <Tabs value={value} onChange={handleChange} variant="scrollable" textColor="secondary" indicatorColor="secondary" scrollButtons="auto" aria-label="icon position tabs example">
                                <Tab icon={<IconChartBar />} style={{marginRight:20}} label="Market Watch" value="1" />
                                <Tab icon={<IconFloatNone />} style={{marginRight:20}} label="Open Positions" value="2" />
                                <Tab icon={<IconRuler />} style={{marginRight:20}} label="Greeks" value="3" />
                                <Tab icon={<IconNotes />} style={{marginRight:20}} label="Order Book" value="4" />
                                <Tab icon={<IconBellRinging />} style={{marginRight:20}} label="Notifications" value="5" />
                            </Tabs>
                        </Box>
                        <TabPanel value="1">
                            <MainCard>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Grid container alignContent="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="h4">Market Watch</Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider className={classes.divider} />
                                    </Grid>
                                    <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                                <Typography variant="subtitle1" color="inherit">Watch List Name</Typography>
                                                <TextField style={{width:455}} id="outlined-basic" size='small' variant="outlined" />
                                            </Grid>
                                            <Grid item lg={1.4} md={6} sm={6} xs={12}>
                                                <Button color='secondary' variant="contained" style={{width:90,padding:7,marginTop:24}}>Save</Button>
                                            </Grid>
                                            <Grid item lg={1.4} md={6} sm={6} xs={12}>
                                                <Button variant="outlined" style={{width:90,padding:7,marginTop:24}}>Cancel</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </MainCard>
                        </TabPanel>
                        <TabPanel value="2">
                            <MainCard>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Grid container alignContent="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="h4">Open Position</Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider className={classes.divider} />
                                        </Grid>
                                        <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                            <Grid container spacing={gridSpacing}>
                                                <Typography style={{marginTop:35,marginLeft:400}} variant="h6">There are no records to display</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                            </MainCard>
                        </TabPanel>
                        <TabPanel value="3">
                            <MainCard>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Grid container alignContent="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="h4">Greeks</Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider className={classes.divider} />
                                        </Grid>
                                        <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                            <Grid container spacing={gridSpacing}>
                                                <Typography style={{marginTop:35,marginLeft:400}} variant="h6">There are no records to display</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                            </MainCard>
                        </TabPanel>
                        <TabPanel value="4">
                            <MainCard>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Grid container alignContent="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="h4">Order Book</Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider className={classes.divider} />
                                        </Grid>
                                        <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                            <Grid container spacing={gridSpacing}>
                                                <Typography style={{marginTop:35,marginLeft:400}} variant="h6">There are no records to display</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                            </MainCard>
                        </TabPanel>
                        <TabPanel value="5">
                            <MainCard>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Grid container alignContent="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="h4">Recent Notifications</Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider className={classes.divider} />
                                        </Grid>
                                        <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                            <Grid container spacing={gridSpacing}>
                                                <Typography style={{marginTop:35,marginLeft:400}} variant="h6">No recent notifications</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                            </MainCard>
                        </TabPanel>
                    </TabContext>
                </MainCard>
     
            )}
        </React.Fragment>
    );
};

DashboardPanels.propTypes = {
    isLoading: PropTypes.bool
};

export default DashboardPanels;
