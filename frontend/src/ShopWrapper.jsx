import { useMemo } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import useLocalStorage from './hooks/useLocalStorage';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { Toast } from 'primereact/toast';
import useToast from './hooks/useToast';
import useProfile from './hooks/useProfile';
import { Loading } from './components/layouts/Loading';
import Profile from './pages/Profile';
// import useAuthenticate from './hooks/useAuthenticate';
import { ErrorMessage } from './components/layouts/ErrorMessage';
import { categories } from './app/constants';

const ShopWrapper = () => {
	const [routeStored, setRouteStored] = useLocalStorage('MonkeyPage', 'home');
	const { toast, showToast } = useToast();
	const { loading, error } = useProfile();
	// const { refreshToken } = useAuthenticate();

	// useEffect(() => {
	// 	const verifyToken = setInterval(() => {
	// 		if (profile) refreshToken();
	// 	}, 5000);

	// 	return () => clearInterval(verifyToken);
	// }, [profile]);

	const catalogs = useMemo(() => {
		return Object.keys(categories);
	}, []);

	if (loading) return <Loading />;
	if (error && error === 'not-verified') return <ErrorMessage notVerified />;

	return (
		<>
			<Header page={routeStored} setPage={setRouteStored} showToast={showToast} />
			<Toast ref={toast} />
			<main className="main-content">
				<div className="grid">
					<div className="col-12 md:col-10 md:col-offset-1 lg:col-10 lg:col-offset-1 xl:col-8 xl:col-offset-2">
						{routeStored === 'home' && <Home />}
						{routeStored === 'contact' && <Contact />}
						{catalogs.includes(routeStored) && <Catalog category={routeStored} />}
						{routeStored === 'cart' && <Cart />}
						{routeStored === 'profile' && <Profile setPage={setRouteStored} showToast={showToast} />}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ShopWrapper;
