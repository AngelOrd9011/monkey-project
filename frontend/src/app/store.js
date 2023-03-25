import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileSlice from '../features/profile/profileSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		profile: profileSlice,
	},
});
