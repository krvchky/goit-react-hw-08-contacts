import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogedIn);

  const location = useLocation();
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={location} />;
};