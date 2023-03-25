export const ErrorMessage = (props) => {
	return (
		<center>
			<div className="error-message">
				<i className="pi pi-exclamation-circle" style={{ fontSize: '4em' }}></i>
				{props.notFound && <h3>404 PAGE NOT FOUND</h3>}
				{props.accessDenied && (
					<h3>
						¡Acceso denegado!
						<br />
						<br />
						Si piensas que es un error y que tú deberías ver esta información,
						<br />
						comunícate con el administrador principal de la página
						<br />
						<a href="/">Volver a la tienda</a>
					</h3>
				)}
				{!props.notFound && !props.accessDenied && <h3>¡Por el momento no es posible obtener la información, por favor intenta más tarde!</h3>}
				{props.message && <h1>{props.message}</h1>}
			</div>
		</center>
	);
};
