import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Image } from 'primereact/image';
import { v4 as uuidv4 } from 'uuid';

export const ProfilePicture = ({ input, setInput, photo, setPhoto, fileUploadRef, cancelUpload }) => {
	const myUploader = async (event) => {
		setPhoto(event.files[0].objectURL);
		let filename = uuidv4() + '.jpg';
		let blob = await fetch(event.files[0].objectURL).then((r) => r.blob());
		let file = new File([blob], filename);
		let _photo = process.env.REACT_APP_MINIO_URI + `monkey/users/${input.username}/${filename}`;
		let _input = { ...input, upload: { file: null, path: null } };
		delete _input.role;
		_input.photo = _photo;
		_input.upload.file = file;
		_input.upload.path = `users/${input.username}`;
		setInput(_input);
	};

	const chooseOptions = {
		icon: 'pi pi-images',
		iconOnly: false,
		className: 'p-button-rounded p-button-outlined',
	};

	return (
		<>
			<div className='grid'>
				<div className='col-12 image-selector'>
					<div className='flex align-items-center flex-column profile-picture'>
						<Image src={photo || input.photo} alt='Image' imageClassName='profile-picture' preview />
					</div>
					<div className='col-12 image-selector-btn flex align-items-center flex-column'>
						{!photo && (
							<FileUpload
								ref={fileUploadRef}
								mode='basic'
								accept='.jpg'
								name='profile'
								chooseOptions={chooseOptions}
								chooseLabel='Seleccionar foto de perfil'
								customUpload
								uploadHandler={myUploader}
								multiple={false}
								auto
							/>
						)}
						{photo && <Button icon='pi pi-times' label='Cancelar' className='p-button-rounded p-button-outlined' onClick={cancelUpload} />}
					</div>
				</div>
			</div>
		</>
	);
};
