import React from 'react';
import PropTypes from 'prop-types';
import InfoFeatures from '../Info';
import OSmap from '../Map/OSmap';

ManageCollectionRoute.propTypes = {
    
};

function ManageCollectionRoute(props) {
    return (
        <div>
            <InfoFeatures/>
            <OSmap/>
        </div>
    );
}

export default ManageCollectionRoute;