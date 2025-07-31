"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  loading?: boolean; // Optional loading state
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined); // Create context with undefined initial value

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");   // Check localStorage for user's email
    if (storedUser) {
      setUser(storedUser);  // If found, set user state
    }
    setLoading(false);  // Set loading to false after checking localStorage
  }, []);
  

  const login = async (email: string, password: string) => {
    const res = await fetch(
      `https://688beb07cd9d22dda5cba641.mockapi.io/userAuth?email=${email}&password=${password}`
    );
    const data = await res.json();
    if (!res.ok) {
      console.error("Login failed:", data);
      return false; // Return false if login fails
    }
    if (data.length) {
      setUser(data.email);
      localStorage.setItem("user", email);
      return true;
    }
    // console.log(data)
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext)!
