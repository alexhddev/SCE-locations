import { Icon, LatLngExpression } from "leaflet";
import { ElderWithLocation } from "../model/Model";
import { Marker, Popup, useMap } from "react-leaflet";




export function CustomMarker(props: { elder: ElderWithLocation }) {

    if (!hasPosition(props.elder)) {
        return null;
    } 

    let position: LatLngExpression = {} as any;
    let icon: Icon = {} as any;
    let popupText = {} as any;

    position = randomizePosition(props.elder.lat, props.elder.lon);
    popupText = <div>{props.elder.congregation} <br/> {props.elder.name}</div>


    return (
        <Marker position={position} >
            <Popup>
                {popupText}
            </Popup>
        </Marker>
    )    
}

function hasPosition(elder: ElderWithLocation): boolean {
    return (elder.lat && elder.lon) ? true : false;
}

function randomizePosition(lat: number, lon: number):LatLngExpression {
    const indent = 0.05;
    const latIndent = Math.random() * indent * plusOrMinus();
    const lonIndent = Math.random() * indent * plusOrMinus();
    return [lat + latIndent, lon + lonIndent];
  }
  
  function plusOrMinus() {
    return Math.random() < 0.5 ? -1 : 1;
  }