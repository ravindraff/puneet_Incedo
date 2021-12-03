import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "./context/auth";
import {connect} from 'react-redux'

function PrivateRoute({ component: Component, ...rest }) {
  // const {isAuthenticated} = {};


  // console.log('In Private route: ', isAuthenticated)
 console.log({...rest});
//  console.log({...props})
//  console.log(component)

  return (
    <Route
      {...rest}
      render={props =>
        props.auth.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

const mapStateToProps = (state)=>{
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps) (PrivateRoute);

// export default PrivateRoute;