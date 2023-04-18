import PropTypes from 'prop-types';
import React, {useState} from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { IconArrowBack, IconArrowBarDown, IconArrowBarToRight, IconArrowBigLeft, IconArrowForward, IconArrowForwardUp, IconArrowRight, IconChevronLeft, IconEdit, IconFileDownload, IconMessage2, IconSend, IconShare, IconSquarePlus } from '@tabler/icons';
import { Link, Avatar, Modal, Box, Chip, TextField, Tooltip, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import { gridSpacing } from './../../../../store/constant';

// assets
import { IconSearch, IconX, IconInfoCircle, IconHeart } from '@tabler/icons';
import MainCard from '../../../../ui-component/cards/MainCard';
import HomeImage from '../../../../assets/images/home.png';
// import useStyles from '../../../../styles/styles';
import Header from './Header';
import Dp from './../../../../assets/images/users/user.png'
import Reply from './../../../../assets/images/chat.png';

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const selected = [
    "NFO",
    "EarnTheta",
    "EarnTheta",
    "TrendFollowing",
 ];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//

const StrategyInfo = (props) => {
    const classes = useStyles();
    const [likeflag,setLikeFlag] = React.useState(false);
    const [value, setValue] = useState('');
    const [checked, setChecked] = React.useState([0]);

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen1 = () => {
        setOpen1(true);
      };
      const handleClose1 = () => {
        setOpen1(false);
      };

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
                                <Grid item lg={12} md={6} sm={6} xs={12}>
                                <MainCard content={false}>
                                    <CardContent>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <Grid container alignContent="center" justifyContent="space-between">
                                                    <Grid item>
                                                    <Link href="/strategies" color="inherit" style={{textDecoration: 'none'}}><Button size="small" variant="contained" component="label" style={{marginTop:-10}}><IconChevronLeft />Back</Button></Link>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="h4">TOTH Rambo - by TOTH</Typography>
                                                        <Typography variant="subtitle2" color="inherit" style={{marginLeft:30}}>created : 10-04-2023</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                    <div style={{marginLeft:84,marginTop:-18,background:"#673ab7",width:55,height:50,paddingLeft:10,paddingRight:10,paddingTop:0.1,borderRadius:5}}>
                                                                    {likeflag && (
                                                                    <IconHeart onClick={() => setLikeFlag(false)} color='white' fill="Orange" style={{marginTop:10,marginLeft:2,strokeWidth:0.5}} size={30}/>
                                                                    )}
                                                                    {!likeflag && (
                                                                    <IconHeart onClick={() => setLikeFlag(true)} color='white' fill="none" style={{marginTop:10,marginLeft:2,strokeWidth:1}} size={30}/>
                                                                    )}
                                                                </div>
                                                    </Grid>
                                                </Grid><br/>
                                                <Divider className={classes.divider} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container direction="column">
                                                    <Grid container spacing={gridSpacing}>
                                                        <Grid item xs={12}>
                                                        <Grid container spacing={gridSpacing}>
                                                            <Grid item xs={12}>
                                                                <Typography variant="h4" style={{marginBottom:10}}>Strategy Description : </Typography>
                                                                <Typography variant="subtitle" color="inherit">This strategy is designed with Nifty & Bank Nifty ATM straddles. This is intraday option selling strategy which sells total 4 legs. According to the market movement, loss making legs exits and takes fresh straddles on reversals. We earn theta decay if market is range bound. If market is trending, the strategy becomes directional.</Typography>
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
                                                                <Link href="/login" color="inherit" style={{textDecoration: 'none'}}>
                                                                <Button color="secondary" variant="outlined" style={{width:120,marginLeft:120,fontWeight:700,marginTop:10}}>Trade</Button>
                                                                </Link>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container spacing={gridSpacing} style={{marginTop:-10}}>
                                                            <Grid item xs={2.5}>
                                                            <Tooltip title="In last month" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Minimum capital</Typography></Tooltip>                                   
                                                            <Typography style={{marginTop:2}} variant="h6" fontWeight={600} color="inherit">₹ 15L</Typography>
                                                            </Grid>
                                                            {/* <IconInfoCircle size={15}/> */}
                                                            <Grid item xs={2.5}>
                                                            <Tooltip title="Absolute Max. Drawdown (% of Min. Capital)" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Expected returns</Typography></Tooltip>
                                                            <Typography style={{marginTop:2}} variant="h6" fontWeight={600} color="inherit">20-40% Monthly</Typography>
                                                            </Grid>
                                                            <Grid item xs={4.5}>
                                                            <Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Fee</Typography>
                                                            <Typography style={{marginTop:2}} variant="h6" fontWeight={600} color="inherit">Profit Sharing (70% Client/30% TOTH)</Typography>
                                                            </Grid>
                                                            <Grid item xs={2.5}>
                                                            <Tooltip title="Profit sharing monthly" placement="top"><Typography style={{marginTop:10}} variant="subtitle2" color="inherit">Capital Lock Period</Typography></Tooltip>
                                                            <Typography style={{marginTop:2}} variant="h6" fontWeight={600} color="inherit">1 Month</Typography>
                                                            </Grid>
                                                        </Grid>   
                                                        <Grid container spacing={gridSpacing}>
                                                            <Grid item xs={12}><br/>
                                                                <Divider className={classes.divider} />
                                                                <Typography variant="h5" style={{marginTop:20,marginBottom:10}}>Disclaimer : </Typography>
                                                                <Typography variant="subtitle2" color="inherit">Algo Edge Capital or I am not a SEBI registered investment or financial advisor. Don't deploy our strategies purely based on past performance only. We are not responsible for your profit or loss. Although this strategy is fully automated, you are advised to keep a track on your account to monitor any deviations or errors. As option selling involves market risks, Please consult your financial advisor before investing.</Typography>
                                                            </Grid>
                                                        </Grid>  
                                                        <Grid container spacing={gridSpacing}>
                                                            <Grid item xs={12}><br/>
                                                                <Divider className={classes.divider} /><br/>
                                                                <Button onClick={handleOpen} color="secondary" variant="outlined" startIcon={<IconMessage2 />}>Write An Review</Button>
                                                                <Modal
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    aria-labelledby="parent-modal-title"
                                                                    aria-describedby="parent-modal-description"
                                                                >
                                                                    <Box sx={{ ...style, width: 400 }}>
                                                                    <h2 id="parent-modal-title">Write An Review</h2>
                                                                    <p id="parent-modal-description">
                                                                        <TextField
                                                                        fullWidth 
                                                                        style={{marginTop:5}}
                                                                        id="outlined-multiline-static"
                                                                        label="Multiline"
                                                                        multiline
                                                                        rows={3}
                                                                        label="Review"
                                                                        />
                                                                    </p>
                                                                    <Button onClick={handleOpen} color="secondary" variant="outlined" startIcon={<IconSend />} style={{float:'right'}}>Submit</Button>
                                                                    </Box>
                                                                </Modal>
                                                            </Grid>
                                                        </Grid> 
                                                        <MainCard className={classes.card} contentClass={classes.content} style={{marginTop:15}}>
                                                            <Grid container direction="column">
                                                                <Grid container spacing={gridSpacing}>
                                                                    <Grid item xs={12}>
                                                                        <Grid container spacing={gridSpacing}>
                                                                            <Grid item xs={0.5}>
                                                                            <img src={Dp} width="30px" />
                                                                            </Grid>
                                                                            <Grid item xs={11}>
                                                                            <span style={{marginTop:5}}><span style={{fontWeight:500,color:"black"}}>Nk Xyz</span><span style={{marginLeft:10}}>[10-04-2023]</span></span>
                                                                            <span style={{marginLeft:10}}><Button size="small" onClick={handleOpen1} color="secondary" variant="outlined"><img src={Reply} width="20px" /></Button></span>
                                                                            <Typography variant="subtitle2" style={{marginTop:3}}>Very good stretegy for all kind of market condition it can go directional In trendy market , and it's dynamic trailng sl is awesome.</Typography>
                                                                            </Grid>
                                                                        </Grid> 
                                                                        <Modal
                                                                                open={open1}
                                                                                onClose={handleClose1}
                                                                                aria-labelledby="parent-modal-title"
                                                                                aria-describedby="parent-modal-description"
                                                                            >
                                                                                <Box sx={{ ...style, width: 400 }}>
                                                                                <h2 id="parent-modal-title">Reply</h2>
                                                                                <p id="parent-modal-description">
                                                                                    <TextField
                                                                                    fullWidth 
                                                                                    style={{marginTop:5}}
                                                                                    id="outlined-multiline-static"
                                                                                    label="Multiline"
                                                                                    multiline
                                                                                    rows={3}
                                                                                    label="Review"
                                                                                    />
                                                                                </p>
                                                                                <Button onClick={handleOpen1} color="secondary" variant="outlined" startIcon={<IconSend />} style={{float:'right'}}>Submit</Button>
                                                                                </Box>
                                                                            </Modal><br/>
                                                                        <Divider className={classes.divider} /><br/>
                                                                        <Grid container spacing={gridSpacing}>
                                                                            <Grid item xs={0.5}>
                                                                                <img src={Dp} width="30px" />
                                                                            </Grid>
                                                                            <Grid item xs={11}>
                                                                                <span style={{marginTop:5}}><span style={{fontWeight:500,color:"black"}}>Vip Abc</span><span style={{marginLeft:10}}>[12-04-2023]</span></span>
                                                                                <span style={{marginLeft:10}}><Button size="small" onClick={handleOpen1} color="secondary" variant="outlined"><img src={Reply} width="20px" /></Button></span>
                                                                                <Typography variant="subtitle2" style={{marginTop:3}}>Your strategy is good, but after brokerage all number looks negative. Can you help here, in case if I am missing something?</Typography>
                                                                            </Grid>
                                                                            <di style={{marginLeft:60}}>
                                                                                <Grid container spacing={gridSpacing} style={{marginTop:-10}}>
                                                                                    <Grid item xs={0.5}>
                                                                                        <img src={Dp} width="30px" />
                                                                                    </Grid>
                                                                                    <Grid item xs={11}>
                                                                                        <span style={{marginTop:5,marginLeft:15}}><span style={{fontWeight:500,color:"black"}}>Ram Pqr</span><span style={{marginLeft:10}}>[13-04-2023]</span></span>
                                                                                        <span style={{marginLeft:10}}><Button size="small" onClick={handleOpen1} color="secondary" variant="outlined"><img src={Reply} width="20px" /></Button></span>
                                                                                        <Typography variant="subtitle2" style={{marginTop:3,marginLeft:15}}>If we count ~20 Rs./trade flat charges, then monthly on and average it turn out to be ~6K Rs brokerage</Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </di>
                                                                            
                                                                        </Grid>                                                   
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </MainCard>                                                                                    
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
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

StrategyInfo.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default StrategyInfo;
