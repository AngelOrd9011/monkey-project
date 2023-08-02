import { Dialog } from 'primereact/dialog';

export const ProductDialog = ({ product, show, onHide }) => {
	return (
		<Dialog visible={show} onHide={onHide} header={product.name}>
			<p className="m-0">
				{product.description}
			</p>
		</Dialog>
	);
};
