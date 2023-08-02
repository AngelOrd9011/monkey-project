import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_PRODUCTS } from '../apollo/queries';
import { Loading } from '../components/layouts/Loading';
import { ErrorMessage } from '../components/layouts/ErrorMessage';
import { Tag } from 'primereact/tag';
import logo from '../assets/images/logo-orange.png';
import useProfile from '../hooks/useProfile';
import { ProductPanel } from '../components/stock/ProductPanel';
const Stock = () => {
	const { headers } = useProfile();
	const { data, loading, error } = useQuery(QUERY_GET_ALL_PRODUCTS, { context: { ...headers } });
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
		if (product.items && product.items.length > 0) {
			product.items.forEach((item) => {
				count += item.stock;
			});
		}
		console.log(count);
		return <Tag value={count + ' UNIDADES'} severity={getProductSeverity(count)} />;
	};

	const getProductSeverity = (count) => {
		switch (true) {
			case count >= 10:
				return 'success';

			case count < 10 && count >= 1:
				return 'warning';

			case count === 0:
				return 'danger';

			default:
				return null;
		}
	};

	const productPanelTemplate = (product) => {
		return <ProductPanel product={product} />;
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
					rowExpansionTemplate={productPanelTemplate}
				>
					<Column expander={true} style={{ width: '5rem' }} />
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
