import { useMutation } from '@apollo/client';
import 'primeflex/primeflex.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MUTATION_VERIFY_USER } from '../../apollo/mutations';

export const VerifyingUser = () => {
	const [verifyUser] = useMutation(MUTATION_VERIFY_USER);
	const { token } = useParams();
	const [verified, setVerified] = useState(false);

	useEffect(() => {
		verifyUser({
			variables: { token },
		})
			.then(() => {
				setVerified(true);
				setInterval(() => {
					window.close();
				}, 2000);
			})
			.catch((e) => (window.location.href = '/'));
	}, [token, verifyUser]);

	let verifiedMessage = !verified ? (
		<>
			<h3>Verificando usuario...</h3>
			<i className="pi pi-spin pi-spinner" style={{ fontSize: '6rem' }}></i>
		</>
	) : (
		<>
			<h3>Usuario verificado</h3>
			<i className="pi pi-check" style={{ fontSize: '6rem' }}></i>
		</>
	);

	return (
		<div className="loading">
			<center>{verifiedMessage}</center>
		</div>
	);
};
