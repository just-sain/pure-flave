import { configureStore } from '@reduxjs/toolkit';
import { appReducer, appSlice } from './slice/appSlice';

// some default interfaces for statement
export interface IAsyncThunkState {
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: string;
}

// store
export const store = configureStore({
	reducer: {
		[appSlice.name]: appReducer
	}
});

// types
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
