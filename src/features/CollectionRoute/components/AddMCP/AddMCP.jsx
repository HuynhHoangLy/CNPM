import React from 'react';
import './styles.css';
import {CheckCircleIcon, PlusCircleIcon, MapIcon,ChevronDoubleDownIcon, ChevronDoubleUpIcon,XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import OSmap from '../../../../components/Map/OSmap';
import { Marker } from 'react-leaflet';
import { useState } from 'react';
import { markerIconRed, markerIconRedBold } from '../../../../components/Map/OSmap';

function AddMCP({value, setvalue}) {
    const mcps = [
        [10.881910, 106.804845], 
        [10.876739, 106.802029], 
        [10.875483, 106.799275], 
        [10.871069, 106.802225],
        [10.881069, 106.803525],
        [10.870109, 106.802225],
        [10.882739, 106.702225]
    ]

    const [marker, setMarker] = useState(mcps.map((ele) => {
        if(value.find((v) => v[0] == ele[0] && v[1]==ele[1]) != undefined)
            return markerIconRedBold;
        else return markerIconRed;
    }))
    const [chosenMCPs, setChosenMCPs] = useState(value);
    
    const handleChooseMCP = (point, index) => {
        let tempMCP = chosenMCPs.map((x) => x);
        let tempMarker = marker.map((x) => x);
        const i = tempMCP.find((ele) => (ele[0] == point[0] && ele[1] == point[1]));
        if (i == undefined) {
            tempMCP.push(point);
            tempMarker[index] = markerIconRedBold;
        } 
        else {
            tempMCP.splice(i,1);
            tempMarker[index] = markerIconRed;
        }
        setMarker(tempMarker);
        setChosenMCPs(tempMCP);
    }

  return (
    <div style={{display: 'inline-block', position: 'absolute', paddingTop: '80px', width: '85vw', marginLeft:'20px', height: '90vh'}} id='info_size'>
        <div className='addmcp-flexbox-main'>
            <div className='addmcp-flexbox-topbutton'>
                <Link to='./..' className='addmcp-top-button' onClick={() => {setvalue(chosenMCPs.map((x) => x))}}>
                    <CheckCircleIcon style={{height: '70%', width: '40px', color: 'white'}}></CheckCircleIcon>
                    Chọn MCP
                </Link>
            </div>
            <div className='addmcp-map-flexbox'>
                <OSmap>
                {
                    mcps != undefined ? mcps.map((mcp, index) => 
                        <Marker id={index} icon={marker[index]} position={mcp} 
                                eventHandlers={{click: () => {handleChooseMCP(mcp,index)}}}>
                        </Marker>
                    ) : <></>
                }
                </OSmap>
            </div>
        </div>
    </div>
  );
}

export default AddMCP;