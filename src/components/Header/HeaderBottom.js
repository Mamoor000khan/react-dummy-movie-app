import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Img from '../../Assets/Image/photo.svg';
import { NavLink } from 'react-router-dom';
import classes from './HeaderBottom.module.css';


export default function HeaderBottom() {
    // const classes = useStyles();
    return (
        <div className={classes.HeaderBottom}>
        <Grid container className={classes.root}>
            <Grid  className={classes.container} >
                <div style={{padding:'8px'}}>
                    <NavLink className={classes.paper} to="/movies">
                    <img alt='' src={Img} className={classes.image}/>
                        <p className={classes.imageOverlay}>movies</p>
                    </NavLink>        
                    <Typography className={classes.title}>
                               Popular Movies
                    </Typography>
                </div>
                <div style={{padding:'8px'}}>
                    <NavLink className={classes.paper} to="/tvseries">
                        <img alt='' src={Img} className={classes.image}/>
                        <p className={classes.imageOverlay}>Series</p>
                    </NavLink>
                    <Typography className={classes.title}>
                               Popular Series
                    </Typography>
                </div>
                    
            </Grid>
        </Grid>
        </div>
    );
}