import { UserCircle, BookOpen, Trophy, TrendingUp, LogIn, UserPlus, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">LearnHub</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              <Home className="inline-block h-5 w-5 mr-1" />
              Home
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              <BookOpen className="inline-block h-5 w-5 mr-1" />
              Courses
            </Link>
            <Link to="/progress" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              <TrendingUp className="inline-block h-5 w-5 mr-1" />
              Progress
            </Link>
            <Link to="/achievements" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              <Trophy className="inline-block h-5 w-5 mr-1" />
              Achievements
            </Link>
            <Link to="/signin" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              <LogIn className="inline-block h-5 w-5 mr-1" />
              Sign In
            </Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              <UserPlus className="inline-block h-5 w-5 mr-1" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}