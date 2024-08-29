import { Icon, PointExpression } from 'leaflet'

import blue from '../assets/blue.png'
import green from '../assets/green.png'
import green2 from '../assets/green2.png'
import yellow from '../assets/yellow.png'
import mov from '../assets/mov.png'
import orange from '../assets/orange.png'

const iconSize: PointExpression = [38, 41];
const iconAnchor: PointExpression = [20, 5];

//link icons: https://icons8.com/icon/52671/location

export const blueIcon = new Icon({
    iconUrl: blue,
    iconSize: iconSize,
    iconAnchor: iconAnchor,
})

export const greenIcon = new Icon({
    iconUrl: green,
    iconSize: iconSize,
    iconAnchor: iconAnchor,
})

export const green2Icon = new Icon({
    iconUrl: green2,
    iconSize: iconSize,
    iconAnchor: iconAnchor,
})

export const yellowIcon = new Icon({
    iconUrl: yellow,
    iconSize: iconSize,
    iconAnchor: iconAnchor,
})

export const movIcon = new Icon({
    iconUrl: mov,
    iconSize: iconSize,
    iconAnchor: iconAnchor,
})

export const orangeIcon = new Icon({
    iconUrl: orange,
    iconSize: iconSize,
    iconAnchor: [12, 41],
})