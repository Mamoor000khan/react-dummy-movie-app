// import { useState, useRef, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import ICON from '../../Assets/Image/photo.svg';
// import AuthContext from '../../store/auth-context';
// import classes from './Login.module.css';

// const Login = () => {
//   const history = useHistory();
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();
//   const authCtx = useContext(AuthContext);
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredEmail = emailInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;

//     // optional: Add validation

//     setIsLoading(true);
//     let url;
//     if (isLogin) {
//       url =
//         'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4zUJEJOQtqh6pLwh4bL_agzmmGmRubOw';
//     } else {
//       url =
//         'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4zUJEJOQtqh6pLwh4bL_agzmmGmRubOw';
//     }
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({
//         email: enteredEmail,
//         password: enteredPassword,
//         returnSecureToken: true,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => {
//         setIsLoading(false);
//         if (res.ok) {
//           return res.json();
//         } else {
//           return res.json().then((data) => {
//             let errorMessage = 'Account already exists!';
//             // if (data && data.error && data.error.message) {
//             //   errorMessage = data.error.message;
//             // }

//             throw new Error(errorMessage);
//           });
//         }
//       })
//       .then((data) => {
//         authCtx.login(data.idToken);
//         history.replace('/');
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };

//   return (
//     <section className={classes.login}>
      
//       <form className={classes.form} onSubm it={submitHandler}>
//         <div className={classes.container}>
//           <img alt='' src={ICON} style={{width: '56px',height: '56px'}}/>
//         <h1 className={classes.heading}>{isLogin ? 'DEMO STREAMING' : 'Sign Up'}</h1>
//         <p className={classes.text}>Let's login to your account</p>
//         <div className={classes.control}>
//           <label htmlFor='email' className={classes.label}> Email</label>
//           <input type='email' placeholder="your Email" id='email' required ref={emailInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor='password' className={classes.label}>Password</label>
//           <input className={classes.input}
            
//             placeholder="your password"
//             id='password'
//             required
//             ref={passwordInputRef}
//           />
//         </div>
//         <div className={classes.actions}>
//           {!isLoading && (
//             <button>{isLogin ? 'Login' : 'Create Account'}</button>
//           )}
//           {isLoading && <p>Sending request...</p>}
//           <p
//             type='button'
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >Don't have an account?
//             <a href="login" className={classes.a}>{isLogin ? '  Register'  : ' Login with existing account'}</a>
//           </p>
//         </div>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Login;
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import classes from './Login.module.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import Button from '@material-ui/core/Button';

export default function Login() {
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


        <Grid item xs={12} className={classes.control}>
        <label htmlFor='email' className={classes.label}>Email</label>
        <input type='email' placeholder="your Email" id='email'  style={{marginBottom:'20px'}}/>

        


        <label htmlFor='password' className={classes.label}>Password</label>
        <input type='password' placeholder="your password" id='password'  style={{marginBottom:'20px'}}/>
        
        <Button variant="contained" className={classes.button}>
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



