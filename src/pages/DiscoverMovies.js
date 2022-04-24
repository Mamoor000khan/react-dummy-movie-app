import React, { useEffect, useState, useContext } from 'react'
 import AuthContext from '../store/auth-context';
import MovieList from '../components/MovieList/MovieList';
import classes from './Style.module.css';
import Search from './Search';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import HeaderTop from '../components/Header/HeaderTop';

function DiscoverMovies(props) {
    
    const ctx = useContext(AuthContext);
    const [fetchedMovies, setFetchedMovies] = useState();
    const [genreId, setGenreId] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            setFetchedMovies(false);
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US&sort_by=popularity.desc${genreId ? `&with_genres=${genreId.map(e => e)}` : '' }&page=${ctx.pageNo}&with_watch_monetization_types=flatrate`);
            const data = await res.json();
            setFetchedMovies(data.results);
             ctx.setFetchResponse(data.results);
        }
        
        fetchMovies();
    }, [genreId,ctx.pageNo ])

    return (
         <div>
             <Nav/>
            <HeaderTop text="Movies"/>
        
        <div className={classes.Box}>
         <Search 
          placeholder={'Search Movies'}
          />
        <MovieList ShowPagination   type='Movie' movies={fetchedMovies} />
            </div>
            <Footer/>
        </div>
    )
}

export default DiscoverMovies;

// import React, { useEffect, useState } from 'react';
// // import { connect } from 'react-redux';
// // import { AppState } from '../store/reducers';
// // import { ThunkDispatch } from 'redux-thunk';
// // import * as actionCreator from '../store/actions/shows';
// // import { RouteComponentProps, withRouter } from 'react-router-dom';
// import { v4 as uuid } from 'uuid';
// // import { AppActions } from '../store/actions/types';

// import { Container, Grid, makeStyles } from '@material-ui/core';

// import TopBar from '../components/Header/HeaderTop';
// import ShowsCard from '../components/Header/HeaderBottom';
// import SkeletonLoader from '../components/Skeleton/Skeleton';
// import SearchBar from '../components/SearchBar/SearchBar';

// import emptyImg from '../Assets/Image/SVG/empty.svg';

// // type OwnProps = {};

// // type Props = OwnProps & StoreDispatchProps & RouteComponentProps

// const useStyles = makeStyles(theme => ({
//     showsGrid: {
//         [theme.breakpoints.down("md")]: {
//             justifyContent: "center"
//         }
//     }
// }));

// export default function  Shows (props) {
//     const { showsGrid } = useStyles();
//     const [shows, setShows] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     // storing all movies in a single state to access them in the search functionality
//     const [allShows, setAllShows] = useState(null);
//     const [category, setCategory] = useState('');
    
//     useEffect(() => {
//         // Getting category from query param
//         const queryParams = new (props.location.search);
//         const showsCategory = queryParams.get('category');

//         // Set category name to state ( To use it as a prop for topbar)
//         setCategory(showsCategory);
//         // Fetching the category data
//         props.fetchShows(showsCategory).then(response => { // pass series Route query param
//             setShows(response);
//             setAllShows(response);
            
//             setIsLoading(false);
//         });

//     }, []);

//     const searchShowsHandler = (value) => {
//         // Get the searched text from the child
//         const searchStr = value.toLowerCase();
//         // Filter the shows according to the searched text;
//         let filteredShows;

//         if(searchStr.length > 0){
//             filteredShows = allShows?.filter(m => m.title.toLowerCase().match(searchStr));
//         } else if(searchStr.length === 0){
//             filteredShows = allShows?.map(m => m);
//         }

//         // Set Shows state
//         if(filteredShows){
//             setShows(filteredShows);
//         }
//     }; 

//     if(isLoading) return (
//         <React.Fragment>
//             <section>
//                 {/* query param */}
//                 <TopBar text={category} /> 
//                 <SkeletonLoader />
//             </section>
//         </React.Fragment>
//     );

//     return (
//         <section>
//             {/* query param */}
//             <TopBar text={category} />
//             <Container style={{ paddingBottom: 100 }}>
//                 <SearchBar 
//                   searchShows={searchShowsHandler}
//                   placeholder={`Search ${category}`}
//                 />
//                 <Grid 
//                   container
//                   spacing={2}
//                   className={showsGrid}
//                 >
//                     {shows?.length !== 0 ? shows?.map(s => (
//                         <Grid item
//                           key={uuid()}
//                           style={{ marginBottom: 40, marginRight: 3.6 }}
//                         >
//                             <ShowsCard    
//                               cardTitle={s.title}
//                               link={`/show?sname=${s.title.toLowerCase()}&category=${category.toLowerCase()}`}
//                               imgUrl={s.images["Poster Art"].url}
//                             />
//                         </Grid>
//                     )) : (
//                         <Grid item
//                           xs={12}
//                           style={{ margin: '40px 0', display: 'flex', justifyContent: 'center' }}
//                         >
//                             <img src={emptyImg}
//                               style={{ maxWidth: 350 }}
//                             />
//                         </Grid>
//                     )}
//                 </Grid>
//             </Container>
//         </section>
//     );
// };

