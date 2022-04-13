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