import logo from '../../assets/images/logo-orange.png';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { LoginDialog } from '../login/LoginDialog';
import { useState } from 'react';
import useAuthenticate from '../../hooks/useAuthenticate';
import useProfile from '../../hooks/useProfile';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROLE, CATEGORIES, PAGES } from '../../app/constants';

const Header = ({ page, setPage, showToast }) => {
	const [show, setShow] = useState(false);
	const [register, setRegister] = useState(false);
	const { authenticated, logout } = useAuthenticate();
	const { profile } = useProfile();
	const location = useLocation();
	const navigate = useNavigate();

	const onHide = () => {
		setShow(false);
		setRegister(false);
	};

	const catalogs = Object.keys(CATEGORIES);

	const shopItems = [
		{
			label: 'Inicio',
			icon: 'pi pi-home',
			command: () => setPage(PAGES.home),
		},
		{
			label: 'Conócenos',
			icon: 'pi pi-users',
			command: () => setPage(PAGES.contact),
		},
		{
			label: 'Catálogos',
			icon: 'pi pi-book',
			items: [
				{
					label: 'Damas',
					command: () => setPage(catalogs[0]),
				},
				{
					label: 'Caballeros',
					command: () => setPage(catalogs[1]),
				},
				{
					label: 'Todo',
					command: () => setPage(catalogs[2]),
				},
			],
		},
		{
			label: 'Carrito de compras',
			icon: 'pi pi-shopping-cart',
			command: () => setPage(PAGES.cart),
		},
		{
			label: 'Administrar sitio',
			icon: 'pi pi-arrow-right-arrow-left',
			visible: authenticated && profile.role === ADMIN_ROLE,
			command: () => {
				setPage(PAGES.home);
				navigate('/admin-console');
			},
		},
	];

	const adminItems = [
		{
			label: 'Inventario',
			icon: 'pi pi-database',
			command: () => setPage(PAGES.stock),
		},
		{
			label: 'Gestión de usuarios',
			icon: 'pi pi-users',
			command: () => setPage(PAGES.users),
		},
		{
			label: 'Dashboard',
			icon: 'pi pi-chart-line',
			command: () => setPage(PAGES.dashboard),
		},
		{
			label: 'Ir a la tienda',
			icon: 'pi pi-arrow-right-arrow-left',
			command: () => {
				setPage(PAGES.home);
				navigate('/');
			},
		},
	];

	const nameTemplate = () => {
		return (
			<div className='monkey-avatar'>
				<div style={{ display: 'inline-flex' }}>
					{profile.photo && <Avatar image={profile?.photo} shape='circle' alt='avatar' />}
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
					{ label: 'Mi perfil', icon: 'pi pi-user', command: () => setPage(PAGES.profile) },
					{
						label: 'Cerrar sesión',
						icon: 'pi pi-sign-out',
						command: () => {
							logout();
							setPage(PAGES.home);
						},
					},
				],
			});
		else menu.push({ label: 'Iniciar sesión', icon: 'pi pi-sign-in', command: () => setShow(true) });
		return menu;
	};

	const img = <img src={logo} className='app-logo' alt='logo' />;

	return (
		<>
			<header>
				<div className='app-header'>
					<Menubar className='menu-header' model={menu()} end={img} />
				</div>
				{(page === PAGES.home || page === PAGES.contact) && <div className='image-cover'></div>}
			</header>
			<LoginDialog show={show} onHide={onHide} showToast={showToast} register={register} setRegister={setRegister} />
		</>
	);
};

export default Header;
