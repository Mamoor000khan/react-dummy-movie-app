import React, { useEffect, useState } from 'react'
// import AuthContext from '../store/auth-context';
import MovieList from '../components/MovieList/MovieList';
import classes from './Style.module.css';
import Search from './Search';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

function DiscoverMovies() {
    
    // const ctx = useContext(AuthContext);
    const [fetchedMovies, setFetchedMovies] = useState();
    const [genreId, setGenreId] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            setFetchedMovies(false);
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US&sort_by=popularity.desc`);
            const data = await res.json();
            setFetchedMovies(data.results);
            console.log(data);
        }
        
        fetchMovies();
    }, [genreId, ])

    return (
         <div>
             <Nav/>
             <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.box}> 
                    <h6 style={{marginLeft: '8px',}} className={classes.title}>
                       Movies
                    </h6>
                </div>
            </div>
        </header>
        
        <div className={classes.searchBox}>
         <Search />
            <MovieList   type='Movie' movies={fetchedMovies} />
            </div>
            <Footer/>
        </div>
    )
}

export default DiscoverMovies;


