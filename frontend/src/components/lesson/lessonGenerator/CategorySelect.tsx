import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

const CategorySelect = ({ value, onChange, categories, error }) => (
  <div>
    <Label htmlFor="category" className="text-sm font-medium text-gray-700">
      Category *
    </Label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={error ? 'border-red-500' : ''}>
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map(category => (
          <SelectItem key={category.id} value={category.id}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
export default CategorySelect;