import CategorySelect from './CategorySelect';
import SubcategorySelect from './SubCategorySelect';
import LessonLengthSelect from './LessonLengthSelect';
import LessonDepthSelect from './LessonDepthSelect';
import ExamplesSelect from './ExamplesSelect';
import PromptTextarea from './PromptTextArea';
import { Button } from '../../ui/button';
import { ArrowRight } from 'lucide-react';

const LessonForm = ({ formData, setFormData, errors, categories, subcategories, isLoading, onSubmit, }) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <CategorySelect
        value={formData.categoryId}
        onChange={value => setFormData(prev => ({ ...prev, categoryId: value }))}
        categories={categories}
        error={errors.categoryId}
      />
      <SubcategorySelect
        value={formData.subCategoryId}
        onChange={value => setFormData(prev => ({ ...prev, subCategoryId: value }))}
        subcategories={subcategories}
        disabled={!formData.categoryId}
        error={errors.subCategoryId}
      />
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <LessonLengthSelect
        value={formData.length}
        onChange={value => setFormData(prev => ({ ...prev, length: value }))}
        error={errors.length}
      />
      <LessonDepthSelect
        value={formData.depth}
        onChange={value => setFormData(prev => ({ ...prev, depth: value }))}
        error={errors.depth}
      />
    </div>
    <ExamplesSelect
      value={formData.examples}
      onChange={value => setFormData(prev => ({ ...prev, examples: value }))}
      error={errors.examples}
    />
    <PromptTextarea
      value={formData.customPrompt}
      onChange={e => setFormData(prev => ({ ...prev, customPrompt: e.target.value }))}
      error={errors.customPrompt}
    />
    <Button
      type="submit"
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
    >
      {isLoading ? 'Generating Lesson...' : 'Generate My Lesson'}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </form>
);

export default LessonForm;