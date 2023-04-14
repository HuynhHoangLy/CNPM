import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import location from '../picture/Location.png'
import location_cross from '../picture/Location Cross.png'
import coll_worked from '../picture/Profile Accepted 2.png'
import jan_worked from '../picture/Group 1.png'
import { Link } from 'react-router-dom';

Info.propTypes = {
    
};

function Info({info}) {

    let icon = (index) => {
        if (index == 1) return (<img src={location} alt='not found' className='icon_location'/>);
        if (index == 2) return (<img src={location_cross} alt='not found' className='icon_location'/>);
        if (index == 3) return (<img src={coll_worked} alt='not found' className='icon_employee'/>);
        return (<img src={jan_worked} alt='not found' className='icon_imployee'/>);
    }

    let infoall = (index) => {
        if (index == 1) return (
            <div className='info_location'>
                <div className='info_icon'>{icon(info.id)}</div>
                <p className='info_content' id='info_content_location'>{info.content}</p>
                <p className='info_script' id='info_script_location'>{info.script}</p>
            </div> 
        )
        if (index == 2) return (
            <div className='info_location_cross'>
                <div className='info_icon'>{icon(info.id)}</div>
                <p className='info_content' id='info_content_locross'>{info.content}</p>
                <p className='info_script' id='info_script_locross'>{info.script}</p>
            </div> 
        )
        if (index == 3) return (
            <Link className='info_coll_worked'>
                <div className='info_icon'>{icon(info.id)}</div>
                <p className='info_content' id='info_content_coll'>{info.content}</p>
                <p className='info_script' id='info_script_coll'>{info.script}</p>
            </Link> 
        )
        return (
            <Link className='info_jan_worked'>
                <div className='info_icon'>{icon(info.id)}</div>
                <p className='info_content' id='info_content_jan'>{info.content}</p>
                <p className='info_script' id='info_script_jan'>{info.script}</p>
            </Link> 
        )
    }
     
    return (
        <div>{infoall(info.id)}</div>
    );
}

export default Info;