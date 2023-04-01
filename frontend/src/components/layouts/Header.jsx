import logo from '../../assets/images/logo-orange.png';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { LoginDialog } from '../login/LoginDialog';
import { useState } from 'react';
import useAuthenticate from '../../hooks/useAuthenticate';
import useProfile from '../../hooks/useProfile';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = ({ page, setPage, showToast }) => {
	const [show, setShow] = useState(false);
	const { authenticated, logout } = useAuthenticate();
	const { profile } = useProfile();
	const location = useLocation();
	const navigate = useNavigate();

	const onHide = () => {
		setShow(false);
	};

	const shopItems = [
		{
			label: 'Inicio',
			icon: 'pi pi-home',
			command: () => setPage('home'),
		},
		{
			label: 'Conócenos',
			icon: 'pi pi-users',
			command: () => setPage('contact'),
		},
		{
			label: 'Catálogos',
			icon: 'pi pi-book',
			items: [
				{
					label: 'Damas',
					command: () => setPage('female'),
				},
				{
					label: 'Caballeros',
					command: () => setPage('male'),
				},
				{
					label: 'Todo',
					command: () => setPage('all'),
				},
			],
		},
		{
			label: 'Carrito de compra',
			icon: 'pi pi-shopping-cart',
			command: () => setPage('cart'),
		},
	];

	const adminItems = [
		{
			label: 'Inventario',
			icon: 'pi pi-database',
			command: () => setPage('stock'),
		},
		{
			label: 'Gestión de usuarios',
			icon: 'pi pi-users',
			command: () => setPage('users'),
		},
		{
			label: 'Dashboard',
			icon: 'pi pi-chart-line',
			command: () => setPage('dashboard'),
		},
		{
			label: 'Ir a la tienda',
			icon: 'pi pi-arrow-right-arrow-left',
			command: () => navigate('/'),
		},
	];

	const nameTemplate = () => {
		return (
			<div className="monkey-avatar">
				<div style={{ display: 'inline-flex' }}>
					{profile.photo && <Avatar image={profile?.photo} shape="circle" alt="avatar" />}
					<span style={{ margin: '0.5rem 0 0.5rem 0.5rem' }}>{profile.name}</span>
				</div>
			</div>
		);
	};

	const menu = () => {
		let menu = location.pathname === '/admin-console' ? [...adminItems] : [...shopItems];
		if (authenticated)
			menu.push({
				label: nameTemplate(),
				items: [
					{ label: 'Mi perfil', icon: 'pi pi-user', command: () => setPage('profile') },
					{
						label: 'Cerrar sesión',
						icon: 'pi pi-sign-out',
						command: () => {
							logout();
							setPage('home');
						},
					},
				],
			});
		else menu.push({ label: 'Iniciar sesión', icon: 'pi pi-sign-in', command: () => setShow(true) });
		return menu;
	};

	const img = <img src={logo} className="app-logo" alt="logo" />;

	return (
		<>
			<header>
				<div className="app-header">
					<Menubar className="menu-header" model={menu()} end={img} />
				</div>
				{(page === 'home' || page === 'contact') && <div className="image-cover"></div>}
			</header>
			<LoginDialog show={show} onHide={onHide} showToast={showToast} />
		</>
	);
};

export default Header;
