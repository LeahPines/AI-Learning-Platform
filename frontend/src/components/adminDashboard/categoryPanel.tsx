import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { fetchCategories, addCategory, addSubcategory } from '../../store/slices/categorySlice';
import { useToast } from '../../hooks/use-toast';

const CategoryManagementPanel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const categories = useSelector((state: RootState) => state.categories.categories);

  const [newCategory, setNewCategory] = useState('');
  const [newSubcategory, setNewSubcategory] = useState('');
  const [selectedCategoryForSub, setSelectedCategoryForSub] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      await dispatch(addCategory(newCategory)).unwrap();
      setNewCategory('');
      toast({
        title: "Success",
        description: "Category added successfully",
      });
      dispatch(fetchCategories());
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add category",
        variant: "destructive",
      });
    }
  };

  const handleAddSubcategory = async () => {
    if (!newSubcategory.trim() || !selectedCategoryForSub) return;
    try {
      await dispatch(addSubcategory({ categoryId: selectedCategoryForSub, name: newSubcategory })).unwrap();
      setNewSubcategory('');
      setSelectedCategoryForSub('');
      toast({
        title: "Success",
        description: "Subcategory added successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add subcategory",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>Category Name</Label>
            <Input
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
              placeholder="Enter category name"
            />
            <Button onClick={handleAddCategory} className="w-full mt-2">
              Add Category
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add New Subcategory</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>Parent Category</Label>
            <Select value={selectedCategoryForSub} onValueChange={setSelectedCategoryForSub}>
              <SelectTrigger>
                <SelectValue placeholder="Select parent category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <br />
            <Label className="mt-2">Subcategory Name</Label>
            <Input
              value={newSubcategory}
              onChange={e => setNewSubcategory(e.target.value)}
              placeholder="Enter subcategory name"
            />
            <Button onClick={handleAddSubcategory} className="w-full mt-2">
              Add Subcategory
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Existing Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {categories.map(category => (
            <div key={category.id} className="p-2 border-b">
              {category.name}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default CategoryManagementPanel;