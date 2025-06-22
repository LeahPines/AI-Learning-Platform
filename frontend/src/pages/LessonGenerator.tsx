import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../store/store';
import { submitPrompt } from '../store/slices/lessonSlice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchCategories, fetchSubcategories } from '../store/slices/categorySlice';
import LessonForm from '../components/lesson/lessonGenerator/LessonForm';

const LessonGenerator: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const categories = useSelector((state: RootState) => state.categories.categories);
    const subcategories = useSelector((state: RootState) => state.categories.subcategories);
    const { token } = useSelector((state: RootState) => state.auth);
    const isLoading = useSelector((state: RootState) => state.lesson.isLoading);

    const [formData, setFormData] = useState({
        categoryId: '',
        subCategoryId: '',
        length: '',
        depth: '',
        examples: '',
        customPrompt: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (formData.categoryId) {
            dispatch(fetchSubcategories(formData.categoryId));
            setFormData(prev => ({ ...prev, subCategoryId: '' }));
        }
    }, [formData.categoryId, dispatch]);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.categoryId) newErrors.categoryId = 'Category is required';
        if (!formData.subCategoryId) newErrors.subCategoryId = 'Subcategory is required';
        if (!formData.length) newErrors.length = 'Lesson length is required';
        if (!formData.depth) newErrors.depth = 'Lesson depth is required';
        if (!formData.examples) newErrors.examples = 'Examples preference is required';
        if (!formData.customPrompt) newErrors.customPrompt = 'Prompt is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        const selectedSubcategory = subcategories.find(s => s.id === formData.subCategoryId);
        const combinedPrompt = `Create a ${formData.length}, ${formData.depth} lesson on ${selectedSubcategory?.name} ${formData.examples === 'yes' ? 'with examples' : 'without examples'}. ${formData.customPrompt || ''}`.trim();
        const apiPayload = {
            categoryId: formData.categoryId,
            subCategoryId: formData.subCategoryId,
            prompt: combinedPrompt,
        };
        if (!token) {
            localStorage.setItem('pendingPrompt', JSON.stringify(apiPayload));
            navigate('/login');
            return;
        }
        try {
            await dispatch(submitPrompt(apiPayload));
            navigate('/lesson-result');
        } catch (error) {
            console.error('Error submitting prompt:', error);
        }
    };

    return (
        <div>
            <section id="lesson-form" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Create Your Lesson</h2>
                        <p className="text-xl text-gray-600">Fill out the form below to generate your personalized AI lesson</p>
                    </div>
                    <Card className="shadow-xl border-0">
                        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            <CardTitle className="text-2xl text-center">Lesson Generator</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8" >
                            <LessonForm
                                formData={formData}
                                setFormData={setFormData}
                                errors={errors}
                                categories={categories}
                                subcategories={subcategories}
                                isLoading={isLoading}
                                onSubmit={handleSubmit}
                            />
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default LessonGenerator;