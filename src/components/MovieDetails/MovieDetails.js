import React from 'react';
import classes from './MovieDetails.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Tilt from 'react-parallax-tilt';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
const movieNoImg = 'https://www.movienewsletters.net/photos/000000h1.jpg';
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

export default function MovieDetails(props) {
  console.log(imgBaseUrl);

  
  
  
    
return (
    <div className={classes.MovieDetails}
    style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${props.details.background})`}}
    >
       <Grid className={classes.container}>
        <Grid className={classes.InnerContainer}>
          <Grid item xs={6} style={{width:'616px', minHeight: '517px', alignItems: 'center'}}>
           <Grid item xs={12} >
             <Button className={classes.backButton}>
               <KeyboardBackspaceIcon  />
                Back
             </Button>
        </Grid>

        <Grid item xs={12} className={classes.smallDetails}>
         <span >
                             <p style={{margin:'0px'}}> {props.details.release_date}</p>
                             <p style={{margin:'0px'}}> {Math.ceil(props.details.rating)} / 10</p>
           </span> 
        </Grid>
        <Grid item xs={12}>
        <span className={classes.MovieText}>
                <h4 className={classes.title}> {props.details.title}</h4>
                      <p><b></b> {props.text}</p>
           </span>
        </Grid>
        <Grid style={{color:'#fff', display:'flex', justifyContent:'space-between'}}>
        <Grid item xs={6}>
        <p className={classes.bookmark}>
                    <BookmarkBorderIcon  marginRight= '10px'/> 
                         Bookmark</p>
        </Grid>
        <Grid item xs={6} style={{textAlign:'end'}}>
        <button className={classes.TrailerBtn}>
                             <a color='#fff' href={`https://www.youtube.com/watch?v=${props.VideoId}`} target="_blank" rel="noreferrer" >Watch Trailer</a>
                         </button>
        </Grid>
        </Grid>
      </Grid>
        
        
        <Grid item xs={6} className={classes.ImageContainer}>
        <Tilt
      className={classes.parallaxEffectGlareScale}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      gyroscope={true}
    >
        <img  className={classes.img} src={props.details.image ? `${imgBaseUrl}/${props.details.image}` : movieNoImg} alt="movieImg" style={{ filter: props.loading ? 'blur(3px)' : 'blur(0)' }}/>
        </Tilt>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}


// import React, { useEffect, useState } from 'react';
// // import { connect } from 'react-redux';
// // import { AppState } from 'store/reducers';
// // import { ThunkDispatch } from 'redux-thunk';
// // import { startFetchAShow, startToggleWishlist } from 'store/actions/shows';
// // import { AppActions } from 'store/actions/types';
// // import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
// import { dateParser } from '../utils/helperFunctions';
// // import { User } from 'store/types';

// // @ts-ignore
// import Tilt from 'react-tilt'; 
// import { BookmarkBorder as BookmarkBorderIcon, Bookmark as BookmarkIcon } from '@material-ui/icons';
// import { Container, Grid, makeStyles, Typography, Box, CircularProgress } from '@material-ui/core';
// import CircularLoader from 'components/partials/CircularLoader';
// import noShowImg from '../assets/show.png';

// const OwnProps = {};
// const Props = OwnProps & StoreDispatchToProps & StoreStateToProps & RouteComponentProps;

// const useStyles = makeStyles(theme => ({
//     showContainer: {
//      display: 'flex',
//      alignItems:'center',
//      minHeight: '100vh',
//      backgroundSize: 'cover !important',
//      backgroundRepeat: 'no-repeat !important',
//      backgroundPosition: 'top !important',
//      [theme.breakpoints.down('sm')]: {
//         padding: '80px 0',
//      }
//     },
//     showContent: {
//         color: '#fff',
//         display:'flex',
//         flexDirection: 'column',
//         justifyContent:'space-around',
//         height: '60%',
//         [theme.breakpoints.down('md')]: {
//             marginBottom: 50,
//         }
//     },
//     showDetail: {
//         fontWeight: 600,
//     },
//     bookmark: { 
//         display:'inline-flex',
//         alignItems: 'center',
//         cursor:'pointer',
//         position: 'relative',
//         '&::after': {
//             content: '""',
//             position:'absolute',
//             width:94.65,
//             height: '100%',
//             opacity:0,
//             paddingBottom: 3,
//             transition: 'all .2s',
//             borderBottom: '1px solid',
//         },
//         '&:hover::after': {
//             opacity: 1,
//         }
//     },
//     backBtn: {
//         cursor:'pointer',
//         position:'relative',
//         display:'inline-block',
//         top: -60,
//         '&::after': {
//             content: '""',
//             position:'absolute',
//             width: '100%',
//             height: '100%',
//             left: 0,
//             opacity:0,
//             paddingBottom: 3,
//             transition: 'all .2s',
//             borderBottom: '1px solid',
//         },
//         '&:hover::after': {
//             opacity: 1,
//         }
//     }
//  }));
 

//  export default function MovieDetails(props) {
//     const [showData, setShowData] = useState(null);
//     const [categoryRef, setCategoryRef] = useState<"tv" | "movie">("movie");
//     const [isLoading, setIsLoading] = useState(true);
//     const [togglingWishlist, setTogglingWishlist] = useState(false);
//     const [itemAdded, setItemAdded] = useState(false);

//     const { showContainer, showContent, bookmark, backBtn } = useStyles();

//     const imgBaseUrl = 'http://image.tmdb.org/t/p/w1280';

//     const options = {
//         max: 25,     // max tilt rotation (degrees)
//         perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
//         scale: 1.01,      // 2 = 200%, 1.5 = 150%, etc..
//         speed: 400,    // Speed of the enter/exit transition
//         transition: true,   // Set a transition on enter/exit.
//         axis: null,   // What axis should be disabled. Can be X or Y.
//         reset: true,    // If the tilt effect has to be reset on exit.
//         easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
//     };

//     useEffect(() => {
//         // Get the show name from the query param
//         const queryParams = new URLSearchParams(props.location.search);
//         const sName = queryParams.get('sname') ;
//         let category = queryParams.get('category');

//         if(category === 'movies' || category === 'movie') {
//             category = 'movie';
//         } else {
//             category ='tv';
//         }
      
        
//         // Just to use category to check the card and render the different property api ( series, movies)
//     //     setCategoryRef(category as "movie" | "tv");
        
//     //     // Fetch the show data
//     //     props.fetchAShow(sName, category as 'movie' | 'tv')
//     //     .then(response => {
//     //         setShowData(response);
//     //         setIsLoading(false);
//     //     });
//     // }, []);

//     useEffect(() => {
//         // When page loads ( using it here because it seems that startFetchUserData runs after fetchAShow)
//         const showId = showData?.id;
//         // Check if the movie is in wishlist already (wishlist[movie | series])
//         const isBookmarked = props.user?.wishlist[categoryRef].includes(showId);
//         if(isBookmarked){
//             setItemAdded(true);
//         }
//     },[showData, props.user]);

//     const addToWishlistHandler = () => {
//         setTogglingWishlist(true);
//         props.toggleWishlist(showData?.id, categoryRef, 'add').then(() => {
//             setItemAdded(true);
//             setTogglingWishlist(false);
//         })
//         .catch(err => {
//             setTogglingWishlist(false);
//         });
//     };

//     const removeFromWishlistHandler = () => {
//         setTogglingWishlist(true);
//         props.toggleWishlist(showData?.id, categoryRef, 'remove').then(() => {
//             setItemAdded(false);
//             setTogglingWishlist(false);
//         });
//     };

//     const renderBookmark = () => {
//         if(!itemAdded){
//             return (
//                 <Typography 
//                   className={bookmark}
//                   onClick={addToWishlistHandler}
//                   variant="body2"
//                 >
//                     <BookmarkBorderIcon fontSize="small"
//                       style={{ marginRight: 6, marginLeft: -3 }}
//                     /> 
//                     Bookmark
//                 </Typography>
//             );
//         } else {
//             return (
//                 <Typography 
//                   className={bookmark}
//                   onClick={removeFromWishlistHandler}
//                   variant="body2"
//                 >
//                     <BookmarkIcon fontSize="small"
//                       style={{ marginRight: 6, marginLeft: -3 }}
//                     /> 
//                     Bookmark
//                 </Typography>
//             );
//         }
//     };


//     if(isLoading){
//         return (
//             <CircularLoader fullHeight/>
//         );
//     }

//     return (
//         <section 
//           className={showContainer}
//           style={{ background: showData?.backdrop_path &&
//             `linear-gradient(to top, rgba(0, 0, 0, .7) 40%, rgba(0, 0, 0, 0.4)), url('${imgBaseUrl + showData.backdrop_path}')`
//          }}
//         >
//             <Container
//               style={{ height: '100%' }}
//             >
//                 <Grid container
//                   style={{ height: '100%' }}   
//                 >
//                     <Grid item
//                       xs={12}
//                       md={6}
//                       style={{ minHeight: '100%', display:'flex', alignItems: 'center' }}
//                     >
//                         <Box className={showContent}>
//                             <Box>
//                                 <Typography variant="body2"
//                                   className={backBtn}
//                                   onClick={props.history.goBack}
//                                 >&larr; Back</Typography>
//                             </Box>
//                             <Box style={{ marginBottom: 30 }}>
//                                 <Typography variant="body2">{categoryRef === 'movie' ? (<React.Fragment>{dateParser(showData?.release_date)}</React.Fragment>) :
//                                 (<React.Fragment>{dateParser(showData?.first_air_date)}</React.Fragment>)}
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     { showData?.vote_average } / 10
//                                 </Typography>   
//                             </Box>
//                             <Box>
//                                 <Typography variant="h4"
//                                   style={{ marginBottom: 15, fontWeight: 'bold' }}
//                                 >
//                                     {categoryRef === 'movie' ? showData?.title : showData?.name}
//                                 </Typography>
//                                 <Typography variant="body1"
//                                   style={{ lineHeight: 1.7 }}
//                                 >
//                                     {showData?.overview}
//                                 </Typography>
//                             </Box>
//                             <Box style={{ display:'flex', alignItems: 'center', marginTop:30 }}>
//                                 { renderBookmark() }
//                                 {togglingWishlist ? <CircularProgress size={10}
//                                   style={{ color:'#fff', marginLeft:10 }}
//                                 /> : null }
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid item
//                       xs={12}
//                       md={6}
//                       style={{ minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent:'center' }}

//                     >
//                         <Box>
//                             <Tilt options={options}>
//                                 {showData?.poster_path ? (
//                                     <img src={`http://image.tmdb.org/t/p/w342/${showData?.poster_path}`}
//                                       alt=""
//                                     />
//                                 ) : (
//                                     <img src={noShowImg}
//                                       style={{ maxWidth: 400 }}
//                                       alt=""
//                                     />
//                                 )}
//                             </Tilt>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </section>
//     )}
