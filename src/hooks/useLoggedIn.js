import { useAuth } from './useAuth';

export const useLoggedIn = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn;
};
