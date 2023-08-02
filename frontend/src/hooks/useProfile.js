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
	const headers = { headers: { Authorization: `Bearer ${token}` } };
	const [loadProfile, { refetch: profileRefetch }] = useLazyQuery(QUERY_USER_PROFILE, {
		context: { ...headers },
	});

	const refetch = async () => {
		await profileRefetch()
			.then(({ data, loading }) => {
				setLoading(loading);
				dispatch(setProfile(data.getMe.user));
				return data.getMe.user;
			})
			.catch((e) => {
				setError(e);
			});
	};

	useEffect(() => {
		loadProfile()
			.then(({ data, loading }) => {
				if (!data?.getMe.user) {
					setError(data.getMe.status);
				} else {
					dispatch(setProfile(data.getMe.user));
				}
				setLoading(loading);
			})
			.catch((e) => {
				setError(e);
			});
	}, [loadProfile, dispatch]);

	return { profile, loading, error, refetch, token, headers };
};

export default useProfile;
