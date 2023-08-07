import { useMemo } from 'react';
import useSessionCookies from './useSessionCookies';
import { useMutation, useLazyQuery } from '@apollo/client';
import { MUTATION_LOGIN, MUTATION_SING_UP } from '../apollo/mutations';
import { QUERY_LOGOUT, QUERY_REFRESH_TOKEN } from '../apollo/queries';

const useAuthenticate = () => {
	const { token, logged_in } = useSessionCookies();

	const headers = useMemo(() => {
		let _headers = { headers: { Authorization: `Bearer ${token}` } };
		return _headers;
	}, [token]);

	const [auth] = useMutation(MUTATION_LOGIN);
	const [sing] = useMutation(MUTATION_SING_UP);
	const [out] = useLazyQuery(QUERY_LOGOUT, {
		context: { ...headers },
	});
	const [getToken] = useLazyQuery(QUERY_REFRESH_TOKEN, {
		context: { ...headers },
	});

	const authenticated = useMemo(() => {
		let _authenticated = false;
		if (logged_in) _authenticated = true;
		return _authenticated;
	}, [logged_in]);

	const refreshToken = () => {
		getToken();
	};

	const login = (email, password, showToast) => {
		auth({ variables: { input: { email, password } } })
			.then(({ data }) => {
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
		refreshToken,
		login,
		logout,
		singUp,
		headers,
	};
};

export default useAuthenticate;
