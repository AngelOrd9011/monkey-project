import { Button } from 'primereact/button';
import useAuthenticate from '../hooks/useAuthenticate';

const Admin = () => {
	const { logout } = useAuthenticate();
	return (
		<>
			<h1>Admin Console</h1>
			<Button className="orange-btn" icon="pi pi-sign-out" label="Cerrar sesión" onClick={() => logout()} />
		</>
	);
};

export default Admin;
