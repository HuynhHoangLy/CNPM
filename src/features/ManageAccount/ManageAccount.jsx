import React from 'react';
import './ManageAccount.css'


function ManageAccount() {
  const heads = ['Mã nhân viên', 'Tên', 'Vai trò', 'Số điện thoại', 'EMAIL', 'Thao tác']
  const datas = [
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Email': "VanA@gmail.com"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Email': "VanA@gmail.com"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Email': "VanA@gmail.com"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Email': "VanA@gmail.com"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Email': "VanA@gmail.com"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Email': "VanA@gmail.com"
    },
    {
      'ID': "1234",
      'Name': "Nguyen van A",
      'Role': "Collector",
      'Phone': "0912121212",
      'Email': "VanA@gmail.com"
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
              <th>{data.Email}</th>
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
  );
}

export default ManageAccount;