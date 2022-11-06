import { Navigate, Outlet } from 'react-router-dom';
import { useLoggedIn } from '../hooks/useLoggedIn';

const AuthenticatedLayout = () => {
  const isLoggedIn = useLoggedIn();
  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default AuthenticatedLayout;
