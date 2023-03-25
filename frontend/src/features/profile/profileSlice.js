import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: null,
	email: null,
	photo: null,
	role: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
			state.role = action.payload.role;
		},
	},
});

export const { setProfile } = profileSlice.actions;

export const getProfile = (state) => state.profile;

export default profileSlice.reducer;
