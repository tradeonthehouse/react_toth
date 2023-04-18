import React from 'react';
import { Box, Typography, Divider, Link, List, Grid, ListItemText, ListItem, ListItemButton, ListItemIcon } from '@material-ui/core';
import useStyles from '../../../../styles/styles';
import Logo from '../../../../ui-component/Logo';
import FooterImage from '../../../../assets/images/map.png';
import { IconChevronRight } from '@tabler/icons';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <>
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer} style={{backgroundColor:'#673AB7',backgroundImage:`url(${FooterImage})`}}>
        <Grid container className={classes.sectionGridContainer}>
            <Grid item xs={12} md={3.5} minHeight={300} style={{margin:10}}>
                <Grid container direction="column">
                    <div style={{marginLeft:18,marginBottom:10}}><Logo /></div>
                    <Typography variant="h4" fontWeight={600} color="white" style={{marginBottom:30}}>
                    Trade On The House
                    </Typography><br/> 
                </Grid>
            </Grid>
            <Grid item xs={12} md={3.5} minHeight={300} style={{margin:10}}>
                <Grid container direction="column">
                        <Typography variant="h4" fontWeight={600} color="white" style={{marginBottom:30}}>
                            --- QUICK LINK ---
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link href="/home" color="inherit" style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <IconChevronRight color='white' />
                                        </ListItemIcon>
                                        <Typography color='white'>Home</Typography>
                                    </ListItem>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="/strategies" color="inherit" style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <IconChevronRight color='white' />
                                        </ListItemIcon>
                                        <Typography color='white'>Strategies</Typography>
                                    </ListItem>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="/contact" color="inherit" style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <IconChevronRight color='white' />
                                        </ListItemIcon>
                                        <Typography color='white'>Contact</Typography>
                                    </ListItem>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <IconChevronRight color='white' />
                                        </ListItemIcon>
                                        <Typography color='white'>FQAs</Typography>
                                    </ListItem>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <IconChevronRight color='white' />
                                        </ListItemIcon>
                                        <Typography color='white'>Privacy Policy</Typography>
                                    </ListItem>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="/" color="inherit" style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <IconChevronRight color='white' />
                                        </ListItemIcon>
                                        <Typography color='white'>Terms & Conditions</Typography>
                                    </ListItem>
                                </Link>
                            </ListItem>
                        </List>
                </Grid>
            </Grid>
            <Grid item xs={12} md={3.5} minHeight={300} style={{margin:10}}>
                <Grid container direction="column">
                    <Typography variant="h4" fontWeight={600} color="white" style={{marginBottom:30}}>
                            --- ABOUT US ---
                        </Typography><br/> 
                        <Typography fontSize={16} color='white'>
                            Tradeonthehouse is a strategy makers. How? By allowing them to automate their quant strategies and sell them to investors and traders the world over. The best part? You never have to write a single bit of code. Algo Trading made easy.
                        </Typography>
                </Grid>
            </Grid>
        </Grid> 
        <Grid>
           <Divider style={{marginBottom:20,marginTop:-80}} className={classes.subtitle} />
            <Typography color="white" className={classes.subtitle} style={{fontSize:11}} >The report's or presentation's goal is to give crucial details about the services in a way that will help and enable the investors to decide for themselves whether to use our platform.
            The presentation/report is provided just for informative reasons and shouldn't be construed as a solicitation of an offer to buy or sell any stocks or other investments mentioned therein, or as a recommendation to act on investing advice.<br/>
            We cannot guarantee the accuracy or completeness of any material, including information provided by third parties, and investors should not rely on it without conducting adequate due diligence.
            Market risk applies to investments in securities and equity-related products.<br/>
            These risks might be market- or security-specific and could result from various firm, industrial, political, and economic (local and international) causes.
            We do not guarantee or promise any return on the investor's investment in the strategies, models, or advice we provide.
            Depending on the dynamics and circumstances influencing the securities markets, an investment's value may increase or decrease.
            Any loss or shortfall resulting from operations and impacted by the market condition is not the fault of Trade on the House or its affiliates.
            </Typography>
            <Divider style={{marginBottom:20,marginTop:-40}} className={classes.subtitle} />
            <Typography className={classes.footerText}>
                <Link href="https://www.tradeonthehouse.com/" target="_blank" underline="none">
                © Tradeonthehouse, Copyright 2023
                </Link>
            </Typography>
        </Grid>
    </Box>
    </>
  );
};

export default Footer;