import React, { Suspense } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Main from './components/UI/Main';

import Header from './pages/Home';
import DiscoverMovies from './pages/DiscoverMovies';
import DiscoverTvSeries from './pages/DiscoverTvSeries';
import Search from './pages/Search';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import LoggedIn from './pages/LoggedIn';

const Specific = React.lazy(() => import('./pages/Specific'));
// const NotFound = React.lazy(() => import('./components/UI/NotFound'));

function App() {


  return (
    <div id="App" className="App">
      {/* <Nav /> */}
      <Main>
        {/* <Route path="/">
          <Nav />
        </Route> */}
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Header />
        </Route>

        <Route path="/movies" exact>
            <DiscoverMovies />
          </Route>
          <Route path="/tvseries" exact>
            <DiscoverTvSeries />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path='/login'>
          <LoginPage />
          
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
        <Route path='/loggedin'>
          <LoggedIn />
        </Route>
        

        <Suspense fallback={''}>
          <Route path="/:type/:movieId" exact>
            <Specific />
          </Route>
          {/* <Route path="/:type/:movieId/notfound">
            <NotFound />
          </Route> */}
        </Suspense> 

      </Main>

    </div>
  );
}

export default App;


