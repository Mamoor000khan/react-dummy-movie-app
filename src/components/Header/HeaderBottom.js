import React, { useState } from 'react';
import {  Card, CardContent, Typography, makeStyles, Box, ButtonBase, CircularProgress } from '@material-ui/core';
import Img from '../../Assets/Image/SVG/film.svg';

// type OwnProps = {
//   cardTitle: string;
//   link?: string; 
//   genreTitle?: string;
//   isGenre?: boolean; // Whether it is a genre card or movie/series card
//   imgUrl?: string;
//   routeProps?: RouteComponentProps;
//   width?: number;
//   height?: number;
// }

// type Props = OwnProps

const useStyles = makeStyles((theme) => ({
  showsCard:{
      background: theme.palette.secondary.main,
      width: 230,
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
  showsGenre: {
      position:'absolute',
      zIndex: 100,
      fontSize: 35,
      fontWeight: 600,
      color: '#fff',
      top: '70%',
      opacity: 0,
      left: '50%',
      transform:'translate(-50%, -50%)',
      transition: 'all .3s',
      textAlign:'left'
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



export default function SpacingGrid(props) {
  const { showsCard, showsCardContent, showsGenre, categoryImg, showsImg } = useStyles(props);

  const [isImgLoading, setImgLoading] = useState(true);

  const onImgLoadHandler = () => {
    setImgLoading(false);
};

return (
  <>
  <Box>
      <ButtonBase 
        style={{ boxShadow: '0 8px 15px rgba(0, 0, 0, .5)' }}
      >
          <Card
            color="secondary"
            className={showsCard}
          >
              <CardContent className={showsCardContent}>
                  { props.isGenre ? (
                      <React.Fragment>
                          <img className={categoryImg}
                            alt="film icon"
                            src={Img}
                          />
                          <Typography  className={showsGenre}>
                              { props.genreTitle}
                          </Typography>
                      </React.Fragment>
                  ): (
                      <React.Fragment>
                          <CircularProgress size={25}
                            style={{ color:'#fff', display: isImgLoading ? 'block' : 'none' }}
                          />
                          <img className={showsImg}
                            src={props.imgUrl}
                            alt="show poster"
                            style={{ display: isImgLoading ? 'none' : 'block' }}
                            onLoad={onImgLoadHandler}
                          />
                      </React.Fragment>
                  )}
              </CardContent>
          </Card>
      </ButtonBase>
      <Typography variant="body2"
        style={{textAlign: 'left', fontWeight: 600, marginTop:5, color:'#fff', maxWidth: props.width ? props.width : 230 }}
      >
          { props.cardTitle }
      </Typography>
  </Box>
  </>
);
}