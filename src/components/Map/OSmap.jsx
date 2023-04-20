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

export default function OSmap({children}) {    

    let mapRef = useRef();
    
    let data = [10.878228, 106.806244];

    const position = [parseFloat(data[0]), parseFloat(data[1])];

    const points = [
        [10.881910, 106.804845], 
        [10.876739, 106.802029], 
        [10.875483, 106.799275], 
        [10.871069, 106.802225]
    ];

    console.log(points);

    useEffect(() => {
        if (points.length > 0 && mapRef.current) {
            const bounds = L.latLngBounds(points.map((marker) => marker.position));
            // mapRef.current.leafletElement.invalidateSize();
            // mapRef.current.leafletElement.fitBounds(bounds);
        }
    }, [points]);

    return (
        <MapContainer ref = {mapRef} center={position} zoom={15} scrollWheelZoom={true} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position = {position} center = {true}>
                <Popup> 
                    <b>Hello I'm here</b>
                </Popup>
            </Marker>
            
            <Marker position={[10.881910, 106.804845]}/>
            <Marker position={[10.881910, 106.804845]}/>
            <Marker position={[10.876739, 106.802029]}/>
            <Marker position={[10.875483, 106.799275]}/>
            <Marker position={[10.870426, 106.795392]}/>
            <Marker position={[10.871069, 106.802225]}/>
            <Marker position={[10.873086, 106.807627]}/>
            <Marker position={[10.872488, 106.789096]}/>
            <Marker position={[10.874792, 106.778297]}/>
            <Marker position={[10.881261, 106.783115]}/>
            <Marker position={[10.887498, 106.799431]}/>
            <Line points={points}/>
            {
                points != undefined ? points.map((point) => <Marker position={point}/>): <></>
            }
            {children}
        </MapContainer>
    )
}

