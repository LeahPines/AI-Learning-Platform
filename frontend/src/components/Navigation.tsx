import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { Button } from './ui/button';
import { LogOut, BookOpen } from 'lucide-react';

const Navigation: React.FC = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">LearnAI</span>
          </Link>

          <div className="flex items-center space-x-4">
            {token ? (
              <>
                <span className="text-gray-700">Welcome, {user?.name}</span>
                <Link to="/lesson-result">
                  <Button variant="outline" size="sm">
                    My Lessons
                  </Button>
                </Link>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            {user?.role === 'ADMIN' && (
              <Link to="/admin-dashboard">
                <Button variant="outline" size="sm" className="text-purple-700 border-purple-300">
                  Admin Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
