import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  return (
    <div {...props}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={15}
        scrollWheelZoom={false}
        className="h-screen w-screen -m-12"
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/nennogabriel/ckixugzdw1yx819odgzvhmhd7/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
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
