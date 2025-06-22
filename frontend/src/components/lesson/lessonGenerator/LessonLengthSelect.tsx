import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

const LessonLengthSelect = ({ value, onChange, error }) => (
  <div>
    <Label htmlFor="length" className="text-sm font-medium text-gray-700">
      Lesson Length *
    </Label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={error ? 'border-red-500' : ''}>
        <SelectValue placeholder="Select length" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Short">Short (5-10 minutes)</SelectItem>
        <SelectItem value="Medium">Medium (15-20 minutes)</SelectItem>
        <SelectItem value="Long">Long (30+ minutes)</SelectItem>
      </SelectContent>
    </Select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default LessonLengthSelect;