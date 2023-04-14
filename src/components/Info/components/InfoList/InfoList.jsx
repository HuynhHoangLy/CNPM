import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Info from '../Info/Info';
import { Link } from 'react-router-dom';

InfoList.propTypes = {
    infoList: PropTypes.array.isRequired,
};

function InfoList({infoList}) {
    return (
        <ul className='info-list'>
            {infoList.map((info) => (
                <li key={info.id}>
                    <Info info={info}/>
                </li>
            ))}
        </ul>
    );
}

export default InfoList;