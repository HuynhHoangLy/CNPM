import React from 'react';
import './styles.css';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function ManageRoute() {
  const heads = ['ID', 'Collector', 'Số MCP', 'Quãng đường', 'Thao tác']
  const datas = [
    {
      'ID': "02",
      'NumCollectors': "2",
      'NumMCPs': "5",
      'Distance': "12"
    },
    {
      'ID': "02",
      'NumCollectors': "2",
      'NumMCPs': "5",
      'Distance': "13"
    },
    {
      'ID': "02",
      'NumCollectors': "2",
      'NumMCPs': "5",
      'Distance': "12"
    },
    {},
    {},
    {}
  ]

  return (
    <div style={{display: 'inline-block', position: 'absolute', paddingTop: '80px', width: '85vw', marginLeft:'20px', height: '100vh'}} id='info_size'>
      <div className='flexbox-main'>
        <div className='flexbox-topbutton'>
          <Link to='./create' className='add-button'>
            <PlusCircleIcon style={{height: '70%', width: '40px', color: 'white'}}></PlusCircleIcon>
              Thêm
          </Link>
        </div>
      <table className='table-route'>
        <thead>
          <tr className='head-title'>
            {heads.map((head, headID) => <th key={headID} >{head}</th>)}
          </tr>
        </thead>
        <tbody style={{backgroundColor: '#f2f2f2'}}>
          {datas.map((data, index) =>
            <tr className='' key={index}>
              <th>{data.ID}</th>
              <th>{data.NumCollectors}</th>
              <th>{data.NumMCPs}</th>
              <th>{data.Distance}</th>
              <th>
                <div className='table-operation'>
                  <div className='justify-button'>Chỉnh sửa</div>
                </div>
              </th>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default ManageRoute;