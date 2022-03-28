import React from 'react'
import classes from './Style.module.css';
import Footer from '../components/Footer/Footer'
import HeaderTop from '../components/Header/HeaderTop';
import HeaderBottom from '../components/Header/HeaderBottom';

function Trending() {
return (
        <div className={classes.Response}>
            <HeaderTop/>
            <HeaderBottom/>
            <Footer/>
        </div>
    )
}

export default Trending;