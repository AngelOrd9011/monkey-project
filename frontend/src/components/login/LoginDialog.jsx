import { Dialog } from 'primereact/dialog';
import LoginForm from './LoginForm';
import { Button } from 'primereact/button';
import { useState } from 'react';
import RegisterForm from './RegisterForm';

export const LoginDialog = ({ show, onHide, showToast }) => {
	const [register, setRegister] = useState(false);
	return (
		<Dialog visible={show} onHide={onHide} style={{ width: '25vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
			{!register ? (
				<>
					<LoginForm showToast={showToast} />
					<center>
						<span>
							¿No tienes cuenta? <Button label="¡Regístrate!" link className="link-btn" onClick={() => setRegister(true)} />
						</span>
					</center>
				</>
			) : (
				<>
					<RegisterForm showToast={showToast} />
					<center>
						<span>
							<Button label="Volver a inicio de sesión" link className="link-btn" onClick={() => setRegister(false)} />
						</span>
					</center>
				</>
			)}
		</Dialog>
	);
};
