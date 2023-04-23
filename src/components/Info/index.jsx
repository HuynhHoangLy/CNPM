import React from 'react';
import PropTypes from 'prop-types';
import InfoList from './components/InfoList/InfoList';

InfoFeatures.propTypes = {
    
};

function InfoFeatures(props) {

    const infoList = [
        {
            id: 1,
            content: '18',
            script: 'MCPs chưa đầy',
        }, 
        {
            id: 2,
            content: '5',
            script: 'MCPs bị quá tải',
        },
        {
            id: 3,
            content: '10',
            script: 'Collectors đang làm',
        },
        {
            id: 4,
            content: '200',
            script: 'Janitors đang làm',
        }
    ];
    
    return (
        <InfoList infoList={infoList}/>
    );
}

export default InfoFeatures;