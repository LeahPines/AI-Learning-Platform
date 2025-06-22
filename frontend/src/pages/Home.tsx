import React from 'react';
import About from '../components/home/AboutSection';
import GenerateLessonCTA from '@/components/home/GenerateLessonCTA';

const Home: React.FC = () => {

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Learning
            <span className="block text-yellow-300">Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Transform any topic into personalized lessons with our advanced AI.
            Choose your subject, customize your learning experience, and get instant results.
          </p>
          <GenerateLessonCTA label='Start Learning Now' />
        </div>
      </section>

      <About />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Dive In?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Generate your first lesson in just a few clicks. It's quick, easy, and tailored just for you.
        </p>
        <GenerateLessonCTA label='Generate a Lesson' />
      </div>
    </div>
  );
};

export default Home;

