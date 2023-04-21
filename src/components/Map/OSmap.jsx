import React, { useEffect, useState } from 'react';
import {MapContainer, TileLayer, Map, useMap, Marker, Popup, Polyline} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet-routing-machine';
import Geocode from 'react-geocode';
import { useRef } from 'react';
import './styles.css';
import axios from 'axios';
import Line from './components/Line';

const markerIcon = new L.Icon({
    iconUrl: require("./picture/Icon-meo-cute.jpg"),
    iconSize: [35,45],
    iconAnchor: [17,46],
    popupAnchor: [0,-46],
})

export const markerIconRed = new L.Icon({
    iconUrl: require("./picture/location-pin-normal.png"),
    iconSize: [35,40],
    iconAnchor: [17,46],
    popupAnchor: [0,-46],
})

export const markerIconRedBold = new L.Icon({
    iconUrl: require("./picture/location-pin-bold.png"),
    iconSize: [35,40],
    iconAnchor: [17,46],
    popupAnchor: [0,-46],
})

export let current = [10.878228, 106.806244];

export default function OSmap({children}) {    

    let mapRef = useRef();


    const position = [parseFloat(current[0]), parseFloat(current[1])];

    return (
        <MapContainer ref = {mapRef} center={position} zoom={15} scrollWheelZoom={true} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position = {position} center = {true}>
                <Popup > 
                    <b>Hello I'm here</b>
                </Popup>
            </Marker>
            {children}
        </MapContainer>
    )
}

