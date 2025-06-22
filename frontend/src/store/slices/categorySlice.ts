import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../services/apiService';

export interface Category {
  id: string;
  name: string;
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}

interface CategoryState {
  categories: Category[];
  subcategories: Subcategory[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  subcategories: [],
  isLoading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    return await apiService.getCategories();
  }
);

export const fetchSubcategories = createAsyncThunk(
  'categories/fetchSubcategories',
  async (categoryId: string) => {
    return await apiService.getSubcategories(categoryId);
  }
);

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (name: string) => {
    return await apiService.addCategory(name);
  }
);

export const addSubcategory = createAsyncThunk(
  'categories/addSubcategory',
  async ({ categoryId, name }: { categoryId: string; name: string }) => {
    return await apiService.addSubcategory(categoryId, name);
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    clearCategoryError: (state) => {
      state.error = null;
    },
    clearSubcategories: (state) => {
      state.subcategories = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      })
      // Fetch subcategories
      .addCase(fetchSubcategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSubcategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch subcategories';
      })
      // Add category
      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to add category';
      })
      // Add subcategory
      .addCase(addSubcategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addSubcategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subcategories.push(action.payload);
      })
      .addCase(addSubcategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to add subcategory';
      });
  },
});

export const { clearCategoryError, clearSubcategories } = categorySlice.actions;
export default categorySlice.reducer;