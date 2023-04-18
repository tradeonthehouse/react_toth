import React from 'react';
import { Grid, Typography, Box, Avatar, Menu, MenuItem, Card, CardContent } from '@material-ui/core';
import useStyles from '../../../../styles/styles';
import { makeStyles } from '@material-ui/styles';
import { IconAffiliate, IconDeviceAnalytics, IconStars } from '@tabler/icons';
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

  const reviews = [
    {
      id: 1,
      name: 'Karl Brighton',
      statement:
        'The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg',
      position: 'Software Engineer at Kadex',
    },
    {
      id: 2,
      name: 'Krishna Bells',
      statement:
        'We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
      position: 'Product Manager at Google',
    },
    {
      id: 3,
      name: 'Ben Spiff',
      statement:
        'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
      position: 'Founder of Crypto',
    },
  ];

  return (
    <Box
        sx={{
          flexGrow: 1,
          padding: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
          margin:5
        }}
      >
        <Grid container spacing={6} className={classes.gridContainer} style={{marginBottom:-100}}>
            <Grid item xs={12} md={6} style={{marginLeft:-50}} >
                <Typography variant="h4" fontWeight={400} className={classes.subtitle} color="#ffac33" style={{marginBottom:-30}}>
                --- TESTIMONIAL ---
                </Typography><br/>
                <Typography variant="h3" fontWeight={600} className={classes.title} color="black" style={{marginBottom:30}}>
                   Testimonials
                </Typography><br/>  
            </Grid>
        </Grid>
        <Grid container spacing={2}>
          {reviews.map((review) => (
            <Grid item sm={12} md={4} key={review.id}>
              <Card className={classes.testimonialCard}>
                <CardContent>
                  <Typography className={classes.testimonialStatement}>
                    "{review.statement}"
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Avatar
                      src={review.image_url}
                      size="large"
                      className={classes.avatar}
                    />
                    <Box>
                      <Typography>{review.name}</Typography>
                      <Typography className={classes.testimonialPosition}>
                        {review.position}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default Services;