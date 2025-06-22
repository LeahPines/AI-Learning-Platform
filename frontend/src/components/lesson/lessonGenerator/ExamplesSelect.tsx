import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

const ExamplesSelect = ({ value, onChange, error }) => (
  <div>
    <Label htmlFor="examples" className="text-sm font-medium text-gray-700">
      Include Examples *
    </Label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={error ? 'border-red-500' : ''}>
        <SelectValue placeholder="Include examples?" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="yes">Yes, include examples</SelectItem>
        <SelectItem value="no">No examples needed</SelectItem>
      </SelectContent>
    </Select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default ExamplesSelect;