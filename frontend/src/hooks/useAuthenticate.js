import { useMemo } from 'react';
import useSessionStorage from './useSessionStorage';
import { useMutation, useLazyQuery } from '@apollo/client';
import { MUTATION_LOGIN, MUTATION_SINGUP } from '../apollo/mutations';
import { QUERY_LOGOUT } from '../apollo/queries';

const useAuthenticate = () => {
	const [token, setToken] = useSessionStorage('token', '');
	const [auth] = useMutation(MUTATION_LOGIN);
	const [sing] = useMutation(MUTATION_SINGUP);
	const [out] = useLazyQuery(QUERY_LOGOUT, {
		context: {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	});

	const authenticated = useMemo(() => {
		let _authenticated = false;
		if (token) _authenticated = true;
		return _authenticated;
	}, [token]);

	const login = (email, password, showToast) => {
		auth({ variables: { input: { email, password } } })
			.then(({ data }) => {
				setToken(data.loginUser.access_token);
				window.location.reload();
			})
			.catch((e) => {
				let error = JSON.parse(JSON.stringify(e));
				showToast('error', 'Oops!', error.message);
			});
	};

	const logout = () => {
		out()
			.then(() => {
				setToken(null);
				window.sessionStorage.clear();
				window.location.reload();
			})
			.catch((e) => console.log(e));
	};

	const singUp = (name, email, password, passwordConfirm, showToast) => {
		sing({ variables: { input: { name, email, password, passwordConfirm } } })
			.then(({ data }) => {
				if (data.signupUser.status === 'success') {
					login(email, password, showToast);
				}
			})
			.catch((e) => {
				let error = JSON.parse(JSON.stringify(e));
				showToast('error', 'Oops!', error.message);
			});
	};

	return {
		authenticated,
		login,
		logout,
		singUp,
	};
};

export default useAuthenticate;
