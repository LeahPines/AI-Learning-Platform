import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Clock } from 'lucide-react';
import UserHistory from '@/components/history/UserHistory';

const LearningHistoryPanel = ({ promptHistory }) => (
  <Card className="shadow-lg">
    <CardHeader>
      <CardTitle className="flex items-center">
        <Clock className="h-5 w-5 mr-2" />
        Learning History
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6" >
      {promptHistory.length > 0 ? (
        <div className="space-y-4">
          {promptHistory.slice(0, 10).map((prompt) => (
            <UserHistory item={prompt} key={prompt.id} />
          ))}
          {promptHistory.length > 10 && (
            <p className="text-sm text-gray-500 text-center">
              + {promptHistory.length - 10} more lessons
            </p>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <Clock className="h-12 w-12 mx-auto mb-3 text-gray-400" />
          <p>No learning history yet</p>
          <p className="text-sm">Start generating lessons to build your history</p>
        </div>
      )}
    </CardContent>
  </Card>
);

export default LearningHistoryPanel;