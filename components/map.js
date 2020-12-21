import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ apiKey, ...rest }) => {
  return (
    <div {...rest}>
      <MapContainer
        center={[37.5650172, 126.8494659]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-screen w-screen -m-12"
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/nennogabriel/ckixugzdw1yx819odgzvhmhd7/tiles/256/{z}/{x}/{y}@2x?access_token=${apiKey}`}
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default Map;
