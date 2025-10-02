"use client";

import { useAuth } from "@/hooks/useAuth";
import LoginPage from "@/components/LoginPage";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const { isLoggedIn, isLoading, login } = useAuth();

  // Show loading screen while checking auth status
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Memuat aplikasi...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={login} />;
  }

  // Show main application if authenticated
  return <>{children}</>;
}