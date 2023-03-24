import 'primeflex/primeflex.css';
import React from 'react';

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
