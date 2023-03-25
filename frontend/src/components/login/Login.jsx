import LoginForm from './LoginForm';
import { Toast } from 'primereact/toast';
import useToast from '../../hooks/useToast';

const Login = () => {
	const { toast, showToast } = useToast();
	return (
		<div className="login-page">
			<Toast ref={toast} />
			<div className="login-div">
				<LoginForm showToast={showToast} />
			</div>
		</div>
	);
};

export default Login;
