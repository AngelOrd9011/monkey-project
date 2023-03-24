import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import useLocalStorage from '../hooks/useLocalStorage';
import Home from './Home';
import Catalog from './Catalog';
import Contact from './Contact';
import Cart from './Cart';

const Shop = () => {
	const [routeStored, setRouteStored] = useLocalStorage('MonkeyPage', 'home');

	return (
		<>
			<Header page={routeStored} setPage={setRouteStored} />
			<main className="main-content">
				<div className="grid">
					<div className="col-12 md:col-8 md:col-offset-2">
						{routeStored === 'home' && <Home />}
						{routeStored === 'contact' && <Contact />}
						{(routeStored === 'all' || routeStored === 'male' || routeStored === 'female') && <Catalog catalogType={routeStored} />}
						{routeStored === 'cart' && <Cart />}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Shop;
