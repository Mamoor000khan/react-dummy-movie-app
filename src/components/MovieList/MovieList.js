import React, { Fragment, useState,useEffect } from 'react';
import DummyMovieStructure from '../DummyMovieStructure/DummyMovieStructure';
import Movie from '../Movie/Movie';
import classes from './MovieList.module.css';
import Pagination from '../Pagination/Pagination';


function MovieList(props) {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const movieNoImg = 'https://www.movienewsletters.net/photos/000000h1.jpg';
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

    useEffect(()=> {
        document.getElementById('Nav').scrollIntoView({ behavior: 'smooth' });
    });
        
    const DummyMovie = (props) => {
        return <Fragment>
         <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure />
         <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure />
         <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure />
         <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure />
         <DummyMovieStructure /> <DummyMovieStructure /> <DummyMovieStructure />  
        </Fragment>
    }
  
    // document.getElementById('App') && document.getElementById('Nav').scrollIntoView({ behavior: 'smooth' });

return (
        <div className={`${classes.MovieList} ${props.className}`} >
            
            {
               props.movies ? props.movies.map((movie, i) => {
                    return movie.vote_average > 1 && <Movie id={movie.id} key={i} image={movie.poster_path || movie.backdrop_path ? `${imgBaseUrl}${movie.poster_path || movie.backdrop_path}` : movieNoImg} background={`${BACKDROP_PATH}${movie.poster_path || movie.backdrop_path}`} name={movie.name ? movie.name : movie.title} type={movie.media_type === 'tv' ? 'Tv Series' : movie.media_type ? movie.media_type : props.type || props.type} date={movie.release_date ? movie.release_date : movie.first_air_date} rating={movie.vote_average.toFixed(1)} />
                
                })
                    :
                      <DummyMovie />
                      
            
            }
             {props.movies && props.ShowPagination && <Pagination />}
        </div>
    );
}

export default MovieList;