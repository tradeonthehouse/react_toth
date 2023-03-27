import React, { useState } from 'react';
import axios from 'axios';

import configData from '../../config';
import SearchSection from './../../layout/MainLayout/Header/SearchSection';

// material-ui
import {
    Button,
    Grid,
    TextField,
    Typography,
    Chip,
    Divider,
    Tooltip,
    Box
} from '@material-ui/core';
import { List, ListItem, RadioGroup, FormControlLabel, FormControl, FormLabel, ListItemButton, ListItemIcon, ListItemText, Radio, InputAdornment, OutlinedInput, Popper, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { gridSpacing } from './../../store/constant';
import { IconAdjustmentsHorizontal, IconSearch, IconX, IconInfoCircle, IconHeart } from '@tabler/icons';
// import { FixedSizeList } from 'react-window';

// project imports
import MainCard from '../../ui-component/cards/MainCard';

//==============================|| SAMPLE PAGE ||==============================//

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
    "NFO",
    "EarnTheta",
    "EarnTheta",
    "TrendFollowing",
 ];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TradingAlgo = () => {
    const classes = useStyles();
    const [likeflag,setLikeFlag] = React.useState(false);
    const [value, setValue] = useState('');
    const [checked, setChecked] = React.useState([0]);

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
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={8} md={6} sm={6} xs={12}>
                        <MainCard className={classes.card} contentClass={classes.content}>
                            <Grid container direction="column">
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                       <Grid container spacing={gridSpacing}>
                                          <Grid item xs={10}>
                                             <Typography variant="subtitle2" color="inherit">created : 1 year ago  |  live deployment: 390</Typography>
                                              <Typography  ypography style={{marginTop:10}} variant="h3" color="inherit">Index Premium Eater</Typography>
                                          </Grid>
                                          <Grid item xs={2}>
                                            <div style={{marginLeft:52,marginTop:-18,background:"#B39DDB",width:55,height:50,paddingLeft:10,paddingRight:10,paddingTop:0.1,borderRadius:5}}>
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
                                             <Typography style={{marginTop:3}} variant="subtitle1" color="primary">Read More...</Typography>
                                             <Typography style={{marginTop:10}} variant="h4" color="inherit">by : Market Star</Typography>
                                          </Grid>
                                       </Grid>
                                       <Grid container spacing={gridSpacing}>
                                          <Grid item xs={8}>
                                                {selected.map((value) => (
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
                                              <Button color="secondary" variant="outlined" style={{width:120,marginLeft:25,fontWeight:700,marginTop:10}}>Subscribe</Button>
                                          </Grid>
                                       </Grid>
                                       <Grid container spacing={gridSpacing} style={{marginTop:-10}}>
                                          <Grid item xs={3}>
                                          <Tooltip title="In last month" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Trades/~Costs <IconInfoCircle size={15}/> </Typography></Tooltip>                                   
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">312 (₹ 6.2 K)</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Tooltip title="Absolute Max. Drawdown (% of Min. Capital)" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Drawdown <IconInfoCircle size={15}/></Typography></Tooltip>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">₹ 18.6 K (6%)</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Min Capital</Typography>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">₹ 310 K</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Tooltip title="Profit sharing monthly" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Monthly Fee <IconInfoCircle size={15}/></Typography></Tooltip>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">Free + 5%  </Typography>
                                          </Grid>
                                       </Grid>
                                                                                                   
                                    </Grid>
                                </Grid>
                            </Grid>
                        </MainCard>
                        <MainCard className={classes.card} contentClass={classes.content} style={{marginTop:10}}>
                            <Grid container direction="column">
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                       <Grid container spacing={gridSpacing}>
                                          <Grid item xs={10}>
                                             <Typography variant="subtitle2" color="inherit">created : 1 year ago  |  live deployment: 377</Typography>
                                              <Typography  ypography style={{marginTop:10}} variant="h3" color="inherit">Passive Income Earner</Typography>
                                          </Grid>
                                          <Grid item xs={2}>
                                            <div style={{marginLeft:52,marginTop:-18,background:"#B39DDB",width:55,height:50,paddingLeft:10,paddingRight:10,paddingTop:0.1,borderRadius:5}}>
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
                                             <Typography style={{marginTop:3}} variant="subtitle1" color="primary">Read More...</Typography>
                                             <Typography style={{marginTop:10}} variant="h4" color="inherit">by : Algo Edge Capital</Typography>
                                          </Grid>
                                       </Grid>
                                       <Grid container spacing={gridSpacing}>
                                          <Grid item xs={8}>
                                                {selected.map((value) => (
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
                                              <Button color="secondary" variant="outlined" style={{width:120,marginLeft:25,fontWeight:700,marginTop:10}}>Subscribe</Button>
                                          </Grid>
                                       </Grid>
                                       <Grid container spacing={gridSpacing} style={{marginTop:-10}}>
                                          <Grid item xs={3}>
                                          <Tooltip title="In last month" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Trades/~Costs <IconInfoCircle size={15}/> </Typography></Tooltip>                                   
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">310 (₹ 6.2 K)</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Tooltip title="Absolute Max. Drawdown (% of Min. Capital)" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Drawdown <IconInfoCircle size={15}/></Typography></Tooltip>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">₹ 19.2 K (6%)</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Min Capital</Typography>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">₹ 310 K</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Tooltip title="Profit sharing monthly" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Monthly Fee <IconInfoCircle size={15}/></Typography></Tooltip>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">Free + 5%</Typography>
                                          </Grid>
                                       </Grid>
                                                                                                   
                                    </Grid>
                                </Grid>
                            </Grid>
                        </MainCard>
                        <MainCard className={classes.card} contentClass={classes.content} style={{marginTop:10}}>
                            <Grid container direction="column">
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                       <Grid container spacing={gridSpacing}>
                                          <Grid item xs={10}>
                                             <Typography variant="subtitle2" color="inherit">created : 1 year ago  |  live deployment: 255</Typography>
                                              <Typography  ypography style={{marginTop:10}} variant="h3" color="inherit">Bank Nifty Dynamic Earner</Typography>
                                          </Grid>
                                          <Grid item xs={2}>
                                            <div style={{marginLeft:52,marginTop:-18,background:"#B39DDB",width:55,height:50,paddingLeft:10,paddingRight:10,paddingTop:0.1,borderRadius:5}}>
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
                                             <Typography style={{marginTop:3}} variant="subtitle1" color="primary">Read More...</Typography>
                                             <Typography style={{marginTop:10}} variant="h4" color="inherit">by : Algo Edge Capital</Typography>
                                          </Grid>
                                       </Grid>
                                       <Grid container spacing={gridSpacing}>
                                          <Grid item xs={8}>
                                                {selected.map((value) => (
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
                                              <Button color="secondary" variant="outlined" style={{width:120,marginLeft:25,fontWeight:700,marginTop:10}}>Subscribe</Button>
                                          </Grid>
                                       </Grid>
                                       <Grid container spacing={gridSpacing} style={{marginTop:-10}}>
                                          <Grid item xs={3}>
                                          <Tooltip title="In last month" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Trades/~Costs <IconInfoCircle size={15}/> </Typography></Tooltip>                                   
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">112 (₹ 2.2 K)</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Tooltip title="Absolute Max. Drawdown (% of Min. Capital)" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Drawdown <IconInfoCircle size={15}/></Typography></Tooltip>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">₹ 13.6 K (8%)</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Min Capital</Typography>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">₹ 180 K</Typography>
                                          </Grid>
                                          <Grid item xs={3}>
                                          <Tooltip title="Profit sharing monthly" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Monthly Fee <IconInfoCircle size={15}/></Typography></Tooltip>
                                          <Typography style={{marginTop:2}} variant="h5" color="inherit">Free + 5%</Typography>
                                          </Grid>
                                       </Grid>
                                                                                                   
                                    </Grid>
                                </Grid>
                            </Grid>
                        </MainCard>
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
    );
};

export default TradingAlgo;
