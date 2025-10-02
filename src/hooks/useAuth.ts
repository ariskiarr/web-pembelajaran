"use client";

import { useState, useEffect } from "react";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const loginStatus = localStorage.getItem("isLoggedIn");
    const loginTime = localStorage.getItem("loginTime");
    
    if (loginStatus === "true" && loginTime) {
      // Check if login is still valid (24 hours)
      const loginTimestamp = parseInt(loginTime);
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (now - loginTimestamp < twentyFourHours) {
        setIsLoggedIn(true);
      } else {
        // Login expired, clear storage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loginTime");
        setIsLoggedIn(false);
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loginTime", Date.now().toString());
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loginTime");
  };

  return {
    isLoggedIn,
    isLoading,
    login,
    logout
  };
}