import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => (
	<span>
		<i className="pi pi-map-marker" style={{ fontSize: '2rem', color: '#9c27b0' }}></i>
		{text}
	</span>
);

export const ContactMap = () => {
	const defaultProps = {
		center: {
			lat: 19.2715141,
			lng: -98.89061,
		},
		zoom: 18,
	};

	return (
		<div style={{ height: '50vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<MapMarker lat={19.2715141} lng={-98.89061} text="Monkey" />
			</GoogleMapReact>
		</div>
	);
};
