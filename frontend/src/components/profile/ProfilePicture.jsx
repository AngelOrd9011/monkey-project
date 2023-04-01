import { FileUpload } from 'primereact/fileupload';
import { Image } from 'primereact/image';

export const ProfilePicture = ({ input, setInput, fileUploadRef }) => {
	const myUploader = (event) => {
		let _input = { ...input };
		_input.photo = event.files[0].objectURL;
		setInput(_input);
	};

	const chooseOptions = {
		icon: 'pi pi-images',
		iconOnly: false,
		className: 'p-button-rounded p-button-outlined',
	};

	return (
		<>
			<div className="grid">
				<div className="col-12 image-selector">
					<div className="flex align-items-center flex-column profile-picture">
						<Image src={input.photo} alt="Image" imageClassName="profile-picture" preview />
					</div>
					<div className="col-12 image-selector-btn flex align-items-center flex-column">
						<FileUpload
							ref={fileUploadRef}
							mode="basic"
							accept="image/*"
							name="profile"
							chooseOptions={chooseOptions}
							chooseLabel="Seleccionar foto de perfil"
							customUpload
							uploadHandler={myUploader}
							multiple={false}
							auto
						/>
					</div>
				</div>
			</div>
		</>
	);
};
