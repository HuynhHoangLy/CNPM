import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Todopagination from '../../../../components/Page/index';
import { useState, useMemo } from 'react';

let PageSize = 6;

function ManageAccount({users}) {
  
  const heads = ['Mã nhân viên', 'Tên', 'Vai trò', 'Số điện thoại', 'EMAIL', 'Thao tác']

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className='table_manage'>
      <div className='header_manage'>
        <div className='create_content'>{'QUẢN LÝ TÀI KHOẢN'}</div>
        <Link to='./create' className='create_manage'>
          <p>Tạo tài khoản</p>
        </Link>
        <div className='sort_manage'>
          <p>Tìm kiếm theo</p>
        </div>
        <div className='search_manage'>
          <p>Search</p>
        </div>
      </div>
      <div style={{display: "inline-block"}} id='info_size'>
        <table className='tableM'>
          <thead id='head-manage'>
            <tr className='head-title'>
              {heads.map((head, headID) => <th className='head' key={headID} style={{width : head === 'Số điện thoại' ? '200px' : '160px'}}>{head}</th>)}
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) =>
              <tr className='' key={index}>
                <th className='dataID'>{data.id}</th>
                <th className='dataName'>{data.name}</th>
                <th className='dataRole'>{data.fCollector === 1 ? 'Collector' : 'Janitor'}</th>
                <th className='dataPhone'>{data.phone}</th>
                <th className='dataEmail'>{data.email}</th>
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
        <Todopagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default ManageAccount;