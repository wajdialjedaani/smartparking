// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate authentication check (you would replace this with your actual authentication logic)
    setTimeout(() => {
      const loggedInUser = localStorage.getItem('user');
      setUser(loggedInUser ? JSON.parse(loggedInUser) : null);
      setIsLoading(false);
    }, 1000);
  }, []);

  const setLogin = (userData) => {
    // Simulate login process (you would replace this with your actual authentication logic)
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    // Simulate logout process (you would replace this with your actual authentication logic)
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, setLogin, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
