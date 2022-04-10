// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import { Typography } from '@material-ui/core';
// import Img from '../../Assets/Image/photo.svg';
// import { NavLink } from 'react-router-dom';
// import classes from './HeaderBottom.module.css';


// export default function HeaderBottom() {
//     // const classes = useStyles();
//     return (
//         <div className={classes.HeaderBottom}>
//         <Grid  className={classes.root}>
//             <Grid  className={classes.container} >
//                 <div style={{padding:'8px'}}>
//                     <NavLink className={classes.paper} to="/movies">
//                     <img alt='' src={Img} className={classes.image}/>
//                         <p className={classes.imageOverlay}>movies</p>
//                     </NavLink>        
//                     <Typography className={classes.title}>
//                                Popular Movies
//                     </Typography>
//                 </div>
//                 <div style={{padding:'8px'}}>
//                     <NavLink className={classes.paper} to="/tvseries">
//                         <img alt='' src={Img} className={classes.image}/>
//                         <p className={classes.imageOverlay}>Series</p>
//                     </NavLink>
//                     <Typography className={classes.title}>
//                                Popular Series
//                     </Typography>
//                 </div>
                    
//             </Grid>
//         </Grid>
//         </div>
//     );
// }

import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './HeaderBottom.module.css';
import Img from '../../Assets/Image/photo.svg';
import { NavLink } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';

//const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

export default function SpacingGrid() {

return (
    <Grid container className={classes.HeaderBottom} >
      <Grid item xs={12} className={classes.root} >
        
          <Grid className={classes.container}>
          <NavLink  to="/movies">
          <Paper className={classes.paper}>
          <ButtonBase
          className={classes.button}
          focusRipple
          >
              
               <CardContent className={classes.cardContent}>
               
                     <img alt='' src={Img} className={classes.image}/>
                        <p className={classes.text}>Movies</p>
                           
                </CardContent>
                
          </ButtonBase>
          </Paper>
          </NavLink>  
          </Grid>


          <Grid className={classes.container}>
          <NavLink to="/tvseries">
          <Paper className={classes.paper}>
          <ButtonBase
          className={classes.button}
          focusRipple
          >
              
               <CardContent className={classes.cardContent}>
              
                     <img alt='' src={Img} className={classes.image}/>
                        <p className={classes.text}>Series</p>
                           
                </CardContent>
                
          </ButtonBase>
          </Paper>
          </NavLink>  
          </Grid>
          {/* <Grid>
          <Paper className={classes.paper} />
          </Grid> */}
          
        </Grid>
      
      
    </Grid>
  );
}