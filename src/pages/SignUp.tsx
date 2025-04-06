import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (name && email && password) {
      navigate('/signin'); // Navigate to sign in page after successful sign up
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-4 sm:py-6 md:py-8 px-3 sm:px-4 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-1 sm:mt-2 md:mt-4 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-1 sm:mt-2 text-center text-xs sm:text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-3 sm:mt-4 md:mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-3 sm:py-4 md:py-6 px-3 sm:px-4 shadow sm:rounded-lg sm:px-8 md:px-10">
          <form className="space-y-2 sm:space-y-3 md:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700">
                Full name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-6 sm:pl-7 md:pl-9 text-xs sm:text-sm border-gray-300 rounded-md"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-6 sm:pl-7 md:pl-9 text-xs sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                  <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-6 sm:pl-7 md:pl-9 text-xs sm:text-sm border-gray-300 rounded-md"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-1.5 sm:py-2 px-3 sm:px-4 border border-transparent rounded-md shadow-sm text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}