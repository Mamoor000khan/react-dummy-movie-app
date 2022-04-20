import React from 'react'
import classes from './Style.module.css';
import Footer from '../components/Footer/Footer'
import HeaderTop from '../components/Header/HeaderTop';
import HeaderBottom from '../components/Header/HeaderBottom';
import Nav from '../components/Nav/Nav';
import { Container, Grid, useTheme, Theme, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    showsGrid: {
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      }
    }
  }));


function Home() {
    const { showsGrid } = useStyles();
    
return (
        <div className={classes.root}>
            <Nav/>
            
            <HeaderTop text="Popular titles"/>
            <Container style={{ paddingBottom: 30 }}>
            <Grid 
              container
              spacing={2}
              className={showsGrid}
            >
                <Grid item>
                <NavLink style={{textDecoration:'none', color:'#165595'}}  to="/movies">
                    <HeaderBottom    
                      cardTitle="Popular Movies"
                      isGenre
                      genreTitle="Movies"
                      link="/shows?category=movies"
                    />
                    </NavLink>
                </Grid>
                <Grid item>
                <NavLink style={{textDecoration:'none', color:'#165595'}}  to="/tvseries">
                    <HeaderBottom
                      cardTitle="Popular Series"
                      isGenre
                      genreTitle="Series"
                      link="/shows?category=series"
                    />
                    </NavLink>
                </Grid>
            </Grid>
        </Container>
            <Footer/>
        </div>
    )
}

export default Home;