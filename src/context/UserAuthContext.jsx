import React, { createContext, useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const UserAuthContext = createContext(null);

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const login = (username, password) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  const valueFactory = () => ({ user, isLoggedIn, login, logout });

  const value = useMemo(valueFactory, [user, isLoggedIn]);

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
