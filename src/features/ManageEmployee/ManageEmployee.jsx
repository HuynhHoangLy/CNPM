import React from 'react';
import './styles.css';


function ManageEmployee() {
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
    <div style={{display: "inline-block"}}>
      <table className='tableM'>
        <thead>
          <tr className='head-title'>
            {heads.map((head, headID) => <th key={headID} >{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) =>
            <tr className='' key={index}>
              <th>{data.ID}</th>
              <th>{data.Name}</th>
              <th>{data.Role}</th>
              <th>{data.Phone}</th>
              {data.Status === 'Đã giao việc' ? <th className='completed'>{data.Status}</th> : <th className='uncompleted'>{data.Status}</th>}
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
  );
}

export default ManageEmployee;