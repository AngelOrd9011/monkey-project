import logo from '../../assets/images/logo-orange.png';
import { Menubar } from 'primereact/menubar';

const Header = ({ page, setPage }) => {
	const items = [
		{
			label: 'Inicio',
			icon: 'pi pi-home',
			command: () => {
				setPage('home');
			},
		},
		{
			label: 'Conócenos',
			icon: 'pi pi-users',
			command: () => {
				setPage('contact');
			},
		},
		{
			label: 'Catálogos',
			icon: 'pi pi-book',
			items: [
				{
					label: 'Damas',
					command: () => {
						setPage('female');
					},
				},
				{
					label: 'Caballeros',
					command: () => {
						setPage('male');
					},
				},
				{
					label: 'Todo',
					command: () => {
						setPage('all');
					},
				},
			],
		},
		{
			label: 'Carrito de compra',
			icon: 'pi pi-shopping-cart',
			command: () => {
				setPage('cart');
			},
		},
	];

	const end = <img src={logo} className="app-logo" alt="logo" />;
	return (
		<header>
			<div className="app-header">
				<Menubar className="menu-header" model={items} end={end} />
			</div>
			{(page === 'home' || page === 'contact') && <div className="image-cover"></div>}
		</header>
	);
};

export default Header;
