import { configureStore } from '@reduxjs/toolkit';
import profileSlice from '../features/profile/profileSlice';

export const store = configureStore({
	reducer: {
		profile: profileSlice,
	},
});
