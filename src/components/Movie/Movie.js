import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Movie.module.css';
import ClipLoader from "react-spinners/ClipLoader";


function Movie(props) {
  
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        }, 1000)
    }, [])



    return (
        <div>
           {   loading ?
             <ClipLoader style={{color:'#fff'}}  loading={loading}  size={20} />
             :
          
          <Link id={props.id} to={`/${props.type === 'Tv Series' ? 'tv' : props.type.toLowerCase()}/${props.id}`} className={classes.Movie}>
                <img src={props.image} className={classes.skeleton} alt="MovieImage" />
            <h3 className={classes.name}>{props.name}</h3>
           
            
            
            </Link>
         }
        </div>
    );
}

export default Movie;