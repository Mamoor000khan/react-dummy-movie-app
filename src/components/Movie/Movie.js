import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Movie.module.css';

function Movie(props) {

    return (
        <Link id={props.id} to={`/${props.type === 'Tv Series' ? 'tv' : props.type.toLowerCase()}/${props.id}`} className={classes.Movie}>
            <img src={props.image} alt="MovieImage" />
            <h3 className={classes.name}>{props.name}</h3>
            
        </Link>
    );
}

export default Movie;