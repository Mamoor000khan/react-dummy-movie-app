import React from 'react';
import classes from './MovieDetails.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
const movieNoImg = 'https://www.movienewsletters.net/photos/000000h1.jpg';
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

export default function MovieDetails(props) {
  console.log(imgBaseUrl);
  
    
return (
  
    <div className={classes.MovieDetails}
    style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${props.details.image})`}}
    >
       <Grid className={classes.container}>
        <Grid className={classes.InnerContainer}>
          <Grid item xs={6} style={{width:'616px', minHeight: '517px', alignItems: 'center'}}>
           <Button  
             style={{padding:'0px', justifyContent:'start', marginBottom:'60px',display:'flex', color:'#fff', textTransform:'capitalize'}}
           >
             <KeyboardBackspaceIcon style={{    fontSize: '23px', marginRight: '4px'}}/>
              Back
           </Button>
        <Grid className={classes.infoBox}>
           <span className={classes.smallDetails}>
                             <p style={{margin:'0px'}}> {props.details.release_date}</p>
                             <p style={{margin:'0px'}}> {Math.ceil(props.details.rating)} / 10</p>
           </span> 
           <span className={classes.MovieText}>
                <h4 className={classes.title}> {props.details.title}</h4>
                      <p><b></b> {props.text}</p>
           </span>
                        
                    </Grid>
                    <Grid style={{display:'flex', justifyContent:'space-between'}}>
                    <p
                      style={{display:'flex', alignItems:'center'}}
                    >
                    <BookmarkBorderIcon marginRight= '10px'/> 
                         Bookmark</p>
                         <button className={classes.TrailerBtn}>
                             <a color='#fff' href={`https://www.youtube.com/watch?v=${props.VideoId}`} target="_blank" rel="noreferrer" >Watch Trailer</a>
                         </button>
                         </Grid>
        </Grid>
        <Grid item xs={6} className={classes.ImageContainer}>
            <div>
        <img className={classes.img} src={props.details.image ? `${imgBaseUrl}/${props.details.image}` : movieNoImg} alt="movieImg" style={{ filter: props.loading ? 'blur(3px)' : 'blur(0)' }}/>
        </div>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}