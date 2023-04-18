import React from 'react';
import { Grid, Typography, Button, Box, Link } from '@material-ui/core';
import bestTeams from './../../../../assets/images/bestTeams.jpg';
import useStyles from '../../../../styles/styles';

const Others = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img src={bestTeams} alt="My Team" className={classes.largeImage} style={{borderRadius:10}} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Strategies at your feet:
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
          You have the option to select from a wide range of intelligent, AI-driven strategies that were developed at the meeting point of cutting-edge technology and in-depth trading knowledge.
          </Typography>
          <Link href="/contact" color="inherit" style={{textDecoration: 'none'}}>
          <Button
                            variant="contained"
                            sx={{ width: '150px',height:'50px', fontSize: '16px',backgroundColor:'#ffac33' }}
                        >
                            Contact Us
         </Button>
         </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Others;