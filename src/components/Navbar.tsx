import { UserCircle, BookOpen, Trophy, TrendingUp, LogIn, UserPlus, Home, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            {/* Sign In and Sign Up buttons for mobile */}
            <div className="flex items-center mr-2">
              <Link to="/signin" className="text-gray-600 hover:text-indigo-600 p-2 rounded-md text-sm font-medium transition-colors duration-300">
                <LogIn className="h-5 w-5" />
              </Link>
              <Link to="/signup" className="bg-indigo-600 text-white p-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300 ml-1">
                <UserPlus className="h-5 w-5" />
              </Link>
            </div>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6 transition-transform duration-300 transform rotate-180" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 transition-transform duration-300" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              <Home className="inline-block h-5 w-5 mr-1" />
              Home
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              <BookOpen className="inline-block h-5 w-5 mr-1" />
              Courses
            </Link>
            <Link to="/progress" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              <TrendingUp className="inline-block h-5 w-5 mr-1" />
              Progress
            </Link>
            <Link to="/achievements" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              <Trophy className="inline-block h-5 w-5 mr-1" />
              Achievements
            </Link>
            <Link to="/signin" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              <LogIn className="inline-block h-5 w-5 mr-1" />
              Sign In
            </Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300">
              <UserPlus className="inline-block h-5 w-5 mr-1" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} sm:hidden overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            <Home className="inline-block h-5 w-5 mr-1" />
            Home
          </Link>
          <Link to="/courses" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            <BookOpen className="inline-block h-5 w-5 mr-1" />
            Courses
          </Link>
          <Link to="/progress" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            <TrendingUp className="inline-block h-5 w-5 mr-1" />
            Progress
          </Link>
          <Link to="/achievements" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            <Trophy className="inline-block h-5 w-5 mr-1" />
            Achievements
          </Link>
        </div>
      </div>
    </nav>
  );
}