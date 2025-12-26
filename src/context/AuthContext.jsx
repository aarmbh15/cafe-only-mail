import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      console.log('🔍 AuthContext: Checking session...');
      const res = await axios.get('/user');
      setUser(res.data);
      console.log("AuthContext: User loaded", res.data);
    } catch (err) {
      setUser(null);
      console.log("AuthContext: No authenticated user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();

    // Re-check when window regains focus (e.g. after login in another tab)
    window.addEventListener('focus', fetchUser);
    return () => window.removeEventListener('focus', fetchUser);
  }, []);

  const logout = async () => {
    try {
      await axios.post('/logout');
      console.log("Logged out on backend");
    } catch (err) {
      console.error("Logout error:", err);
    }
    setUser(null);
    window.location.href = '/';
  };

  const refetch = fetchUser;

  return (
    <AuthContext.Provider value={{ user, loading, logout, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};