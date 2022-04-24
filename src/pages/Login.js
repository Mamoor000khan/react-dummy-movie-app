import React from 'react';
// import { connect } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { AppActions } from 'store/actions/types';
// import { startLoginUser } from 'store/actions/userAuth';
// import { AppState } from 'store/reducers';

import AuthCard from '../components/AuthCard/AuthCard';
import { Container, makeStyles } from '@material-ui/core';

const OwnProps = {};
const Props = OwnProps 

const useStyles = makeStyles((theme) => ({
    login: {
        background:theme.palette.secondary.main,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
    },
    loginContainer: {
        margin: '40px auto',
        height: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
}));

export default function Login (props) {
    const { login, loginContainer } = useStyles();
    return (
        <section className={login}>
            <Container className={loginContainer}>
                <AuthCard auth="login"
                  authFunction={props.loginUser}
                />
            </Container>
        </section>
    );
};