import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_PRODUCTS } from '../apollo/queries';
import { Loading } from '../components/layouts/Loading';
import { ErrorMessage } from '../components/layouts/ErrorMessage';
import { Tag } from 'primereact/tag';
import logo from '../assets/images/logo-orange.png';
import { Button } from 'primereact/button';

const Stock = () => {
	const { data, loading, error } = useQuery(QUERY_GET_ALL_PRODUCTS);
	const [expandedRows, setExpandedRows] = useState(null);

	const imageBodyTemplate = (product) => {
		if (!product?.images || product?.images?.length === 0) return <img src={logo} alt={product.name} width="64px" className="shadow-4" />;
		let primaryImage = product?.images.filter((item) => item.primary === true);
		return (
			<img src={primaryImage.url || product?.images[0].url} alt={primaryImage.alt || product?.images[0].alt} width="64px" className="shadow-4" />
		);
	};

	const stockTemplate = (product) => {
		let count = 0;
		product.items.forEach((item) => (count += item.stock));
		return <Tag value={count + ' UNIDADES'} severity={getProductSeverity(product, count)} />;
	};

	const getProductSeverity = (product, count) => {
		switch (true) {
			case count >= 10:
				return 'success';

			case count < 10:
				return 'warning';

			case count <= 0:
				return 'danger';

			default:
				return null;
		}
	};

	const rowExpansionTemplate = (data) => {
		return (
			<>
				<h3>Producto: {data.name}</h3>
				<ul>
					{data.items.map((item, index) => (
						<li key={data.name + '-' + index}>{item.color}</li>
					))}
				</ul>
			</>
		);
	};

	const allowExpansion = (product) => {
		return product.items.length > 0;
	};

	if (loading) return <Loading />;
	if (error) return <ErrorMessage />;

	return (
		<div className="page-content">
			<h1>Inventario</h1>
			<div className="card">
				<DataTable
					value={data?.products || []}
					tableStyle={{ minWidth: '50rem' }}
					expandedRows={expandedRows}
					onRowToggle={(e) => setExpandedRows(e.data)}
					rowExpansionTemplate={rowExpansionTemplate}
				>
					<Column expander={allowExpansion} style={{ width: '5rem' }} />
					<Column field="name" header="Nombre" />
					<Column body={imageBodyTemplate} header="Imagen" />
					<Column field="category" header="Categoría" />
					<Column field="price" header="Precio" />
					<Column body={stockTemplate} header="Cantidad total en inventario" />
				</DataTable>
			</div>
		</div>
	);
};

export default Stock;
