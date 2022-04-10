import React from 'react'
import classes from './Style.module.css';
import Footer from '../components/Footer/Footer'
import HeaderTop from '../components/Header/HeaderTop';
import HeaderBottom from '../components/Header/HeaderBottom';
import Nav from '../components/Nav/Nav';

function Home() {
return (
        <div className={classes.Response}>
            <Nav/>
            <HeaderTop/>
            <HeaderBottom/>
            <Footer/>
        </div>
    )
}

export default Home;