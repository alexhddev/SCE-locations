import { LatLngExpression } from "leaflet";
import { ElderWithLocation } from "../model/Model";
import { Marker, Popup } from "react-leaflet";
import * as icons from './Icons';

export function CustomMarker(props: { elder: ElderWithLocation }) {

    if (!hasPosition(props.elder)) {
        return null;
    }  

    let position: LatLngExpression = {} as any;
    let icon = undefined;
    let popupText = {} as any;

    position = randomizePosition(props.elder.lat, props.elder.lon);
    popupText = <div>{props.elder.congregation} <br/> {props.elder.name}</div>

    if (props.elder.language.startsWith('Mag')) {
        icon = icons.greenIcon;
    } else if (props.elder.language.startsWith('Limbajul semnelor')) {
        icon = icons.yellowIcon;
    } else if (props.elder.language.startsWith('Romany')) {
        icon = icons.movIcon;
    } else if (props.elder.language.startsWith('Engl')) {
        icon = icons.orangeIcon;
    }

    if (icon) {
        return (
            <Marker position={position} icon={icon}>
                <Popup>
                    {popupText}
                </Popup>
            </Marker>
        )   
    }


    return (
        <Marker position={position}>
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