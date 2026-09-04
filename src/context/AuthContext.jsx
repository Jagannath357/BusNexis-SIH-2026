import React, { createContext, useState, useEffect } from 'react';
import { authenticateUser } from '../utils/mockAuth';

export const AuthContext = createContext();

const STORAGE_KEY = 'bhunexis_auth_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.error("Failed to update auth storage:", e);
    }
  }, [user]);

  const login = (email, password, role) => {
    const res = authenticateUser(email, password, role);
    if (res.success) {
      setUser(res.user);
      return { success: true, user: res.user };
    }
    return { success: false, error: res.error };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const updateProfile = (updatedFields) => {
    if (!user) return;
    const updated = { ...user, ...updatedFields };
    setUser(updated);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}
