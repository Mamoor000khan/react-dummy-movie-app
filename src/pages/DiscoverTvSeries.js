import React, { useEffect, useState } from 'react'
// import AuthContext from '../store/auth-context';

import MovieList from '../components/MovieList/MovieList';
import Search from './Search';
import Footer from '../components/Footer/Footer';
import classes from './Style.module.css';
import Nav from '../components/Nav/Nav';

function DiscoverTvSeries() {
    // const ctx = useContext(AuthContext);
    const [fetchedTvSeries, setFetchedTvSeries] = useState();
    const [genreId,] = useState('');

    useEffect(() => {

        const fetchTvSeries = async () => {
            setFetchedTvSeries(false);
            const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US&sort_by=popularity.desc`);
            const data = await res.json();
            console.log(data.results);
            setFetchedTvSeries(data.results);
            // ctx.setFetchResponse(data.results);
        }
        fetchTvSeries();
        
    }, [genreId,])
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
       <MovieList ShowPagination type='Tv Series' movies={fetchedTvSeries} />
       </div>
       <Footer/>
   </div>
    )
}

export default React.memo(DiscoverTvSeries);