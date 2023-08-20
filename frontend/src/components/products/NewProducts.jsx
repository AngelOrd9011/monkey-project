import { useQuery } from '@apollo/client';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tooltip } from 'primereact/tooltip';
import { QUERY_GET_NEW_PRODUCTS } from '../../apollo/queries';
import { Loading } from '../layouts/Loading';
import { ErrorMessage } from '../layouts/ErrorMessage';
import logo from '../../assets/images/logo-purple.png';

export const NewProducts = () => {
	const { data, loading, error } = useQuery(QUERY_GET_NEW_PRODUCTS, { variables: { newProducts: true } });
	const responsiveOptions = [
		{
			breakpoint: '1199px',
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: '991px',
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: '767px',
			numVisible: 1,
			numScroll: 1,
		},
	];

	const productTemplate = (product) => {
		return (
			<article className="carousel-product border-round text-center py-5 px-3">
				<div className="mb-3">
					{/* <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-4" /> */}
					<img src={logo} alt={product.name} className="w-6 shadow-4" />
				</div>
				<div>
					<h4 className="mb-1">{product.name}</h4>
					<h6 className="mt-0 mb-3">${product.price}</h6>
					<div className="mt-5 flex flex-wrap gap-2 justify-content-center">
						<Tooltip target=".details" mouseTrack />
						<Button data-pr-tooltip="Ver detalles" icon="pi pi-plus" rounded size="small" className="product-card-btn details" />
						<Tooltip target=".add-cart" mouseTrack />
						<Button data-pr-tooltip="Añadir al carrito" icon="pi pi-shopping-cart" rounded size="small" className="product-card-btn add-cart" />
					</div>
				</div>
			</article>
		);
	};

	if (loading) return <Loading />;
	if (error) return <ErrorMessage />;

	return (
		<section className="carousel-products">
			<Carousel
				value={data.products}
				numVisible={3}
				numScroll={1}
				responsiveOptions={responsiveOptions}
				circular
				autoplayInterval={3000}
				itemTemplate={productTemplate}
			/>
		</section>
	);
};
