import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { BookOpen } from 'lucide-react';

const LessonCard = ({ lesson }) => (
  <Card className="shadow-lg">
    <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <CardTitle className="flex items-center">
        <BookOpen className="h-6 w-6 mr-2" />
        Your Latest Lesson 
      </CardTitle>
    </CardHeader>
    <CardContent className="p-8">
      <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
        {typeof lesson === 'string'
          ? lesson
          : (
            <>
              <div className="mb-4">
                <strong>{lesson.prompt?.split(' ').slice(2).join(' ').trim()}:</strong>
              </div>
              <div>
                <div>{lesson?.response}</div>
              </div>
            </>
          )}
      </div>
    </CardContent>
  </Card>
);

export default LessonCard;