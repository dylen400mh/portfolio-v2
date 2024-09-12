import React, { useState, createContext, useContext, useCallback } from "react";
import { isTokenExpired } from "../util/isTokenExpired";
import { User } from "../types/User";

interface AuthContextProps {
  isAuthenticated: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
  validateToken: () => string | null;
  user: User | undefined;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleLogin = useCallback(async () => {
    setIsAuthenticated(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/current-user`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (err) {
      return;
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(undefined);
  }, []);

  const validateToken = useCallback((): string | null => {
    const token = localStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      handleLogout();
      return null;
    } else {
      handleLogin();
      return token;
    }
  }, [handleLogin, handleLogout]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleLogout,
        validateToken,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
