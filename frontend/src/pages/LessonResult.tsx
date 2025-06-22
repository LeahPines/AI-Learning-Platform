import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchUserHistory } from '../store/slices/lessonSlice';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import LessonCard from '../components/lesson/lessonResult/LessonCard';
import NoLessonCard from '../components/lesson/lessonResult/NoLessonCard';
import LearningHistoryCard from '../components/lesson/lessonResult/LearningHistoryPanel';

const LessonResult: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentLesson, promptHistory } = useSelector((state: RootState) => state.lesson);
  const lessonToShow = currentLesson || (promptHistory.length > 0 ? promptHistory[0] : null);

  useEffect(() => {
    dispatch(fetchUserHistory());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Your Learning Dashboard</h1>
          <p className="text-gray-600 mt-2">View your latest lesson and learning history</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {lessonToShow ? (
              <LessonCard lesson={lessonToShow} />
            ) : (
              <NoLessonCard />
            )}
          </div>
          <div>
            <LearningHistoryCard promptHistory={promptHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonResult;