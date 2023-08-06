import { useMemo } from 'react';
import Cookies from 'js-cookie';

const useSessionCookies = () => {
	const session = useMemo(() => {
		let token = Cookies.get('access_token');
		let logged_in = Cookies.get('access_token');
		let refresh_token = Cookies.get('refresh_token');
		let _session = { token, logged_in, refresh_token };
		return _session;
	}, []);

	return session;
};

export default useSessionCookies;
