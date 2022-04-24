import React from 'react';
import AuthCard from '../components/AuthCard/AuthCard';
// import { connect } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { AppActions } from '../store/actions/types';


import { makeStyles, Container } from '@material-ui/core';
// import { startCreateUserAccount } from 'store/actions/userAuth';
// import { AppState } from 'store/reducers';

const OwnProps = {};
const Props = OwnProps 

const useStyles = makeStyles((theme) => ({
    register: {
        background:theme.palette.secondary.main,
        height: '100vh',
    },
    registerContainer: {
        height: '100%',
        display:'flex',
        margin: '40px auto',
        justifyContent:'center',
        alignItems:'center'
    },
}));

export default function Register (props)  {
    const { register, registerContainer } = useStyles();
    const { createUserAccount } = props;


    return (
        <section className={register}>
            <Container className={registerContainer}>
                <AuthCard auth="register"
                  authFunction={createUserAccount}
                />
            </Container>
        </section>
    );
};