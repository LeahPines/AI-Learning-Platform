import { Card, CardContent } from '../../ui/card';
import { BookOpen } from 'lucide-react';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';

const NoLessonCard = () => (
  <Card className="shadow-lg">
    <CardContent className="p-8 text-center">
      <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Current Lesson</h3>
      <p className="text-gray-600 mb-6">
        Generate your first AI-powered lesson to get started with personalized learning.
      </p>
      <Link to="/">
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Create Your First Lesson
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default NoLessonCard;