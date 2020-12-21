import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapIcon from '../utils/mapIcon';

const Map = ({ apiKey, ...rest }) => {
  const position = [-20.659998, -40.5047085];
  return (
    <div {...rest}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-screen w-screen -m-12"
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/nennogabriel/ckixugzdw1yx819odgzvhmhd7/tiles/256/{z}/{x}/{y}@2x?access_token=${apiKey}`}
        />
        <Marker position={position} icon={mapIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
