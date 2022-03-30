import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    heading: {
        width: '250px',
        maxHeight: '50px',
        marginTop: '3px',
        color: '#fff',
        textAlign: 'initial',
        fontSize: '30px',
        lineHeight: '64px',
        fontFamily: 'serif',
        fontWeight: '500',
        letterSpacing: '1px',
        cursor: 'pointer',
        marginLeft:'8px',
        textDecoration:'none',
    },
    signin:{
        width: '64px',
        height: '34px',
        fontSize: '16px',
        fontFamily: 'sans-serif',
        textTransform: 'none',
        textDecoration: 'none',
        fontWeight: '500',
        // marginTop: '17px',
        color: '#fff'
    },
    signup:{
        width: '160px',
        height: '35px',
        fontFamily: 'inherit',
        textTransform: 'none',
        fontSize: '13px',
        color: '#fff',
        backgroundColor: '#2b2b2b',
        marginRight: '10px',
        textDecoration:'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover':{
            backgroundColor: '#1c1e1f',
            boxShadow: 'none',
        }
        
    },
}));

export default function Nav() {
     const Classes = useStyles();
    return (
        <nav id="Nav" className={classes.nav}>
            <Grid className={classes.container}>
                <Grid  className={classes.box}>
                    <Grid item xs={6} sm={9}  style={{textAlign: "initial"}}>
                        <NavLink className={Classes.heading}  to="/home">DEMO Streaming</NavLink>
                    </Grid>
                    <Grid item xs={2} sm={2} style={{width:'64px', height:'34px',marginTop:'17px',display:'flex', justifyContent: 'end'}}>
                        <Button style={{marginTop: '6px'}}>
                        <Link className={Classes.signin} to='/login'>   
                          Log in
                          </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={2} sm={2} style={{width:'160px', height:'34px',marginTop:'10px',boxShadow: 'none'}}>
                        <Button >
                        <Link className={Classes.signup} to='/Signup'>    
                          Start your free trial
                          </Link> 
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </nav>
    );
}

