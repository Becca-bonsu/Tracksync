import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import { CubeTransparentIcon } from '@heroicons/react/24/solid';

function Login({ onLoginSuccess }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Simulated credentials check
      if (values.email === 'admin@tracksync.com' && values.password === 'admin123') {
        // Store auth state
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ email: values.email }));
        
        // Update auth state and redirect
        onLoginSuccess();
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred during login');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center space-x-2 mb-8">
          <CubeTransparentIcon className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">TrackSync</span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
        
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;