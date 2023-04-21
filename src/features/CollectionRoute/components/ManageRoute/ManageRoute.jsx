import React from 'react';
import './styles.css';
import { PlusCircleIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function ManageRoute() {
<<<<<<< HEAD
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
      <div className='manage-table-navigation-flexbox'>
          
      </div>
      </div>
      
=======
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
    <div style={{display: 'inline-block', position: 'absolute', paddingTop: '80px', width: '84.1vw', marginLeft:'4vw', height: '100vh'}} id='info_size'>
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
                        {heads.map((head, headID) => <th key={headID} style={{paddingLeft: '3.1vw'}}>{head}</th>)}
                    </tr>
                </thead>
                <tbody style={{backgroundColor: '#f2f2f2'}}>
                    {datas.map((data, index) =>
                        <tr className='' key={index}>
                            <th style={{paddingLeft: '3.2vw'}}>{data.ID}</th>
                            <th style={{paddingLeft: '4.8vw'}}>{data.NumCollectors}</th>
                            <th style={{paddingLeft: '4.8vw'}}>{data.NumMCPs}</th>
                            <th style={{paddingLeft: '6vw'}}>{data.Distance}</th>
                            <th>
                                <div className='table-operation'>
                                <div className='justify-button'>Chỉnh sửa</div>
                                </div>
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='manage-table-navigation-flexbox'></div>
        </div>
>>>>>>> 050e7a250909ba4522cb7227fe2da51fc4b8dcf1
    </div>
  );
}

export default ManageRoute;