import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { registerUser, clearError } from '../store/slices/authSlice';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen } from 'lucide-react';
import { fetchUserHistory, submitPrompt } from '@/store/slices/lessonSlice';
import RegisterForm from '../components/auth/RegisterForm';

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, error, token, user } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

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

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.password) errors.password = 'Password is required';
    else if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(registerUser({
      name: formData.name,
      phone: formData.phone,
      password: formData.password,
    }));
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
          <CardTitle className="text-2xl font-bold text-gray-900">Join LearnAI</CardTitle>
          <p className="text-gray-600">Create your account to start learning</p>
        </CardHeader>
        <CardContent>
          <RegisterForm
            formData={formData}
            validationErrors={validationErrors}
            error={error}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;