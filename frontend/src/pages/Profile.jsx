import { useEffect, useState, useRef } from 'react';
import { Button } from 'primereact/button';
import useProfile from '../hooks/useProfile';
import { ProfilePicture } from '../components/profile/ProfilePicture';
import { useMutation } from '@apollo/client';
import { MUTATION_UPDATE_USER } from '../apollo/mutations';

const Profile = ({ setPage, showToast }) => {
	const fileUploadRef = useRef(null);
	const { profile, refetch, token } = useProfile();
	const [input, setInput] = useState({ ...profile });
	const [update] = useMutation(MUTATION_UPDATE_USER);

	useEffect(() => {
		if (!profile.name) setPage('home');
	}, [setPage, profile]);

	const saveUserChanges = async () => {
		let _input = { ...input, upload: { file: null, path: null } };
		delete _input.role;
		let files = fileUploadRef.current.getFiles();
		let _file = files[0];
		let blob = await fetch(_file.objectURL).then((r) => r.blob());
		let file = new File([blob], _file.name);
		let _photo = process.env.REACT_APP_MINIO_URI + 'monkey/users/' + file.name;
		_input.photo = _photo;
		_input.upload.file = file;
		_input.upload.path = 'users';
		update({
			variables: { email: _input.email, input: _input },
			context: {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		})
			.then(() => {
				refetch();
				showToast('success', 'OK!', 'Información actualizada exitosamente');
			})
			.catch((e) => {
				let error = JSON.parse(JSON.stringify(e));
				showToast('error', 'Oops!', error.message);
			});
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
