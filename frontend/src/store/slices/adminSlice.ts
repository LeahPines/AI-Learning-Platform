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

interface User {
    id: string;
    name: string;
    phone: string;
    role: string;
    prompts: Prompt[];
}

interface AdminState {
    allUsers: User[];
    allUsersHistory: User[];
    selectedUserHistory: Prompt[];
    addCategoryResult: any | null;
    addSubcategoryResult: any | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AdminState = {
    allUsers: [],
    allUsersHistory: [],
    selectedUserHistory: [],
    addCategoryResult: null,
    addSubcategoryResult: null,
    isLoading: false,
    error: null,
};

export const fetchAllUsers = createAsyncThunk(
    'admin/fetchAllUsers',
    async () => {
        return await apiService.getAllUsers();
    }
);

export const fetchAllUsersHistory = createAsyncThunk(
    'admin/fetchAllUsersHistory',
    async () => {
        return await apiService.getAllUsersWithHistory();
    }
);

export const fetchUserHistoryByID = createAsyncThunk(
    'admin/fetchUserHistoryByID',
    async (userId: string) => {
        return await apiService.getUserHistoryByID(userId);
    }
);

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        clearAdminError: (state) => {
            state.error = null;
        },
        clearSelectedUserHistory: (state) => {
            state.selectedUserHistory = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch all users
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allUsers = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch users';
            })
            // Fetch all users history
            .addCase(fetchAllUsersHistory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAllUsersHistory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allUsersHistory = action.payload;
            })
            .addCase(fetchAllUsersHistory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch all users history';
            })
            // Fetch user history by ID
            .addCase(fetchUserHistoryByID.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserHistoryByID.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedUserHistory = action.payload;
            })
            .addCase(fetchUserHistoryByID.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch user history';
            })
           
    },
});

export const {
    clearAdminError,
    clearSelectedUserHistory,
} = adminSlice.actions;

export default adminSlice.reducer;