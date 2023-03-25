import logo from '../../assets/images/logo-orange.png';
import { Menubar } from 'primereact/menubar';
import useToast from '../../hooks/useToast';
import { LoginDialog } from '../login/LoginDialog';
import { useState } from 'react';
import { Toast } from 'primereact/toast';
import useAuthenticate from '../../hooks/useAuthenticate';
import useProfile from '../../hooks/useProfile';

const Header = ({ page, setPage }) => {
	const { toast, showToast } = useToast();
	const [show, setShow] = useState(false);
	const { authenticated, logout } = useAuthenticate();
	const { profile } = useProfile();

	const onHide = () => {
		setShow(false);
	};

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

	const menu = () => {
		let menu = [...items];
		if (authenticated)
			menu.push({
				label: profile.name,
				icon: 'pi pi-user',
				items: [{ label: 'Cerrar sesión', icon: 'pi pi-sign-out', command: () => logout() }],
			});
		else menu.push({ label: 'Iniciar sesión', icon: 'pi pi-sign-in', command: () => setShow(true) });
		return menu;
	};

	const img = <img src={logo} className="app-logo" alt="logo" />;

	return (
		<>
			<Toast ref={toast} />
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
