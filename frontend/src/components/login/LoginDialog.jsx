import { Dialog } from 'primereact/dialog';
import LoginForm from './LoginForm';
import { Button } from 'primereact/button';

export const LoginDialog = ({ show, onHide, showToast }) => {
	return (
		<Dialog visible={show} onHide={onHide} style={{ width: '25vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
			<LoginForm showToast={showToast} />
			<center>
				<span>
					¿No tienes cuenta? <Button label="¡Regístrate!" link className="link-btn" />
				</span>
			</center>
		</Dialog>
	);
};
