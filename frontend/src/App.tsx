
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LessonResult from './pages/LessonResult';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import Prompt from './pages/LessonGenerator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prompt" element={<Prompt/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/lesson-result" 
                element={
                  <ProtectedRoute>
                    <LessonResult />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin-dashboard" 
                element={
                  <ProtectedRoute adminOnly>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </Provider>
  );
};

export default App;
