import { useQuery } from '@apollo/client';
import { QUERY_GET_PRODUCTS_BY_CATEGORY } from '../apollo/queries';
import { Loading } from '../components/layouts/Loading';
import { ProductCard } from '../components/products/ProductCard';
import { ErrorMessage } from '../components/layouts/ErrorMessage';
import { CATEGORIES } from '../app/constants';

const Catalog = ({ category }) => {
	const { data, loading, error } = useQuery(QUERY_GET_PRODUCTS_BY_CATEGORY, { variables: { category } });

	if (loading) return <Loading />;
	if (error) return <ErrorMessage />;

	return (
		<div className="page-content">
			<h1>{CATEGORIES[category]}</h1>
			<section className="grid">
				{data &&
					data?.products.map((item) => {
						return (
							<article key={item.id} className="col-12 md:col-6 lg:col-4 xl:col-4">
								<ProductCard product={item} />
							</article>
						);
					})}
			</section>
		</div>
	);
};

export default Catalog;
