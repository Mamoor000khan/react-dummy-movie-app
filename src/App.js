import React, { Suspense } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Main from './components/UI/Main';
import { AuthContextProvider } from './store/auth-context';

import Header from './pages/Home';
import DiscoverMovies from './pages/DiscoverMovies';
import DiscoverTvSeries from './pages/DiscoverTvSeries';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';


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

        <AuthContextProvider>
        <Route path="/movies" exact>
            <DiscoverMovies />
          </Route>
          <Route path="/tvseries" exact>
            <DiscoverTvSeries />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          </AuthContextProvider>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Login></Login>
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






