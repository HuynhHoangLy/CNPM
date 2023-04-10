import React from 'react';
import PropTypes from 'prop-types';
import InfoFeatures from '../../components/Info/index';
import OSmap from '../../components/Map/OSmap';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';

ManageCollectionRoute.propTypes = {
    
};

function ManageCollectionRoute(props) {
    return (
        <div>
            <Header/>
            <Dashboard/>
            <InfoFeatures/>
            <OSmap/>
        </div>
    );
}

export default ManageCollectionRoute;