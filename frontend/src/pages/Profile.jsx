import { useEffect, useState, useRef, useMemo } from 'react';
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
	const [photo, setPhoto] = useState(null);

	useEffect(() => {
		if (!profile.name) setPage(PAGES.home);
	}, [setPage, profile]);

	const disabled = useMemo(() => {
		return JSON.stringify(input) === JSON.stringify(profile);
	}, [input, profile]);

	const cancelUpload = () => {
		setInput({ ...profile });
		setPhoto(null);
		// fileUploadRef.current.clear();
	};

	const saveUserChanges = async () => {
		update({
			variables: { email: input.email, input: input },
			context: {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		})
			.then(() => {
				refetch();
			})
			.then(() => {
				setPhoto(null);
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
			<section className="grid">
				<aside className="col-12 md:col-3">
					<ProfilePicture
						input={input}
						setInput={setInput}
						photo={photo}
						setPhoto={setPhoto}
						fileUploadRef={fileUploadRef}
						cancelUpload={cancelUpload}
					/>
				</aside>
				<div className="col-12 md:col-9" style={{ padding: '1rem' }}>
					<div className="personal-data-container">
						<Button label="Guardar" className="p-button-rounded" onClick={() => saveUserChanges()} disabled={disabled} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
