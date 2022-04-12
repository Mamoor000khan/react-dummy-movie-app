import React from 'react'
import classes from './DummyMovieStructure.module.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function DummyMovieStructure() {
    return (
        <div className={classes.DummyMovie}>
             <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
>
        <CircularProgress color="inherit" />
      
            
            <h4 className={classes.MovieRating}></h4>
            <span className={classes.Image} />
            <h3 className={classes.Name}></h3>
            <div>
                <p className={classes.Type}></p> <p className={classes.Date}></p>
            </div>
            </Backdrop>  
        </div>
    )
}
