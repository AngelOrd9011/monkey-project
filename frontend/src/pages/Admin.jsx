import useProfile from '../hooks/useProfile';
import { Loading } from '../components/layouts/Loading';
import { ErrorMessage } from '../components/layouts/ErrorMessage';
import Header from '../components/layouts/Header';
import useLocalStorage from '../hooks/useLocalStorage';
import Stock from './Stock';
import Profile from './Profile';

const Admin = () => {
	const [routeStored, setRouteStored] = useLocalStorage('MonkeyConsole', 'stock');
	const { profile, loading } = useProfile();
	if (loading) return <Loading />;
	if (profile.role !== 'admin') return <ErrorMessage accessDenied />;

	return (
		<div onMouseMove={() => console.log('hola')}>
			<Header page={routeStored} setPage={setRouteStored} />
			<main className="main-content">
				<div className="grid">
					<div className="col-12 md:col-8 md:col-offset-2">
						{routeStored === 'stock' && <Stock />}
						{routeStored === 'profile' && <Profile setPage={setRouteStored} />}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Admin;
