import { Navigate, Outlet } from 'react-router-dom';
import { useLoggedIn } from '../hooks/useLoggedIn';

const GuestLayout = () => {
  const loggedIn = useLoggedIn();

  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}

export default GuestLayout;
