import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

const SubcategorySelect = ({ value, onChange, subcategories, disabled, error }) => (
  <div>
    <Label htmlFor="subcategory" className="text-sm font-medium text-gray-700">
      Subcategory *
    </Label>
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className={error ? 'border-red-500' : ''}>
        <SelectValue placeholder="Select a subcategory" />
      </SelectTrigger>
      <SelectContent>
        {subcategories.map(subcategory => (
          <SelectItem key={subcategory.id} value={subcategory.id}>
            {subcategory.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default SubcategorySelect;