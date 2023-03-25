import { useLazyQuery } from '@apollo/client';
import { QUERY_USER_PROFILE } from '../apollo/queries';
import useSessionStorage from './useSessionStorage';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile, getProfile } from '../features/profile/profileSlice';

const useProfile = () => {
	const profile = useSelector(getProfile);
	const dispatch = useDispatch();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [token] = useSessionStorage('token', '');
	const [loadProfile] = useLazyQuery(QUERY_USER_PROFILE, {
		context: {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	});

	useEffect(() => {
		loadProfile()
			.then(({ data, loading }) => {
				setLoading(loading);
				dispatch(setProfile(data.getMe.user));
			})
			.catch((e) => {
				setError(e);
			});
	}, [loadProfile, dispatch]);

	return { profile, loading, error };
};

export default useProfile;
