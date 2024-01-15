import { Card } from 'primereact/card';
import logo from '../../assets/images/logo-orange.png';
import { useMemo, useState } from 'react';
import { Button } from 'primereact/button';
// import { Rating } from 'primereact/rating';
import { ProductDialog } from './ProductDialog';
import useFormatter from '../../hooks/useFormatter';
import { Tooltip } from 'primereact/tooltip';
export const ProductCard = ({ product }) => {
	const [show, setShow] = useState(false);
	const { currencyFormat } = useFormatter();

	const image = useMemo(() => {
		if (product?.images?.length > 0) return <img alt={product.images[0].alt} src={product.images[0].url} />;
		return <img alt={product.id} src={logo} className='not-image-found' />;
	}, [product]);

	const onHide = () => {
		setShow(false);
	};

	const footer = (
		<div className='grid'>
			{/* <div className='col-12 md:col-12 lg:col-6 flex lg:justify-content-start justify-content-center' style={{ paddingLeft: '0' }}>
				<Rating value={2.5} readOnly cancel={false} />
			</div> */}
			<div className='col-12 md:col-12 lg:col-12 flex lg:justify-content-end justify-content-center gap-2' style={{ paddingRight: '0' }}>
				<Tooltip target='.details' mouseTrack mouseTrackLeft={10} />
				<Button
					data-pr-tooltip='Ver detalles'
					icon='pi pi-plus'
					rounded
					size='small'
					className='product-card-btn details'
					onClick={() => setShow(true)}
				/>
				<Tooltip target='.add-cart' mouseTrack mouseTrackLeft={10} />
				<Button data-pr-tooltip='Añadir al carrito' icon='pi pi-shopping-cart' rounded size='small' className='product-card-btn add-cart' />
			</div>
		</div>
	);

	return (
		<div className='card flex justify-content-center mb-3 scalein animation-duration-500'>
			<Card title={currencyFormat(product.price)} subTitle={product.name} header={image} footer={footer} className='shadow-8'>
				<p className='m-0 product-abstract'>{product.description}</p>
			</Card>
			<ProductDialog show={show} onHide={onHide} product={product} />
		</div>
	);
};
