import useProfile from './hooks/useProfile';
import { Loading } from './components/layouts/Loading';
import { ErrorMessage } from './components/layouts/ErrorMessage';
import Header from './components/layouts/Header';
import useLocalStorage from './hooks/useLocalStorage';
import Stock from './pages/Stock';
import Profile from './pages/Profile';
import { ADMIN_ROLE, PAGES } from './app/constants';

const AdminWrapper = () => {
	const [routeStored, setRouteStored] = useLocalStorage('MonkeyPage', PAGES.stock);
	const { profile, loading } = useProfile();

	if (loading) return <Loading />;
	if (profile.role !== ADMIN_ROLE) return <ErrorMessage accessDenied />;

	return (
		<>
			<Header page={routeStored} setPage={setRouteStored} />
			<main className="main-content">
				<div className="grid">
					<div className="col-12 md:col-10 md:col-offset-1 lg:col-10 lg:col-offset-1 xl:col-8 xl:col-offset-2">
						{routeStored === PAGES.stock && <Stock />}
						{routeStored === PAGES.profile && <Profile setPage={setRouteStored} />}
					</div>
				</div>
			</main>
		</>
	);
};

export default AdminWrapper;
