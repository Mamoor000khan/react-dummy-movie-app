import React, { useEffect, useState, Dispatch } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container, makeStyles, Menu, MenuItem, IconButton } from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        fontWeight: 500,
        textAlign:'Left',
        [theme.breakpoints.down('xs')]: {
          fontSize: 16,
          lineHeight: 1,
          
        }
        },
        login: {
            marginRight: theme.spacing(2),
      },
      registerBtnMain: {
        [theme.breakpoints.down('xs')]: {
          display:'none'
        }
      },
      registerBtnSec: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
          display:'block'
        }
      }
    }));

export default function Nav(props) {
      
      const { registerBtnMain, registerBtnSec, login, title } = useStyles();
    
      const [userAuth, setUserAuth] = useState(false);
    
      // Menu
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
    
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      //--
    
      // const logout = () => {
      //   // firebase.auth().signOut()
      //   .then(() => {
      //     props.storeAuthUser(null);
      //     // Redirect to login page
      //     props.history.push('/login');
      //   });
      // };
    
      useEffect(() => {
        if(props.user){
          setUserAuth(true);
        } else {
          setUserAuth(false);
        }
      }, [props.user]);
    
    const renderNavBtn = () => {
        // Show navbar buttons (login logout etc) according to user auth
        if(!userAuth) {
          return  (
              <React.Fragment>
                  <Button
                    size="small"
                    // onClick={() => props.history.push('/login')}
                    component={Link}
                    to="/login"
                    className={login}
                    color="inherit"
                  >Log in</Button>
                  <Button 
                    className={registerBtnMain}
                    variant="contained"
                    size="small"
                    color="secondary"
                    component={Link}
                    to="/register"
                    // onClick={() => props.history.push('/register')}
                  >Start your free trial</Button>
                  <Button 
                    className={registerBtnSec}
                    variant="contained"
                    size="small"
                    color="secondary"
                    // onClick={() => props.history.push('/register')}
                  >Register</Button>
              </React.Fragment>
          );
        } else {
          return  (
              <React.Fragment>
                  {/* Menu */}
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    // onClick={handleClick}
                  >
                      <MoreVertIcon style={{ color: '#fff' }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    // anchorEl={anchorEl}
                    // getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: -110 }}
                    keepMounted
                    // open={open}
                    // onClose={handleClose}
                  >
                      <MenuItem
                        component={Link}
                        to="/account"
                        // onClick={handleClose}
                      >
                          My Account
                      </MenuItem>
                      <MenuItem
                        // onClick={logout}
                      >
                          Logout
                      </MenuItem>
                  </Menu>
              </React.Fragment>
          );
        }
      }; 
    
    
     return (
       <AppBar id="Nav" position="static"
        elevation={0}
      >
          <Container>
              <Toolbar style={{ padding: 0 }}>
                  <Typography
                    variant="h5"
                    className={title}
                  >
                      <Link to="/"
                        style={{ textDecoration: 'none', color: '#fff' }}
                      >
                          DEMO Streaming
                      </Link>
                  </Typography>
                  {renderNavBtn()}
              </Toolbar>
          </Container>
      </AppBar>
      );
  };
