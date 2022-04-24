import React from 'react'
import classes from './DummyMovieStructure.module.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircleLoader from '../CircleLoader/CircleLoader';
import Skeleton from '../Skeleton/Skeleton';

export default function DummyMovieStructure() {
    return (
        <div className={classes.DummyMovie}>
     
            <Skeleton/> 
            
            
            <h4 className={classes.MovieRating}></h4>
            <span className={classes.Image} />
            <h3 className={classes.Name}></h3>
            <div>
                <p className={classes.Type}></p> <p className={classes.Date}></p>
            </div>
              
        </div>
    )
}
