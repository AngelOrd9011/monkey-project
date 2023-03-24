export const ErrorMessage = (props) => {
	if (props.workingOnIt) {
		return (
			<>
				<center>
					<div className="error-message">
						<i className="pi pi-exclamation-circle" style={{ fontSize: '4em' }}></i>
						<h3>Esta página esta en construcción</h3>
					</div>
				</center>
			</>
		);
	}
	if (props.notFound) {
		return (
			<>
				<center>
					<div className="error-message">
						<i className="pi pi-exclamation-circle" style={{ fontSize: '4em' }}></i>
						<h3>404 PAGE NOT FOUND</h3>
					</div>
				</center>
			</>
		);
	}
	return (
		<center>
			<>
				<div className="error-message">
					<i className="pi pi-exclamation-circle" style={{ fontSize: '4em' }}></i>
					<h3>
						¡Por el momento no es posible obtener algunos datos,
						<br />
						por favor intenta más tarde!
					</h3>
				</div>
			</>
		</center>
	);
};
