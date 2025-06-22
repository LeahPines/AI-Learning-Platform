import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import lessonSlice from './slices/lessonSlice';
import adminSlice from './slices/adminSlice';
import categorySlice from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    lesson: lessonSlice,
    admin: adminSlice,
    categories: categorySlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
