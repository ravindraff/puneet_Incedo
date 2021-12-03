import React from 'react';

import classes from './Navigation.module.css';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


const Navigation = (props) => {

  return (
    <nav className={classes.nav}>
      <ul>
        {props.auth.isLoggedIn && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {props.auth.isLoggedIn && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        {props.auth.isLoggedIn && (
          <li>
            <button onClick={()=>props.onLogout(false)}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch)=>{
  return {
    onLogout: (login)=> dispatch({type: 'USER_AUTHENTICATE', payload: login})
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navigation);
