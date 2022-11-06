import { useContext } from 'react';
import { UserAuthContext } from '../context/UserAuthContext';

export const useAuth = () => {
  const { user, isLoggedIn, login, logout } = useContext(UserAuthContext);
  return { user, isLoggedIn, login, logout  };
};
