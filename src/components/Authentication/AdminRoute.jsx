import React from 'react';
import { Redirect, Route } from 'react-router';

const AdminRoute = ({ children, ...rest }) => {
//   const { role } = userInfo();
    return (
        <Route
      {...rest}
      render={({ location }) =>
      true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;