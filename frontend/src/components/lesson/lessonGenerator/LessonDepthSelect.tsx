import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

const LessonDepthSelect = ({ value, onChange, error }) => (
  <div>
    <Label htmlFor="depth" className="text-sm font-medium text-gray-700">
      Difficulty Level *
    </Label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={error ? 'border-red-500' : ''}>
        <SelectValue placeholder="Select difficulty" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Beginner">Beginner</SelectItem>
        <SelectItem value="Intermediate">Intermediate</SelectItem>
        <SelectItem value="Advanced">Advanced</SelectItem>
      </SelectContent>
    </Select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default LessonDepthSelect;