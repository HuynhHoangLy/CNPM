import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';
import './styles.css';
<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> 050e7a250909ba4522cb7227fe2da51fc4b8dcf1

Line.propTypes = {
    
};
let line = null;

function Line({points}) {
    const map = useMap();
<<<<<<< HEAD
    if(line != null)     map.removeControl(line);
=======
    console.log(points)
    if(line != null) map.removeControl(line);
>>>>>>> 050e7a250909ba4522cb7227fe2da51fc4b8dcf1
    line = L.Routing.control({
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
        showAlternatives: false
    }).addTo(map);
    return null;
}

export default Line;