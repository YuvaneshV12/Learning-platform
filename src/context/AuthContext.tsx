import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { register, login, getCurrentUser } from '../api/auth';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  handleRegister: (data: { name: string; email: string; password: string }) => Promise<any>;
  handleLogin: (data: { email: string; password: string }) => Promise<any>;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      fetchCurrentUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      const userData = await getCurrentUser();
      setUser(userData);
    } catch (err) {
      console.error('Error getting current user:', err);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data: { name: string; email: string; password: string }) => {
    try {
      console.log('Attempting to register user:', { ...data, password: '[REDACTED]' });
      const response = await register(data);
      console.log('Registration successful:', response);
      
      const { token, user } = response;
      localStorage.setItem('token', token);
      setUser(user);
      
      return response;
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'Registration failed');
      throw err;
    }
  };

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      console.log('Attempting to login user:', { ...data, password: '[REDACTED]' });
      const response = await login(data);
      console.log('Login successful:', response);
      
      const { token, user } = response;
      localStorage.setItem('token', token);
      setUser(user);
      
      return response;
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed');
      throw err;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    loading,
    error,
    handleRegister,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 