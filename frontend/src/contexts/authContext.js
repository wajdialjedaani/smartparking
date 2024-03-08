// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const loggedInUser = localStorage.getItem('user');
      setUser(loggedInUser ? JSON.parse(loggedInUser) : null);
      setIsLoading(false);
    }, 3000);
  }, []);

  const setLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setLogin, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
