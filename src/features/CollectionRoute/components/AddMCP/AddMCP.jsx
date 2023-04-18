import React from 'react';
import './styles.css';
import {CheckCircleIcon, PlusCircleIcon, MapIcon,ChevronDoubleDownIcon, ChevronDoubleUpIcon,XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import OSmap from '../../../../components/Map/OSmap';
function AddMCP() {
    let mcp = []

  return (
    <div style={{display: 'inline-block', position: 'absolute', paddingTop: '80px', width: '85vw', marginLeft:'20px', height: '90vh'}} id='info_size'>
      <div className='addmcp-flexbox-main'>
        <div className='addmcp-flexbox-topbutton'>
            <Link to='./..' className='addmcp-top-button'>
                <CheckCircleIcon style={{height: '70%', width: '40px', color: 'white'}}></CheckCircleIcon>
                 Chọn MCP
            </Link>
        </div>
      <div className='addmcp-map-flexbox'>
        <OSmap/>
      </div>
      </div>
      
    </div>
  );
}

export default AddMCP;