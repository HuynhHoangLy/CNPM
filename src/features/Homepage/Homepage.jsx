import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/index';
import Dashboard from '../../components/Dashboard/Dashboard';
import OSmap from '../../components/Map/OSmap';
import { Marker } from 'react-leaflet';

Homepage.propTypes = {
  
};

function Homepage(props) {
  const points = [
    [10.881910, 106.804845], 
    [10.876739, 106.802029], 
    [10.875483, 106.799275], 
    [10.871069, 106.802225],
    [10.881069, 106.803525],
    [10.870109, 106.802225],
    [10.882739, 106.702225]
];
  return (
    <div>
      <Header/>
      <Info/>
      <Dashboard/>
      <div style={{width: "78.8vw", height: '73vh', position: 'absolute', top: '26vh', left: '19.6vw'}}>
        <OSmap>
            {
                points != [] ? points.map((mcp, index) => 
                    <Marker id={index} position={mcp}></Marker>
                ) : <></>
            }
        </OSmap>
      </div>
    </div>
  );
}

export default Homepage;