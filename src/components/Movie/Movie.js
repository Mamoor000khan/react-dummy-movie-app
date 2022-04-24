import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import classes from './Movie.module.css';
import {  Card, CardContent, Typography, makeStyles, Box, ButtonBase, CircularProgress } from '@material-ui/core';
import  CircleLoader  from '../CircleLoader/CircleLoader';

const useStyles = makeStyles((theme) => ({
    showsCard:{
        background: theme.palette.secondary.main,
        width:  230,
        height:  320,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'contain',
        position:'relative',
        '&:hover': {
            "& $showsGenre":{
                top:'50%',
                opacity:1,
            },
            "& $showsImg": {
                filter: 'brightness(.9)'
            }
        }
    },
    categoryImg: {
        width: '70%',
        margin:'auto',
        height: '100%',
        objectFit: 'cover',
    },
    showsCardContent: {
        padding: '30px !important', 
        display: 'flex',
        justifyContent: 'center',
    },
   
    showsImg: {
        position:'absolute',
        top: 0,
        left:0,
        width:'100%',
        height:'100%',
        objectFit: 'cover',
    }
}));

function Movie(props) {
    const { showsCard, showsCardContent, showsGenre, categoryImg, showsImg } = useStyles(props);  
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        }, 2000)
    }, [])
      
    // if(loading){
    //     return (
    //         <CircleLoader fullHeight/>
    //     );
    // }


    return (
      <>
         <Box style={{width:'246px', height:'361px', marginBottom: '40px', marginRight: '3.6px'}}>
            <ButtonBase 
              style={{ boxShadow: '0 8px 15px rgba(0, 0, 0, .5)' }}
            >
                <Card
                  color="secondary"
                  className={showsCard}
                >
                    <CardContent className={showsCardContent}>
                    <React.Fragment>
                                {/* <CircularProgress size={25}
                                  style={{ color:'#fff', display: loading ? 'block' : 'none'  }}
                                /> */}
                            <Link id={props.id} to={`/${props.type === 'Tv Series' ? 'tv' : props.type.toLowerCase()}/${props.id}`} >
                               <img src={props.image} className={showsImg} alt="MovieImage" />
                            </Link> 
                            </React.Fragment>
                        
                    </CardContent>
                </Card>
            </ButtonBase>
            <Typography variant="body2"
              style={{ fontWeight: 600, marginTop:5, textAlign: 'start', color:'#fff', maxWidth: props.width ? props.width : 230 }}
            >
                { props.name }
            </Typography>
            
        </Box>
        </>
    );
}

export default Movie;