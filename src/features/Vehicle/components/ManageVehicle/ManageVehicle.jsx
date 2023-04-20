import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


function ManageVehicle({vehicle}) {
  const heads = ['Mã số xe', 'Loại xe', 'Sức chứa', 'Tiêu thụ xăng', 'Tình trạng', 'Thao tác']
  const datas = [
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Now': "15",
      'Capacity': "30",
      'Status': "Đang hoạt động"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Now': "15",
      'Capacity': "30",
      'Status': "Đang hoạt động"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Now': "15",
      'Capacity': "30",
      'Status': "Chưa giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Now': "15",
      'Capacity': "30",
      'Status': "Chưa giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Now': "15",
      'Capacity': "30",
      'Status': "Chưa giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Now': "15",
      'Capacity': "30",
      'Status': "Đang hoạt động"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Now': "15",
      'Capacity': "30",
      'Status': "Đang hoạt động"
    },
  ]

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
        <table className='tableM'>
          <thead>
            <tr className='head-title'>
              {heads.map((head, headID) => <th className='headV' key={headID} >{head}</th>)}
            </tr>
          </thead>
          <tbody>
          {vehicle.map((data, index) =>
              <tr className='' key={index}>
                <th className='dataIDV'>{data.carNumber}</th>
                <th className='dataNameV'>{data.type}</th>
                <th className='dataNowV'>{data.weight}</th>
                <th className='dataCapacityV'>{data.fuelConsumption}</th>
                {data.status === 'GOOD' ? <th className='completedV'>{data.status}</th> : <th className='uncompletedV'>{data.status}</th>}
                <th>
                  <div className='table-operation'>
                    <div className='detail-button'>Chi tiết</div>
                    <div className='delete-button'>Xóa</div>
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

export default ManageVehicle;