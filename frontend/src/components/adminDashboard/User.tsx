import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

const User = ({ user, isSelected, onSelect }) => (
    <div
        className={`flex justify-between items-center mb-2 p-2 rounded cursor-pointer ${isSelected ? 'bg-blue-100' : ''}`}
        onClick={() => onSelect(user.id)}
    >
        <div>
            <div>{user.name}</div>
            <div className="text-xs text-gray-500">{user.phone}</div>
        </div>
        <Button size="sm" variant="outline" onClick={e => {
            e.stopPropagation();
            onSelect(user.id);
        }}>
            <Eye className="h-4 w-4 mr-1" />
            View History
        </Button>
    </div>
);

export default User;