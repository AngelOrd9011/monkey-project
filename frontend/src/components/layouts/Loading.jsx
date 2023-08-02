import 'primeflex/primeflex.css';

export const Loading = () => {
	return (
		<div className="loading">
			<center>
				<h3>Cargando...</h3>
				<i className="pi pi-spin pi-spinner" style={{ fontSize: '6rem' }}></i>
			</center>
		</div>
	);
};
