import React from 'react';
import { Grid, Typography, Box, Avatar, Menu, MenuItem, Card, CardContent } from '@material-ui/core';
import useStyles from '../../../../styles/styles';
import { makeStyles } from '@material-ui/styles';
import { IconAB, IconAdjustments, IconAffiliate, IconBoxModel, IconBoxModel2, IconDeviceAnalytics, IconStars, IconTools } from '@tabler/icons';
import MainCard from '../../../../ui-component/cards/MainCard';
import EarningIcon from './../../../../assets/images/icons/earning.svg';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles1 = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: theme.palette.secondary[800],
            borderRadius: '50%',
            top: '-85px',
            right: '-95px',
            [theme.breakpoints.down('xs')]: {
                top: '-105px',
                right: '-140px'
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: theme.palette.secondary[800],
            borderRadius: '50%',
            top: '-125px',
            right: '-15px',
            opacity: 0.5,
            [theme.breakpoints.down('xs')]: {
                top: '-155px',
                right: '-70px'
            }
        }
    },
    content: {
        padding: '20px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.secondary[800],
        marginTop: '8px'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary[200],
        zIndex: 1
    },
    cardHeading: {
        fontSize: '2.125rem',
        fontWeight: 500,
        marginRight: '8px',
        marginTop: '14px',
        marginBottom: '6px'
    },
    subHeading: {
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.secondary[200]
    },
    avatarCircle: {
        cursor: 'pointer',
        ...theme.typography.smallAvatar,
        backgroundColor: theme.palette.secondary[200],
        color: theme.palette.secondary.dark
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 45deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    }
}));

const Services = () => {
  const classes = useStyles();
  const classes1 = useStyles1();

  const sectionItems = [
    {
      id: 1,
      icon: <IconAffiliate sx={{ fontSize: 100 }} color='white' />,
      title: 'Algo Trading',
      sentence:
        'Our algorithm will be mapped to your account, whenever algo triggers an order it will be replicated in your account automatically.',
    },
    {
      id: 2,
      icon: <IconDeviceAnalytics sx={{ fontSize: 100 }} color='white' />,
      title: 'Strategy Master',
      sentence:
        'Trade with ease using pre-designed templates and execute your trades through trade on the house advanced algorithmic engine.',
    },
    {
      id: 3,
      icon: <IconStars sx={{ fontSize: 100 }} color='white' />,
      title: 'Multiple Segments',
      sentence: 'Get tailored solutions with our trend-based multi-segment approach for equities and commodities. Achieve the best outcomes for your target group.',
    },
    {
        id: 4,
        icon: <IconAdjustments sx={{ fontSize: 100 }} color='white' />,
        title: 'Prebuilt Trading Strategies',
        sentence: 'Meet your unique goal and needs of business with TOTH prebuilt trading strategies that provide a strategic approach to deliver results.',
    },
    {
        id: 5,
        icon: <IconTools sx={{ fontSize: 100 }} color='white' />,
        title: 'Backtesting',
        sentence: 'Maximise strategy success with TOTH backtesting services that offer the tools and analysis to evaluate past performance and inform.',
    },
    {
        id: 6,
        icon: <IconBoxModel sx={{ fontSize: 100 }} color='white' />,
        title: 'Sit Back & Relax',
        sentence: 'No manual intervention required from your side. You can just relax and keep track of your account on daily basis.',
    },
  ];


  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px', backgroundColor: '#EEF2F6',justifyContent: 'center',alignItems: 'center' }}>
        <Grid container spacing={6} className={classes.gridContainer} style={{marginBottom:-100}} >
            <Grid item xs={12} md={6} style={{marginLeft:20}}  >
                <Typography variant="h4" fontWeight={400} className={classes.subtitle} color="#ffac33" style={{marginBottom:-30}}>
                --- OUR SERVICES ---
                </Typography><br/>
                <Typography variant="h2" fontWeight={700} className={classes.title} color="black" style={{marginBottom:30}}>
                    Here’s how we do it.
                </Typography><br/>  
            </Grid>
        </Grid>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
            <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            style={{margin:10}}
          >
                          <MainCard border={false} className={classes1.card} contentClass={classes1.content}>
                          <Grid container direction="column">
                              <Grid item>
                                  <Grid container justifyContent="center">
                                      <Grid item>
                                          <Avatar variant="rounded" className={classes1.avatar}>
                                              {item.icon}
                                          </Avatar>
                                      </Grid>
                                  </Grid>
                              </Grid>
                              <Grid item>
                                  <Grid container alignItems="center" justifyContent="center">
                                      <Grid item>
                                          <Typography className={classes1.cardHeading} style={{fontSize:25}}>{item.title}</Typography>
                                      </Grid>
                                  </Grid>
                              </Grid>
                              <Grid item sx={{ mb: 1.25 }} alignItems="center" justifyContent="space-around" style={{margin:20}}>
                                  <Typography fontWeight={400} className={classes.subtitle}>{item.sentence}</Typography>
                              </Grid>
                          </Grid>
                      </MainCard>
                    </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;