import { Card } from 'primereact/card';
import logo from '../../assets/images/logo-orange.png';
import { useMemo, useState } from 'react';
import { Button } from 'primereact/button';
import { ProductDialog } from './ProductDialog';

export const ProductCard = ({ product }) => {
	const [show, setShow] = useState(false);

	const image = useMemo(() => {
		if (product?.images?.length > 0) return <img alt={product.images[0].alt} src={product.images[0].url} />;
		return <img alt={<>Not image found for {product.id}</>} src={logo} className="not-image-found" />;
	}, [product]);

	const onHide = () => {
		setShow(false);
	};

	const price = () => {
		return <>${product.price.toFixed(2)}</>;
	};

	const header = () => {
		return (
			<>
				{product.name}
				<Button icon="pi pi-plus" rounded aria-label="Filter" className="product-card-btn" onClick={() => setShow(true)} />
			</>
		);
	};

	const footer = (
		<div className="flex flex-wrap justify-content-end gap-2">
			<Button label="Añadir" icon="pi pi-shopping-cart" className="product-card-btn" />
		</div>
	);

	return (
		<div className="card flex justify-content-center">
			<Card title={price} subTitle={header} header={image} footer={footer}>
				<p className="m-0">{product.description}</p>
			</Card>
			<ProductDialog show={show} onHide={onHide} product={product} />
		</div>
	);
};
