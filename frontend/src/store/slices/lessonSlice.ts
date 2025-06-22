import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../services/apiService';

interface Prompt {
  id: string;
  prompt: string;
  response: string;
  categoryId: string;
  subCategoryId: string;
  createdAt: string;
}

interface LessonState {
  currentLesson: string | null;
  promptHistory: Prompt[];
  isLoading: boolean;
  error: string | null;
}

const initialState: LessonState = {
  currentLesson: null,
  promptHistory: [],
  isLoading: false,
  error: null,
};


export const submitPrompt = createAsyncThunk(
  'lesson/submitPrompt',
  async (data: { categoryId: string; subCategoryId: string; prompt: string }) => {
    return await apiService.submitPrompt(data);
  }
);

export const fetchUserHistory = createAsyncThunk(
  'lesson/fetchUserHistory',
  async () => {
    return await apiService.getUserHistory();
  }
);

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    clearCurrentLesson: (state) => {
      state.currentLesson = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitPrompt.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitPrompt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentLesson = action.payload.response;
        state.promptHistory = action.payload; 
      })
      .addCase(submitPrompt.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to generate lesson';
      })
      .addCase(fetchUserHistory.fulfilled, (state, action) => {
        state.promptHistory = action.payload;
      });
  },
});

export const { clearCurrentLesson, clearError } = lessonSlice.actions;
export default lessonSlice.reducer;