import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';
import './styles.css';

Line.propTypes = {
    
};

function Line({points}) {
    const map = useMap();
    useEffect(() => {
        L.Routing.control({
            waypoints: points.map((p) => L.latLng(p)),
            lineOptions: {
                styles: [
                    {
                        color: '#0078FF', 
                        weight: 6,
                    },
                ],
            },
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
        }).addTo(map);  
    }, [])
    return null;
}

export default Line;