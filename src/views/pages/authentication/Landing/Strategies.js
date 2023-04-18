import PropTypes from 'prop-types';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import configData from '../../../../../src/config';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Chip, Grid, Button, Tooltip, Link, List, ListItem, RadioGroup, FormControlLabel, FormControl, ListItemButton, ListItemIcon, ListItemText, Radio, InputAdornment, OutlinedInput, Checkbox } from '@material-ui/core';
import { gridSpacing } from './../../../../store/constant';

// assets
import { IconSearch, IconX, IconInfoCircle, IconHeart } from '@tabler/icons';
import MainCard from '../../../../ui-component/cards/MainCard';
import HomeImage from '../../../../assets/images/home.png';
// import useStyles from '../../../../styles/styles';
import Header from './Header';
import Loading from './../../../../assets/images/loading.gif'

const useStyles = makeStyles((theme) => ({
    content: {
        padding: '16px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.warning.dark
    },
    secondary: {
        color: theme.palette.grey[500],
        marginTop: '5px'
    },
    padding: {
        paddingTop: 0,
        paddingBottom: 0
    }
}));

const selected = [
   "Equity",
   "BSE",
   "NSE",
   "NASDAQ"
];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//

const Strategies = (props) => {
    const classes = useStyles();
    const [likeflag,setLikeFlag] = React.useState(false);
    const [value, setValue] = useState('');
    const [checked, setChecked] = React.useState([0]);
    const [loading, setLoading] = useState(false);
    const [strategies, setStrategies] = useState([]);
    // const [strategy_type, setStrategy_type] = useState([]);
    const [datachecked, setDatachecked] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(configData.API_SERVER + 'users/getstrategydata')
            .then((result) => {
                setStrategies(result.data);
                console.log(strategies);

                console.log(strategies.length);
                if (strategies.length == 0) {
                    setDatachecked(false);
                } else {
                    setDatachecked(true);
                }
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    return (
        <React.Fragment>
            <Header />
            <Box className={classes.heroBox} style={{backgroundColor: '#EEF2F6'}}>
              <div style={{margin:20}}>
              <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={8} md={6} sm={6} xs={12}>
                     {loading && (
                        <div>
                            <img src={Loading} width="50px" style={{ borderRadius: 5,marginLeft:420,marginTop:200}} />
                        </div>
                     )}
                     {strategies.map((item, index) => {
                        return (
                        <div>
                           <MainCard className={classes.card} contentClass={classes.content}>
                              <Grid container direction="column">
                                 <Grid container spacing={gridSpacing}>
                                       <Grid item xs={12}>
                                          <Grid container spacing={gridSpacing}>
                                             <Grid item xs={10}>
                                                <Typography variant="subtitle2" color="inherit">created : {item.Date_Created}</Typography>
                                                <Link href="/strategy-info" color="inherit" style={{textDecoration: 'none'}}>
                                                   <Typography style={{marginTop:10}} variant="h3" color="inherit">{item.Strategy_Name}</Typography>
                                                </Link>
                                             </Grid>
                                             <Grid item xs={2}>
                                             <div style={{marginLeft:84,marginTop:-18,background:"#673ab7",width:55,height:50,paddingLeft:10,paddingRight:10,paddingTop:0.1,borderRadius:5}}>
                                                   {likeflag && (
                                                   <IconHeart onClick={() => setLikeFlag(false)} color='white' fill="Orange" style={{marginTop:10,marginLeft:2,strokeWidth:0.5}} size={30}/>
                                                   )}
                                                   {!likeflag && (
                                                   <IconHeart onClick={() => setLikeFlag(true)} color='white' fill="none" style={{marginTop:10,marginLeft:2,strokeWidth:1}} size={30}/>
                                                   )}
                                             </div>
                                             </Grid>
                                          </Grid>
                                          <Grid container spacing={gridSpacing}>
                                             <Grid item xs={11}>
                                                {/* <Typography style={{marginTop:3}} variant="subtitle1" color="primary">Read More...</Typography> */}
                                                <Typography style={{marginTop:10}} variant="h4" color="inherit">by : {item.Strategy_Owner}</Typography>
                                             </Grid>
                                          </Grid>
                                          {/* <Grid container spacing={gridSpacing}>
                                             <Grid item xs={3}>
                                                <Typography style={{marginTop:10}} variant="h5" color="inherit">Broker Name :</Typography>
                                             </Grid>
                                             <Grid item xs={9}>
                                                <Typography style={{marginTop:3,marginLeft:90}} variant="subtitle1" color="primary">Zerodha</Typography>
                                             </Grid>
                                          </Grid> */}
                                          <Grid container spacing={gridSpacing}>
                                             <Grid item xs={8}>
                                                  {item.Strategy_Type.split(",").map((value) => (
                                                         <Chip
                                                               key={value}
                                                               label={value}
                                                               clickable
                                                               color="primary"
                                                               style={{marginLeft:8,marginTop:10}}
                                                               className={classes.chip}
                                                         />
                                                   ))}
                                             </Grid>
                                             <Grid item xs={1}></Grid>
                                             <Grid item xs={3}>
                                             <Link href="/login" color="inherit" style={{textDecoration: 'none'}}>
                                                <Button color="secondary" variant="outlined" style={{width:120,marginLeft:50,fontWeight:700,marginTop:10}}>Trade</Button>
                                             </Link>
                                             </Grid>
                                          </Grid>
                                          <Grid container spacing={gridSpacing} style={{marginTop:-10}}>
                                             <Grid item xs={3}>
                                             <Tooltip title="In last month" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Minimum capital</Typography></Tooltip>                                   
                                             <Typography style={{marginTop:2}} variant="h6" fontWeight={600} color="inherit">{item.Mini_Capital}</Typography>
                                             </Grid>
                                             {/* <IconInfoCircle size={15}/> */}
                                             <Grid item xs={3}>
                                             <Tooltip title="Absolute Max. Drawdown (% of Min. Capital)" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Expected returns</Typography></Tooltip>
                                             <Typography style={{marginTop:2}} variant="h6" fontWeight={600} color="inherit">{item.Expected_Returns}</Typography>
                                             </Grid>
                                             <Grid item xs={3}>
                                             <Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Fee</Typography>
                                             <Typography style={{marginTop:2}} variant="h6" fontWeight={600} color="inherit">{item.Fees}</Typography>
                                             </Grid>
                                             <Grid item xs={3}>
                                             <Tooltip title="Profit sharing monthly" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Capital Lock Period</Typography></Tooltip>
                                             <Typography style={{marginTop:2}} variant="h6" fontWeight={600} color="inherit">{item.Cap_Lock_Period}</Typography>
                                             </Grid>
                                          </Grid>
                                          <Grid container spacing={gridSpacing} style={{marginTop:-10}}>
                                             <Grid item xs={10}></Grid>
                                             <Grid item xs={2}>
                                             <div style={{marginLeft:50,marginBottom:-20,background:"#673ab7",width:90,height:30,paddingLeft:10,paddingRight:10,paddingTop:0.1,borderRadius:5}}>
                                                   <Link href="/strategy-info" color="inherit" style={{textDecoration: 'none'}}>
                                                      <Typography variant="subtitle2" color="white" style={{marginTop:3}}>Read More..</Typography>
                                                   </Link>
                                             </div>
                                             </Grid>
                                          </Grid>
                                                                                                      
                                       </Grid>
                                 </Grid>
                              </Grid>
                           </MainCard><br/>
                        </div>
                     );})}
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <MainCard className={classes.card} contentClass={classes.content}>
                           <Typography variant="h4" color="inherit">Search Strategies</Typography>
                           <OutlinedInput
                                                            className={classes.searchControl}
                                                            id="input-search-header"
                                                            value={value}
                                                            onChange={(e) => setValue(e.target.value)}
                                                            placeholder="Search"
                                                            size="small"
                                                            style={{width:280,marginTop:10,marginLeft:15}}
                                                            startAdornment={
                                                                <InputAdornment position="start">
                                                                    <IconSearch
                                                                        stroke={1.5}
                                                                        size="1rem"
                                                                        className={classes.startAdornment}
                                                                    />
                                                                </InputAdornment>
                                                            }
                                                            aria-describedby="search-helper-text"
                                                            inputProps={{
                                                                'aria-label': 'weight'
                                                            }}
                                                        />
                            <Typography style={{marginTop:20}} variant="h4" color="inherit">Sort by</Typography>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                {["Latest","Max Deployment","Min Capital"].map((value) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                    <ListItem
                                        key={value}
                                        disablePadding
                                    >
                                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value}`} />
                                        </ListItemButton>
                                    </ListItem>
                                    );
                                })}
                            </List>
                            <Typography style={{marginTop:20}} variant="h4" color="inherit">Fixed Fee</Typography>
                            <FormControl style={{marginTop:10,marginLeft:15}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="free" control={<Radio />} label="Free" />
                                    <FormControlLabel value="paid" control={<Radio />} label="Paid" />
                                </RadioGroup>
                            </FormControl>
                            <Typography style={{marginTop:20}} variant="h4" color="inherit">Favorite</Typography>
                            <Checkbox style={{marginLeft:8}} {...label} />
                            <div>
                            <Button color="secondary" variant="outlined" style={{width:150,marginLeft:72,fontWeight:700,marginTop:10,}}>Reset</Button>
                            </div>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
              </Grid>
              </div>
            </Box>
        </React.Fragment>
    );
};

Strategies.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Strategies;
