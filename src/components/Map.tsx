
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ElderWithLocation } from "../model/Model";

interface MapProps {
  elders: ElderWithLocation[];
}

const mapCenter: LatLngExpression = [46,25]

export default function Map(props: MapProps) {


  return (
    <MapContainer center={mapCenter} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {DrawMarkers(props.elders)}
    </MapContainer>
  );
}

function DrawMarkers(elders: ElderWithLocation[]) {
  return elders.map((elder) => {
    return (
      <Marker position={[elder.lat, elder.lon]}>
        <Popup>
          {elder.congregation} <br/> {elder.name}
        </Popup>
      </Marker>
    )
  })
}