"use client";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  // Login disabled - directly show main application
  return <>{children}</>;
}
