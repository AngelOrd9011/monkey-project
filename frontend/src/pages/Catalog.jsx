import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_PRODUCTS } from '../apollo/queries';
import { Loading } from '../components/layouts/Loading';
import { ProductCard } from '../components/products/ProductCard';
import { useMemo } from 'react';
import { ErrorMessage } from '../components/layouts/ErrorMessage';

const Catalog = ({ catalogType }) => {
	const { data, loading, error } = useQuery(QUERY_GET_ALL_PRODUCTS);
	const title = (catalog) => {
		if (catalog === 'female') return <h1>Damas</h1>;
		if (catalog === 'male') return <h1>Caballeros</h1>;
		return <h1>Catálogo</h1>;
	};

	const female = useMemo(() => {
		let _female = data?.products?.filter((item) => item.category === 'FEMALE');
		return _female;
	}, [data]);

	const male = useMemo(() => {
		let _male = data?.products?.filter((item) => item.category === 'MALE');
		return _male;
	}, [data]);

	if (loading) return <Loading />;
	if (error) return <ErrorMessage />;

	return (
		<div className="page-content">
			{title(catalogType)}
			<div className="grid">
				{data &&
					catalogType === 'all' &&
					data?.products.map((item) => {
						return (
							<div key={item.id} className="col-12 md:col-6 lg:col-4">
								<ProductCard product={item} />
							</div>
						);
					})}
				{data &&
					catalogType === 'female' &&
					female?.map((item) => {
						return (
							<div key={item.id} className="col-12 md:col-6 lg:col-4">
								<ProductCard product={item} />
							</div>
						);
					})}
				{data &&
					catalogType === 'male' &&
					male?.map((item) => {
						return (
							<div key={item.id} className="col-12 md:col-6 lg:col-4">
								<ProductCard product={item} />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Catalog;
