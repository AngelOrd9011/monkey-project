import { Button } from 'primereact/button';
import useAuthenticate from '../hooks/useAuthenticate';
import useProfile from '../hooks/useProfile';
import { Loading } from '../components/layouts/Loading';
import { ErrorMessage } from '../components/layouts/ErrorMessage';

const Admin = () => {
	const { logout } = useAuthenticate();
	const { profile, loading } = useProfile();
	if (loading) return <Loading />;
	if (profile.role !== 'admin') return <ErrorMessage accessDenied />;

	return (
		<>
			<h1>Admin Console</h1>
			<Button className="orange-btn" icon="pi pi-sign-out" label="Cerrar sesión" onClick={() => logout()} />
		</>
	);
};

export default Admin;
