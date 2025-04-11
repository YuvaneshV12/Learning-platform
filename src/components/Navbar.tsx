import {
  UserCircle, BookOpen, Trophy, TrendingUp, LogIn, UserPlus, Home, Menu, X, LogOut,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check auth status on load and on route change
  useEffect(() => {
    const token = localStorage.getItem('token'); // or however you store auth
    setIsLoggedIn(!!token);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // or clear auth state
    setIsLoggedIn(false);
    navigate('/'); // redirect after logout
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center transition-transform duration-300 hover:scale-105">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">LearnHub</span>
            </Link>
          </div>

          {/* Mobile menu button and auth buttons */}
          <div className="flex items-center sm:hidden">
            <div className="flex items-center mr-2">
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="text-gray-600 hover:text-indigo-600 p-2 rounded-md text-sm font-medium transition-colors duration-300">
                    <UserCircle className="h-5 w-5" />
                  </Link>
                  <button onClick={handleLogout} className="text-red-500 hover:text-red-700 p-2 rounded-md transition-colors duration-300 ml-1">
                    <LogOut className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signin" className="text-gray-600 hover:text-indigo-600 p-2 rounded-md text-sm font-medium transition-colors duration-300">
                    <LogIn className="h-5 w-5" />
                  </Link>
                  <Link to="/signup" className="bg-indigo-600 text-white p-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300 ml-1">
                    <UserPlus className="h-5 w-5" />
                  </Link>
                </>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6 transition-transform duration-300 transform rotate-180" />
              ) : (
                <Menu className="block h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/" className="nav-link">
              <Home className="icon" /> Home
            </Link>
            <Link to="/courses" className="nav-link">
              <BookOpen className="icon" /> Courses
            </Link>
            <Link to="/progress" className="nav-link">
              <TrendingUp className="icon" /> Progress
            </Link>
            <Link to="/achievements" className="nav-link">
              <Trophy className="icon" /> Achievements
            </Link>

            {isLoggedIn ? (
              <>
                <Link to="/profile" className="nav-link">
                  <UserCircle className="icon" /> Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                >
                  <LogOut className="icon" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="nav-link">
                  <LogIn className="icon" /> Sign In
                </Link>
                <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center">
                  <UserPlus className="icon" /> Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown links */}
      <div
        className={`${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} sm:hidden overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="mobile-link">
            <Home className="icon" /> Home
          </Link>
          <Link to="/courses" className="mobile-link">
            <BookOpen className="icon" /> Courses
          </Link>
          <Link to="/progress" className="mobile-link">
            <TrendingUp className="icon" /> Progress
          </Link>
          <Link to="/achievements" className="mobile-link">
            <Trophy className="icon" /> Achievements
          </Link>
        </div>
      </div>
    </nav>
  );
}
