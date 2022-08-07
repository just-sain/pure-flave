import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeModeType } from '../../interface/interfaces';
import { AppState } from '../store';

interface IInitialState {
	themeMode: ThemeModeType;
}

const initialState: IInitialState = {
	themeMode: 'light'
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setThemeMode: (state, action: PayloadAction<ThemeModeType>) => {
			state.themeMode = action.payload;
			localStorage.setItem('themeMode', action.payload);
		}
	}
});

export const appActions = appSlice.actions;

export const selectThemeMode = (state: AppState) => state.app.themeMode;

export const appReducer = appSlice.reducer;
