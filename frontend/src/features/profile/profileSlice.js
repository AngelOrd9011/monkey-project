import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: null,
	email: null,
	photo: null,
	role: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
			state.role = action.payload.role;
		},
	},
});

export const { setProfile } = profileSlice.actions;

export const getProfile = (state) => state.profile;

export default profileSlice.reducer;
