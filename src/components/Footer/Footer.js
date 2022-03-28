import { React } from 'react';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Apple from '../../Assets/Image/apple.png';
import Google from '../../Assets/Image/google.png';
import classes from './Footer.module.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.card}>
                <div className={classes.root} >
                    <Grid className={classes.container}>
                    
        <Grid item xs={2} style={{borderRight: '1px solid #fff', maxWidth:'67px', height:'20px',marginRight: '4px'}}>
        Home
        </Grid>
        <Grid item xs={2} style={{borderRight: '1px solid #fff', maxWidth:'170px', height:'20px',marginRight: '4px'}}>
        Terms and Conditions
        </Grid>
        <Grid item xs={2} sm={2} style={{borderRight: '1px solid #fff', maxWidth:'112px', height:'20px',marginRight: '4px'}}>
        Privacy Policy
        </Grid>
        <Grid item xs={2} sm={2} style={{borderRight: '1px solid #fff', maxWidth:'160px', height:'20px',marginRight: '4px'}}>
        Collection Statement
        </Grid>
        <Grid item xs={2} sm={2} style={{borderRight: '1px solid #fff', maxWidth:'56px', height:'20px',marginRight: '10px'}}>
        Help
        </Grid>
        <Grid item xs={2} sm={2} style={{ maxWidth:'116px', height:'20px',marginRight: '4px'}}>
        Manage Account
        </Grid>
    </Grid>
            <span className={classes.text}>
                      Copyright © 2020 DEMO Streaming. All Rights Reserved.
                    </span>
                </div>
                <div className={classes.bottombox}>
                    <NavLink to="/header" style={{width:'616px', height:'46px',display: 'flex',marginLeft: '10px'}}>
                        <FacebookIcon style={{color: '#fff'}}/>
                        <TwitterIcon style={{color: '#fff',marginLeft: '10px'}}/>
                        <InstagramIcon style={{color: '#fff',marginLeft: '10px'}}/>
                    </NavLink>
                    <NavLink to="/header" style={{width:'616px', height:'46px', display: 'flex', justifyContent: 'end'}}>
                        <img alt='' src={Apple} style={{width:'130px', height:'42px'}}/>
                        <img alt='' src={Google} style={{width:'130px', height:'42px', marginLeft:'20px'}}/>
                    </NavLink>
                </div>
            </div>
        </footer>
    );
}

