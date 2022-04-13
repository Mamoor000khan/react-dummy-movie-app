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
//         method: 'POST',
//         body: JSON.stringify({
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
//       <form className={classes.form} onSubmit={submitHandler}>
//         <div className={classes.container}>
//           <img alt='' src={ICON} style={{width: '56px',height: '56px'}}/>
//         <h1 className={classes.heading}>{ 'Sign Up'}</h1>
//         <p className={classes.text}>Create Your Account</p>
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
//             <button>{!!isLogin ? 'Login' : 'Submit'}</button>
//           )}
//           {isLoading && <p>Sending request...</p>}
//           <p
//             type='button'
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >Don't have an account?
//             <a className={classes.a}>{!!isLogin ? '  Register'  : ' Login with existing account'}</a>
//           </p>
//         </div>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Login;



import React, { useRef, useState } from "react"
import Container from '@material-ui/core/Container';
import classes from './Signup.module.css';
import Grid from '@material-ui/core/Grid';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import Button from '@material-ui/core/Button';
import { CryptoState } from "../../store/auth-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useHistory } from 'react-router-dom';



export default function Signup(handleClose) {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");     
 
 const history = useHistory();

//  const [setAlert] = CryptoState();

const handleSubmit = async() => {
  
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //  setAlert ({
    //    open: true,
    //    message:`Sign Up Successful. Welcome ${result.user.email}`,
    //    type:'sucess'
    //  });
    history.replace('/');
        
   }catch (error){
    // setAlert ({
    //   open: true,
    //   message: error.message,
    //   type:'error'
    // });
    return;
   }
}

  return (
    <div className={classes.login}>
      <Container className={classes.container}>
        <form className={classes.paper}>
         <Grid container spacing={3}>
           <Grid item xs={12} style={{marginBottom:'30px'}}>
            <LocalMoviesIcon style={{fontSize:'56px', color:'#fff'}}/>
             <p className={classes.heading}>Demo Streaming</p>
          <p className={classes.text}>create your account</p>
        </Grid>


        <Grid item xs={12} className={classes.control}>
        <label  htmlFor='email'  className={classes.label}>Email</label>
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
        variant="contained" 
        className={classes.button} >
                  Submit
            </Button>
        
        </Grid>
        <Grid item xs={12}>
          <p className={classes.register}>Have an account? <a href="login" className={classes.a} to='/login'>
          Login</a></p>

          <p className={classes.paragraph}>By clicking the above button, you consent to the use of cookies and similar technologies and instruct us to share information as described in our Privacy Policy.

          </p>
        </Grid>
        
      </Grid>
        </form>
      </Container>
    </div>
  );
}

// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"

// export default function Signup() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { signup } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   async function handleSubmit(e) {
//     e.preventDefault()

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }

//     try {
//       setError("")
//       setLoading(true)
//       await signup(emailRef.current.value, passwordRef.current.value)
//       history.push("/")
//     } catch {
//       setError("Failed to create an account")
//     }

//     setLoading(false)
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign Up</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password Confirmation</Form.Label>
//               <Form.Control type="password" ref={passwordConfirmRef} required />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Sign Up
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already have an account? <Link to="/login">Log In</Link>
//       </div>
//     </>
//   )
// }














