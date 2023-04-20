import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/index';
import Dashboard from '../../components/Dashboard/Dashboard';
import OSmap from '../../components/Map/OSmap';

Homepage.propTypes = {
  
};

function Homepage(props) {
  return (
    <div>
      <Header/>
      <Info/>
      <Dashboard/>
      <div style={{width: "78.8vw", height: '73vh', position: 'absolute', top: '26vh', left: '19.6vw'}}>
        <OSmap/>
      </div>
    </div>
  );
}

export default Homepage;