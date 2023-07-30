export const ErrorMessage = (props) => {
	return (
		<center>
			<div className="error-message">
				<i className="pi pi-exclamation-circle" style={{ fontSize: '4em' }}></i>
				{props.notVerified && (
					<>
						<h3>
							¡La cuenta aun no esta verificada!
							<br />
							<br />
							Un correo electrónico debió haber llegado a la dirección ingresada para generar la cuenta.
							<br />
							Es necesario que abra el correo e ingrese al enlace de verificación.
						</h3>
						<h2>Una vez terminado el proceso de verificación puedes recargar esta ventana.</h2>
					</>
				)}
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
				{!props.notFound && !props.accessDenied && !props.notVerified && (
					<h3>¡Por el momento no es posible obtener la información, por favor intenta más tarde!</h3>
				)}
				{props.message && <h1>{props.message}</h1>}
			</div>
		</center>
	);
};
