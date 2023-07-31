import { useEffect } from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import useLocalStorage from '../hooks/useLocalStorage';
import Home from './Home';
import Catalog from './Catalog';
import Contact from './Contact';
import Cart from './Cart';
import { Toast } from 'primereact/toast';
import useToast from '../hooks/useToast';
import useProfile from '../hooks/useProfile';
import { Loading } from '../components/layouts/Loading';
import Profile from './Profile';
import useAuthenticate from '../hooks/useAuthenticate';
import { ErrorMessage } from '../components/layouts/ErrorMessage';

const Shop = () => {
	const [routeStored, setRouteStored] = useLocalStorage('MonkeyPage', 'home');
	const { toast, showToast } = useToast();
	const { loading, error, profile } = useProfile();
	// const { refreshToken } = useAuthenticate();

	// useEffect(() => {
	// 	const verifyToken = setInterval(() => {
	// 		if (profile) refreshToken();
	// 	}, 5000);

	// 	return () => clearInterval(verifyToken);
	// }, [profile]);

	if (loading) return <Loading />;
	if (error && error === 'not-verified') return <ErrorMessage notVerified />;

	return (
		<>
			<Header page={routeStored} setPage={setRouteStored} showToast={showToast} />
			<Toast ref={toast} />
			<main className="main-content">
				<div className="grid">
					<div className="col-12 md:col-8 md:col-offset-2">
						{routeStored === 'home' && <Home />}
						{routeStored === 'contact' && <Contact />}
						{(routeStored === 'all' || routeStored === 'male' || routeStored === 'female') && <Catalog catalogType={routeStored} />}
						{routeStored === 'cart' && <Cart />}
						{routeStored === 'profile' && <Profile setPage={setRouteStored} showToast={showToast} />}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Shop;
