import React, { useRef, useState } from "react"
import { useAuth } from "../../store/auth-context";
import { Link, useHistory } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import { CryptoState } from "../../store/auth-context";
import Container from '@material-ui/core/Container';
import classes from './Login.module.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import Button from '@material-ui/core/Button';
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

 export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  // const { setAlert } = CryptoState();
  
  const handleSubmit = async() => {
    if (!email || !password) {
      // setAlert({
      //   open: true,
      //   message: "Please fill all the Fields",
      //   type: "error",
      // });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      // setAlert({
      //   open: true,
      //   message: `Sign Up Successful. Welcome ${result.user.email}`,
      //   type: "success",
      // });

      // handleClose();
      history.replace('/');
    } catch (error) {
      // setAlert({
      //   open: true,
      //   message: error.message,
      //   type: "error",
      // });
      return;
    }
  }

  return (
    <div className={classes.login}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
        <Grid item xs={12} style={{marginBottom:'30px'}}>
          <LocalMoviesIcon style={{fontSize:'56px', color:'#fff'}}/>
          <p className={classes.heading}>Demo Streaming</p>
          <p className={classes.text}>Let's login to your account</p>
        </Grid>
           {/* {error && <Alert variant="danger">{error}</Alert>} */}

        <Grid item xs={12} className={classes.control}>
        <label htmlFor='email' className={classes.label} >Email</label>
        <input  
         value={email} 
         onChange={(e) => setEmail(e.target.value)} 
        type='email' 
        placeholder="your Email" 
        id='email'  
        style={{marginBottom:'20px'}}/>

        


        <label htmlFor='password' className={classes.label}>Password</label>
        <input  
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        type='password' 
        placeholder="your password" 
        id='password'  
        style={{marginBottom:'20px'}}/>
        
        <Button  
          onClick={handleSubmit} 
        type="submit" 
        variant="contained" 
        className={classes.button}>
  Login
</Button>
        
        </Grid>
        <Grid item xs={12}>
          <p className={classes.register}>Don't have an account? <a href="Signup" className={classes.a} to='/Signup'>
          Register</a></p>

          <p className={classes.paragraph}>By clicking the above button, you consent to the use of cookies and similar technologies and instruct us to share information as described in our Privacy Policy.

          </p>
        </Grid>
        
      </Grid>
        </Paper>
      </Container>
    </div>
  );
}