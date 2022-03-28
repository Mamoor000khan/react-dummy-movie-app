import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ICON from '../../Assets/Image/photo.svg';
import AuthContext from '../../store/auth-context';
import classes from './Login.module.css';

const Login = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4zUJEJOQtqh6pLwh4bL_agzmmGmRubOw';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4zUJEJOQtqh6pLwh4bL_agzmmGmRubOw';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Account already exists!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.login}>
      
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.container}>
          <img alt='' src={ICON} style={{width: '56px',height: '56px'}}/>
        <h1 className={classes.heading}>{isLogin ? 'DEMO STREAMING' : 'Sign Up'}</h1>
        <p className={classes.text}>Let's login to your account</p>
        <div className={classes.control}>
          <label htmlFor='email' className={classes.label}> Email</label>
          <input type='email' placeholder="your Email" id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password' className={classes.label}>Password</label>
          <input className={classes.input}
            
            placeholder="your password"
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <p
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >Don't have an account?
            <a className={classes.a}  >{isLogin ? '  Register'  : 'Login with existing account'}</a>
          </p>
        </div>
        </div>
      </form>
    </section>
  );
};

export default Login;