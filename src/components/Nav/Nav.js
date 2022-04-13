import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
    // heading: {
    //     width: '250px',
    //     maxHeight: '50px',
    //     marginTop: '3px',
    //     color: '#fff',
    //     textAlign: 'initial',
    //     lineHeight: '64px',
    //     fontSize: '1.7142857142857142rem',
    //     fontFamily: 'Work Sans, sans-serif',
    //     fontWeight: '500',
    //     letterSpacing: '1px',
    //     cursor: 'pointer',
    //     marginLeft:'8px',
    //     textDecoration:'none',
    // },
    // signin:{
      
    //     fontSize: '0.9285714285714285rem',
    //     fontFamily: 'Work Sans, sans-serif',
    //     textDecoration: 'none',
    //     fontWeight: '500',
    //     textTransform: 'initial',
    //    color: '#fff'
    // },
    signup:{
        fontFamily: 'Work Sans, sans-serif',
        textTransform: 'initial',
        fontSize:' 14px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '159px',
        height: '34px',
        padding:'4px 10px', 
        borderRadius:'0px',
        backgroundColor: '#2b2b2b',

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
                    {/* <Grid item xs={11} sm={11}  style={{textAlign: "initial"}}>
                        <NavLink className={Classes.heading}  to="/home">DEMO Streaming</NavLink>
                    </Grid>
                    <Grid item xs={1} sm={1} style={{width:'64px', height:'34px',marginTop:'17px',display:'flex', justifyContent: 'end'}}>
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
                    </Grid> */}
                    <Grid style={{display: 'flex', position: 'relative',alignItems: 'center',maxWidth:'100%'}}>
                        <Typography variant="h5" style={{textAlign: "initial", width:'990px',}}>
                        <NavLink className={classes.heading}  to="/home">DEMO Streaming</NavLink>
                        </Typography>

                        
                    <Button   href="#contained-buttons" style={{width: '64px',
                            height: '34px',padding:'4px 5px',marginRight:'16px'}}>
                    <Link className={classes.signin} to='/login'>   
                          Log in
                          </Link>
</Button>
<Button className={Classes.signup} variant="contained"  >
<Link style={{color: '#fff', textDecoration:'none', boxShadow:'none'}}   to='/Signup'>    
                          Start your free trial
                          </Link>
</Button>

                    </Grid>
                </Grid>
            </Grid>
        </nav>
    );
}

