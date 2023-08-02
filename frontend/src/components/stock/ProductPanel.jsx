export const ProductPanel = ({ product }) => {
	if (!product.items || product.items.length === 0) return <span>No hay nada aquí</span>;
	return (
		<>
			<h3>Producto: {product.name}</h3>
			<ul>
				{product.items.map((item, index) => (
					<li key={product.name + '-' + index}>{item.color}</li>
				))}
			</ul>
		</>
	);
};
