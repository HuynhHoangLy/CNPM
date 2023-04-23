import React from 'react';
import './styles.css';
import { PlusCircleIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';
import { data } from '../../../../components/Data/data';

function ManageRoute(value, setValue) {

    const heads = ['ID', 'Collector', 'Số MCP', 'Quãng đường', 'Thao tác']
    const datas = data.routes.map((x) => x)

return (
    <div style={{display: 'inline-block', position: 'absolute', paddingTop: '80px', width: '84.1vw', marginLeft:'4vw', height: '100vh'}} id='info_size'>
        <div className='flexbox-main'>
            <div className='flexbox-top-button'>
                <Link to='./create' className='add-button'>
                    <PlusCircleIcon style={{height: '70%', width: '40px', color: 'white'}}></PlusCircleIcon>
                    Thêm
                </Link>
            </div>
            <table className='table-route'>
                <thead>
                    <tr style={{textAlign: 'center'}} className='manage-head-title'>
                        {heads.map((head, headID) => <th key={headID}>{head}</th>)}
                    </tr>
                </thead>
                <tbody style={{backgroundColor: '#f2f2f2'}}>
                    {datas.map((dat, index) =>
                        <tr className='' style={{textAlign: 'center'}} key={index}>
                            <th style={{width: '20%'}}>{dat.id}</th>
                            <th style={{width: '20%'}}>{dat.collectors}</th>
                            <th style={{width: '20%'}}>{dat.mcps.length}</th>
                            <th style={{width: '20%'}}>{dat.dist}</th>
                            <th style={{width: '20%'}}>
                                <div className='manage-table-operation'>
                                  
                                <Link to='./create' className='justify-button' onClick={() => {setValue(data.routes.find((ele) => { return ele.id == dat.id} ).mcps)}}>Chỉnh sửa</Link>
                                
                                </div>
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='manage-table-navigation-flexbox'></div>
        </div>
    </div>
  );
}

export default ManageRoute;