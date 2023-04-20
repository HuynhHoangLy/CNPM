import React from 'react';
import './styles.css';
import { CheckCircleIcon, PlusCircleIcon, MapIcon,ChevronDoubleDownIcon, ChevronDoubleUpIcon,XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import OSmap from '../../../../components/Map/OSmap';
import { useState } from 'react';
import { getMCP } from '../..';
import { markerIconRed } from '../../../../components/Map/OSmap';
import { Marker } from 'react-leaflet';

function CreateRoute({value, setvalue}) {

    const heads = ['Thứ tự', 'ID', 'Thao tác'];
    const [mcps, setMCPs] = useState(value != [] ? value.map((ele) => getMCP(ele)) : []);

    const handleDelete = (index) => {
        // let temp1 = mcps.map((ele) => {return ele});
        let temp2 = value.map((ele)=> ele);
        // temp1.splice(index,1);
        temp2.splice(index,1);
        // setMCPs(temp1);
        setvalue(temp2);
    }

    const handleMoveUp = (index) => {
        if(index == 0) return;
        // let temp1 = mcps.map((ele) => {return ele});
        let temp2 = value.map((ele)=> {return ele});
        // [temp1[index-1], temp1[index]] = [temp1[index], temp1[index-1]]
        [temp2[index-1], temp2[index]] = [temp2[index], temp2[index-1]]
        // setMCPs(temp1);
        setvalue(temp2);
    }

    const handleMoveDown = (index) => {
        if(index == mcps.length-1 || mcps[index+1] == null) return;
        // let temp1 = mcps.map((ele) => {return ele});
        let temp2 = value.map((ele)=> ele);
        // [temp1[index+1], temp1[index]] = [temp1[index], temp1[index+1]]
        [temp2[index+1], temp2[index]] = [temp2[index], temp2[index+1]]
        // setMCPs(temp1);
        setvalue(temp2);
    }

return (
    <div style={{display: 'inline-block', position: 'absolute', paddingTop: '80px', width: '85vw', marginLeft:'20px', height: '170vh'}} id='info_size'>
        <div className='create-flexbox-main'>
            <div className='create-flexbox-topbutton'>
                <Link to='../' className='create-top-button' onClick={ () => {}}>
                    <CheckCircleIcon style={{height: '70%', width: '40px', color: 'white'}}></CheckCircleIcon>
                    Xác nhận
                </Link>            
                <Link className='create-top-button' onClick={ () => {}}>
                    <MapIcon style={{height: '70%', width: '40px', color: 'white'}}></MapIcon>
                    Tạo Đường
                </Link>
                <Link to='./add' className='create-top-button'>
                    <PlusCircleIcon style={{height: '70%', width: '40px', color: 'white'}}></PlusCircleIcon>
                    Thêm MCP
                </Link>
            </div>
        <table className='create-table-mcp' style={{height: (mcps.length+1)*40 + 'px'}}>
            <thead>
            <tr className='create-head-title'>
                {heads.map((head, headID) => <th key={headID} >{head}</th>)}
            </tr>
            </thead>
            <tbody style={{backgroundColor: '#f6f6f6'}}>
            {value.map((data, index) =>
                <tr className='' key={index}>
                    <th style={{width: '15%'}}>{index+1}</th>
                    <th style={{width: '15%'}}>{getMCP(data).ID}</th>
                    <th style={{width: '70%'}} >
                        { data === null ? null :
                        <div className='create-table-operation-flexbox'>
                            <div className='create-justify-button' style={{backgroundColor: '#ffff4d'}}>Thông tin</div>
                            <div className='create-justify-button' onClick={() => handleMoveUp(index)}>
                                <ChevronDoubleUpIcon style={{height: '70%', width: '40px', color: 'black'}}></ChevronDoubleUpIcon>
                            </div>
                            <div className='create-justify-button' onClick={() => handleMoveDown(index)}>
                                <ChevronDoubleDownIcon style={{height: '70%', width: '40px', color: 'black'}} ></ChevronDoubleDownIcon>
                            </div>
                            <div
                            className='create-justify-button'
                            style={{background: '#eb4034'}}
                            onClick={() => handleDelete(index)}>
                                <XMarkIcon style={{height: '70%', width: '40px', color: 'black'}}></XMarkIcon>
                            </div>
                        </div>
                        }
                    </th>
                </tr>
            )}
            </tbody>
        </table>
        <div className='create-map-flexbox'>
            <OSmap>
            {
                value != [] ? value.map((mcp, index) => 
                    <Marker id={index} icon={markerIconRed} position={mcp}></Marker>
                ) : <></>
            }
            </OSmap>
        </div>
        </div>
    </div>
  );
}

export default CreateRoute;