import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Myteam from './components/Myteam';
import Logout from './components/Logout';
import Player from './components/Player';

function App() {
  const { username, password } = useSelector((state) => state.loginReducer);
  const userAuth = username || localStorage.getItem('username');
  // const passAuth = password || localStorage.getItem('password');
  return (
    <BrowserRouter>
      {userAuth ? (
        <>
          <Navbar />

          <Switch>
            {/* <Route path='/login'>
              <Login />
            </Route> */}
            <Route path='/myteam'>
              <Myteam />
            </Route>
            <Route path='/logout'>
              <Logout />
            </Route>
            <Route path='/player'>
              <Player />
            </Route>
            <Route path='/'>
              <Navbar />
            </Route>
          </Switch>
        </>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}

export default App;
