import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function ManageEmployee({users}) {
  const heads = ['Mã nhân viên', 'Tên', 'Vai trò', 'Số điện thoại', 'Tình trạng', 'Thao tác']
  const datas = [
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Status': "Đã giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Status': "Chưa giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Janitor",
      'Phone': "0912121212",
      'Status': "Chưa giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Status': "Đã giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Status': "Đã giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Janitor",
      'Phone': "0912121212",
      'Status': "Chưa giao việc"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Janitor",
      'Phone': "0912121212",
      'Status': "Đã giao việc"
    },
  ]

  return (
    <div className='table_manage'>
      <div className='header_manage'>
        <div className='create_content' style={{paddingRight: '25.51vw'}}>{'QUẢN LÝ NHÂN VIÊN'}</div>
        <Link to='./create' className='create_manage'>
          <p>Lịch làm việc</p>
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
              <th className='head'>Mã nhân viên</th>
              <th className='head'>Tên</th>
              <th className='head'>Vai trò</th>
              <th className='head' style={{width: '200px'}}>Số điện thoại</th>
              <th className='head'>Tình trạng</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) =>
              <tr className='' key={index}>
                <th className='dataID'>{data.id}</th>
                <th className='dataName'>{data.name}</th>
                <th className='dataRole'>{data.fCollector === 1 ? 'Collector' : 'Janitor'}</th>
                <th className='dataPhone'>{data.phone}</th>
                {Math.random() < 0.5 ? <th className='completed'>{'Đã giao việc'}</th> : <th className='uncompleted'>{'Chưa giao việc'}</th>}
                <th>
                  <div className='table-operation'>
                    <div className='detail-button'>Giao việc</div>
                    <div className='delete-button'>Hủy việc</div>
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

export default ManageEmployee;