import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Todopagination from '../../../../components/Page/index';
import { useState, useMemo } from 'react';
import InfoAccount from '../InfoAccount/InfoAccount';
import '../../../../components/styles.css';

let PageSize = 6;

function ManageAccount({users}) {
  
  const heads = ['Mã nhân viên', 'Tên', 'Vai trò', 'Số điện thoại', 'EMAIL', 'Thao tác']

  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return (users.slice(firstPageIndex, lastPageIndex));
  }, [currentPage]);

  const togleModal = () => {
    setModal(!modal);
  };

  if(modal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')

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
        <table style={{height: '80%', width: '100%', marginLeft: '1vw'}}>
          <thead id='head-manage'>
            <tr className='head-title' style={{textAlign: 'center'}}>
              {heads.map((head, headID) => <th key={headID}>{head}</th>)}
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((data, index) =>
              <tr id='manage_account' style={{textAlign: 'center'}} key={index}>
                <th style={{width: '15%'}}>{data.id}</th>
                <th style={{width: '20%'}}>{data.name}</th>
                <th style={{width: '15%'}}>{data.fCollector === 1 ? 'Collector' : 'Janitor'}</th>
                <th style={{width: '15%'}}>{data.phone}</th>
                <th style={{width: '15%'}}>{data.email}</th>
                <th style={{width: '20%'}}>
                  <div className='table-operation'>
                    <button className='detail-button' style={{border: 'none'}} onClick={togleModal}> 
                      Chi tiết
                    </button>
                    {modal && (
                     <div className="modal">
                      <div className="overlay" onClick={togleModal}></div>
                      {/* <InfoAccount info={data}/> */}
                     </div> 
                    )}
                    <div className='delete-button'>Xóa</div>
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

export default ManageAccount;