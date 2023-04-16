import React, { useState } from 'react';
import {MapContainer, TileLayer, Map, useMap, Marker, Popup, Polyline} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useRef } from 'react';
import './styles.css';

const markerIcon = new L.Icon({
    iconUrl: require("./picture/Icon-meo-cute.jpg"),
    iconSize: [35,45],
    iconAnchor: [17,46],
    popupAnchor: [0,-46],
})

export default function OSmap({Map}) {

    const [map, setMap] = useState(null);
    const [routingControl, setRoutingControl] = useState(null);

    let mapRef = useRef();
    //let data = props.dataFromParent;
    let data = [10.878228, 106.806244];

    const position = [parseFloat(data[0]), parseFloat(data[1])];

    const points = [
        [10.881910, 106.804845], 
        [10.876739, 106.802029], 
        [10.875483, 106.799275], 
        [10.871069, 106.802225]
    ];

    const createRoutingControl = () => {
        const router = L.Routing.osrmv1({
            serviceUrl: "https://router.project-osrm.org/route/v1",
            profile: "driving",
        });
        const waypoints = points.map((p) => L.latLng(p));
        const routingCtrl = L.Routing.control({
            router: router,
            waypoints: waypoints,
            addWaypoints: false,
            routeWhileDragging: false,
            fitSelectedRoutes: false,
            lineOptions: {
                styles: [{color: '#0078FF', weight: 6}]
            },
            routeLine: (route) => {
                const line = L.Routing.line(route, {
                    addWaypoints: false,
                    extendToWaypoints: false,
                });
                return line;
            },       
        });
        return routingCtrl;
    };
    
    const onMapready = (map) => {
        setMap(map);
        const routingCtrl = createRoutingControl();
        routingCtrl.addTo(map);
        setRoutingControl(routingCtrl);
    };

    return (
        <MapContainer ref = {mapRef} center={position} zoom={15} scrollWheelZoom={true} onMapready={onMapready}>
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
            <Marker position={[10.876739, 106.802029]}/>
            <Marker position={[10.875483, 106.799275]}/>
            <Marker position={[10.870426, 106.795392]}/>
            <Marker position={[10.871069, 106.802225]}/>
            <Marker position={[10.873086, 106.807627]}/>
            <Marker position={[10.872488, 106.789096]}/>
            <Marker position={[10.874792, 106.778297]}/>
            <Marker position={[10.881261, 106.783115]}/>
            <Marker position={[10.887498, 106.799431]}/>
            {routingControl && <Polyline positions={routingControl._line._route._coordinates}/>}          
        </MapContainer>
    )
}