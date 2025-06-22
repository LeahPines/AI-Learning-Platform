import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';

const PromptTextarea = ({ value, onChange, error }) => (
  <div>
    <Label htmlFor="customPrompt" className="text-sm font-medium text-gray-700">
      Prompt Customization *
    </Label>
    <Textarea
      id="customPrompt"
      placeholder="Add any specific requirements or focus areas..."
      value={value}
      onChange={onChange}
      className="mt-1"
      rows={3}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default PromptTextarea;