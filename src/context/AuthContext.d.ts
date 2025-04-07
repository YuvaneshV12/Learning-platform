import { ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  handleRegister: (data: { name: string; email: string; password: string }) => Promise<{
    token: string;
    user: User;
  }>;
  handleLogin: (data: { email: string; password: string }) => Promise<{
    token: string;
    user: User;
  }>;
  handleLogout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider(props: AuthProviderProps): JSX.Element;
export function useAuth(): AuthContextType; 