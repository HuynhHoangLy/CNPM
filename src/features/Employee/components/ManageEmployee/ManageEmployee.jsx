import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Todopagination from '../../../../components/Page';
import { useState, useMemo } from 'react';

let PageSize = 6;

function ManageEmployee({users}) {

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return (users.slice(firstPageIndex, lastPageIndex));
  }, [currentPage]);

  return (
    <div className='table_manage'>
      <div className='header_manage'>
        <div className='create_content' style={{paddingRight: '25.51vw'}}>{'QUẢN LÝ NHÂN VIÊN'}</div>
        <Link to='./schedule' className='create_manage'>
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
        <table style={{height: '80%', width: '100%', marginLeft: '1vw'}}>
          <thead>
            <tr className='employee-head-title'>
              <th className='head' style={{width: '15%'}}>Mã nhân viên</th>
              <th className='head' style={{width: '25%'}}>Tên</th>
              <th className='head' style={{width: '10%'}}>Vai trò</th>
              <th className='head' style={{width: '15%'}}>Số điện thoại</th>
              <th className='head' style={{width: '10%'}}>Tình trạng</th>
              <th style={{width: '25%'}}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((data, index) =>
              <tr className='' key={index} style={{textAlign: 'center'}}>
                <th>{data.id}</th>
                <th>{data.name}</th>
                <th>{data.fCollector === 1 ? 'Collector' : 'Janitor'}</th>
                <th>{data.phone}</th>
                {data.email.search('com') === -1 ? <th className='completed'>{'Đã giao việc'}</th> : <th className='uncompleted'>{'Chưa giao việc'}</th>}
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
        <div style={{marginLeft: '26vw'}}>
        <Todopagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
        </div>
      </div>
    </div>
  );
}

export default ManageEmployee;