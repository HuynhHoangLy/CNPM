import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';
import './styles.css';
import { current } from '../OSmap';
import { markerIconBlue, markerIconRed} from '../OSmap';

Line.propTypes = {
    
};
export let line = null;
export let d = 0;
function Line({points}) {
    const map = useMap();
    if(line != null) map.removeControl(line);

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
        showAlternatives: false,
        createMarker: function() {return null}
    }).addTo(map);
    line.on('routesfound', function(e) {
        d = e.routes[0].summary.totalDistance
        console.log(e.routes[0].summary.totalDistance)
     });
    return null;
}

export default Line;