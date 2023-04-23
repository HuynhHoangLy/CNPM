import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Todopagination from '../../../../components/Page/index';
import { useState, useMemo } from 'react';
import axios from 'axios';

let PageSize = 6;

function ManageVehicle({vehicle, setData}) {

  const heads = ['Mã số xe', 'Loại xe', 'Sức chứa', 'Tiêu thụ xăng', 'Tình trạng', 'Thao tác']
  
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return (vehicle.slice(firstPageIndex, lastPageIndex));
  }, [currentPage]);

  function handleDelete(e) {
    axios
      .delete(`http://localhost:7000/vehicle/${e}`)
      .then(response => console.log(response))
      .catch((error) => console.log(error))
  }

  return (

    <div className='table_manage'>
      <div className='header_manage'>
        <div className='create_content' style={{paddingRight: '21.5vw'}}>{'QUẢN LÝ PHƯƠNG TIỆN'}</div>
        <Link to='./create' className='create_manage' style={{width: '10vw'}}>
          <p>Thêm phương tiện</p>
        </Link>
        <div className='sort_manage'>
          <p>Tìm kiếm theo</p>
        </div>
        <div className='search_manage'>
          <p>Search</p>
        </div>
      </div>
      <div style={{display: "inline-block"}}>
        <table style={{height: '80%', width: '150%', marginLeft: '1vw'}}>
          <thead>
            <tr className='vehicle-head-title'>
              {heads.map((head, headID) => <th className='headV' key={headID} >{head}</th>)}
            </tr>
          </thead>
          <tbody>
          {currentTableData.map((data, index) =>
              <tr style={{textAlign: "center"}} key={index}>
                <th style={{width: '15%'}}>{data.carNumber}</th>
                <th style={{width: '15%'}}>{data.type}</th>
                <th style={{width: '15%'}}>{data.weight}</th>
                <th style={{width: '15%'}}>{data.fuelConsumption}</th>
                {data.status === 'GOOD' ? <th className='completedV' style={{width: '15%'}}>{data.status}</th> : <th className='uncompletedV' style={{width: '15%'}}>{data.status}</th>}
                <th style={{width: '25%'}}>
                  <div className='table-operation'>
                    <Link to={`./info:${data.id}`} className='detail-button' style={{border: 'none'}} onClick={() => setData(data)}>
                      Chi tiết
                    </Link>
                    <div className='delete-button' onClick={() => handleDelete(data.id)}>Xóa</div>
                  </div>
                </th>
              </tr>
            )}
          </tbody>
        </table>
        <div style={{marginLeft: '26vw'}}>
          <Todopagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={vehicle.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageVehicle;