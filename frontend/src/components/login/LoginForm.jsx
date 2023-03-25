import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import useAuthenticate from '../../hooks/useAuthenticate';

const LoginForm = ({ showToast }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const { login } = useAuthenticate();
	// const [submitted, setSubmitted] = useState(false);

	const sendLoginData = () => {
		// setSubmitted(true);
		if (!email || !password) showToast('error', 'Oops!', 'El correo y la contraseña son requeridos');
		else login(email, password, showToast);
	};

	return (
		<div className="login-form">
			<div className="login-form-center">
				<h2>Iniciar sesión</h2>
			</div>
			<div className="p-inputgroup flex-1">
				<span className="p-inputgroup-addon">
					<i className="pi pi-user"></i>
				</span>
				<InputText placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="p-inputgroup flex-1">
				<span className="p-inputgroup-addon">
					<i className="pi pi-lock"></i>
				</span>
				<InputText placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
			</div>
			<div className="login-form-center">
				<Button label="Enviar" icon="pi pi-send" onClick={sendLoginData} />
			</div>
		</div>
	);
};

export default LoginForm;
