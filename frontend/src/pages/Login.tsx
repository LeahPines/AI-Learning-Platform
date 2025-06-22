import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { loginUser, clearError } from '../store/slices/authSlice';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen } from 'lucide-react';
import { fetchUserHistory, submitPrompt } from '@/store/slices/lessonSlice';
import LoginForm from '../components/auth/LoginForm';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, error, token, user } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  useEffect(() => {
    if (token && user) {
      const pendingPrompt = localStorage.getItem('pendingPrompt');
      if (pendingPrompt) {
        const promptData = JSON.parse(pendingPrompt);
        localStorage.removeItem('pendingPrompt');
        dispatch(submitPrompt(promptData)).then(() => {
          dispatch(fetchUserHistory()).then(() => {
            navigate('/lesson-result');
          });
        });
      }
    }
  }, [token, user, navigate, dispatch]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
          <p className="text-gray-600">Sign in to your LearnAI account</p>
        </CardHeader>
        <CardContent>
          <LoginForm
            formData={formData}
            error={error}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;