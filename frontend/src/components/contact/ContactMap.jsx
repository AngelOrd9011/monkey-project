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
			lat: 10.99835602,
			lng: 77.01502627,
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
				<MapMarker lat={10.99835602} lng={77.01502627} text="Monkey" />
			</GoogleMapReact>
		</div>
	);
};
