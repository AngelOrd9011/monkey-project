import { InputText } from 'primereact/inputtext';

export const UserData = ({ input, setInput }) => {
	const onInputChange = (key, value) => {
		let _input = { ...input };
		_input[key] = value;
		setInput(_input);
	};
	return (
		<div className='grid user-data-form'>
			<div className='col-12 md:col-4 '>
				<label htmlFor='first_name'>Nombre(s)</label>
				<InputText id='first_name' value={input?.first_name || ''} onChange={(e) => onInputChange('first_name', e.target.value)} />
			</div>
			<div className='col-12 md:col-4 '>
				<label htmlFor='last_name'>Apellidos</label>
				<InputText id='last_name' value={input?.last_name || ''} onChange={(e) => onInputChange('last_name', e.target.value)} />
			</div>
			<div className='col-12 md:col-4 '>
				<label htmlFor='phone'>Número telefónico</label>
				<InputText id='phone' value={input?.phone || ''} onChange={(e) => onInputChange('phone', e.target.value)} maxLength={10} />
			</div>
		</div>
	);
};
