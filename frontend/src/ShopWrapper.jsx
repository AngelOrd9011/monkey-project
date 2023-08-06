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
import { ErrorMessage } from './components/layouts/ErrorMessage';
import { CATEGORIES, PAGES } from './app/constants';

const ShopWrapper = () => {
	const [routeStored, setRouteStored] = useLocalStorage('MonkeyPage', PAGES.home);
	const { toast, showToast } = useToast();
	const { loading, error } = useProfile();

	const catalogs = Object.keys(CATEGORIES);

	if (loading) return <Loading />;
	if (error && error === 'not-verified') return <ErrorMessage notVerified />;

	return (
		<>
			<Header page={routeStored} setPage={setRouteStored} showToast={showToast} />
			<Toast ref={toast} />
			<main className="main-content">
				<div className="grid">
					<div className="col-12 md:col-10 md:col-offset-1 lg:col-10 lg:col-offset-1 xl:col-8 xl:col-offset-2">
						{routeStored === PAGES.home && <Home />}
						{routeStored === PAGES.contact && <Contact />}
						{catalogs.includes(routeStored) && <Catalog category={routeStored} />}
						{routeStored === PAGES.cart && <Cart />}
						{routeStored === PAGES.profile && <Profile setPage={setRouteStored} showToast={showToast} />}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ShopWrapper;
