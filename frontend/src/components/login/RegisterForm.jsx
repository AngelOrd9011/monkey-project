import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import useAuthenticate from '../../hooks/useAuthenticate';

const RegisterForm = ({ showToast }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const { singUp } = useAuthenticate();

	const sendLoginData = () => {
		singUp(username, email, password, passwordConfirm, showToast);
	};

	return (
		<div className="login-form">
			<div className="login-form-center">
				<h2>Regístrate</h2>
			</div>
			<div className="register-input">
				<label htmlFor="username">Nombre de usuario</label>
				<InputText id="username" onChange={(e) => setUsername(e.target.value)} />
			</div>
			<div className="register-input">
				<label htmlFor="email">Correo electrónico</label>
				<InputText id="email" onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="register-input">
				<label htmlFor="password">Contraseña</label>
				<br />
				<Password
					id="password"
					toggleMask
					promptLabel="Escribe tu contraseña"
					weakLabel="Débil"
					mediumLabel="Medio"
					strongLabel="Fuerte"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className="register-input">
				<label htmlFor="password-conform">Comprobar contraseña</label>
				<br />
				<Password id="password-confirm" toggleMask feedback={false} onChange={(e) => setPasswordConfirm(e.target.value)} />
			</div>
			<div className="login-form-center">
				<Button label="Enviar" icon="pi pi-send" onClick={sendLoginData} />
			</div>
		</div>
	);
};

export default RegisterForm;
