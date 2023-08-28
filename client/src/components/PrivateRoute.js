import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

function PrivateRoute({children}) {
  const {token} = useSelector((store) => store.auth);

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
