import React from 'react';
import './styles.css'


function ManageAccount() {
  const heads = ['Mã số xe', 'Tên Collector', 'Đang chứa', 'Sức chứa', 'Tình trạng', 'Thao tác']
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
      'Status': "Đang hoạt động"
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
              <th>{data.Now}</th>
              <th>{data.Capacity}</th>
              <th>{data.Status}</th>
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