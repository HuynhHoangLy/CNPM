import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/index';
import Dashboard from '../../components/Dashboard/Dashboard';
import OSmap from '../../components/Map/OSmap';
import { Marker } from 'react-leaflet';
import { data } from '../../components/Data/data';
import { markerIconGreen, markerIconBlue, markerIconRed } from '../../components/Map/OSmap';

Homepage.propTypes = {
  
};

function Homepage(props) {
  const points = data.mcps.map((x) => x);
  return (
    <div>
      <Header/>
      <Info/>
      <Dashboard/>
      <div style={{width: "78.8vw", height: '73vh', position: 'absolute', top: '26vh', left: '19.6vw'}}>
        <OSmap>
            {
                points != [] ? points.map((mcp, index) => 
                    <Marker id={index} position={mcp.coor} icon={mcp.status == 100 ? markerIconRed : markerIconGreen}></Marker>
                ) : <></>
            }
        </OSmap>
      </div>
    </div>
  );
}

export default Homepage;