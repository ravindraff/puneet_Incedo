import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import MainHeader from './components/MainHeader/MainHeader';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';


import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux'

const store = createStore(reducer);

function App() {


  return (
    

    <Provider store={store}>
          <Router>
            <div>
            <MainHeader />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/admin" component={Admin} /> 
            </div>
          </Router>
        </Provider>
    
    
      );
    }
    

  
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  


  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  // const setTokens = (data) => {
  //   console.log('called to authenticate' ,data)
  //   setIsAuthenticated(data);
  //   console.log(isAuthenticated)
    
  // }



export default App;
