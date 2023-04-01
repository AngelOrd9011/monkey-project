import { useEffect, useState, useRef } from 'react';
import { Button } from 'primereact/button';
import useProfile from '../hooks/useProfile';
import { ProfilePicture } from '../components/profile/ProfilePicture';

const Profile = ({ setPage }) => {
	const fileUploadRef = useRef(null);
	const { profile } = useProfile();
	const [input, setInput] = useState({ photo: profile?.photo });

	useEffect(() => {
		console.log(profile);
		if (!profile.name) setPage('home');
	}, [setPage, profile]);

	const saveUserChanges = () => {
		let _input = { ...input };
		_input.photo = profile?.photo;
		setInput(_input);
		fileUploadRef.current.clear();
	};

	return (
		<div className="page-content">
			<h1>Mi perfil</h1>
			<div className="grid">
				<div className="col-12 md:col-3">
					<ProfilePicture input={input} setInput={setInput} fileUploadRef={fileUploadRef} />
				</div>
				<div className="col-12 md:col-9" style={{ padding: '1rem' }}>
					<div className="personal-data-container">
						<Button label="Guardar" className="p-button-rounded" onClick={() => saveUserChanges()} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
