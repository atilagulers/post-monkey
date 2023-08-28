import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

function PrivateRoute({children}) {
  const {token, user} = useSelector((store) => store.auth);

  if (!token || !user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
