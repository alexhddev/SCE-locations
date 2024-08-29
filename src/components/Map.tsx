
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { ElderWithLocation } from "../model/Model";
import { CustomMarker } from "./CustomMarker";

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
    if (elder.lat && elder.lon) {
      return (
        <CustomMarker elder={elder} key={elder.name + elder.congregation} />
      )      
    }
  })
}
