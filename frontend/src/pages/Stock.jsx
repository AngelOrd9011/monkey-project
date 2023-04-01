import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_PRODUCTS } from '../apollo/queries';
import { Loading } from '../components/layouts/Loading';
import { ErrorMessage } from '../components/layouts/ErrorMessage';
import { Button } from 'primereact/button';

const Stock = () => {
	const { data, loading, error } = useQuery(QUERY_GET_ALL_PRODUCTS);

	const stockTemplate = (rowData) => {
		let count = 0;
		rowData.items.forEach((item) => (count += item.stock));
		return count;
	};

	const actionTemplate = (rowData) => {
		return <Button icon="pi pi-plus" rounded className="product-card-btn" size="small" />;
	};

	if (loading) return <Loading />;
	if (error) return <ErrorMessage />;
	return (
		<div className="page-content">
			<h1>Inventario</h1>
			<div className="card">
				<DataTable value={data?.products || []} tableStyle={{ minWidth: '50rem' }}>
					<Column field="name" header="Nombre" />
					<Column field="category" header="Categoría" />
					<Column field="price" header="Precio" />
					<Column body={stockTemplate} header="Cantidad total en inventario" />
					<Column body={actionTemplate} />
				</DataTable>
			</div>
		</div>
	);
};

export default Stock;
