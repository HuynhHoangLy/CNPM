import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

InfoAccount.propTypes = {
    
};

function InfoAccount({info}) {

    const [check,setCheck] = useState(0);

    const change_info = (check) => {
        if (check == 0) {
            return (
                <div className='edit_info' onClick={() => {
                    setCheck(1-check)
                }}>
                    <p>Chỉnh sửa</p>           
                </div>
            )
        }
        return (
            <div className='change_info'>
                <button type='submit' className='submit' id='submit'>Lưu thay đổi</button>
                <button type='submit' className='submit' id='submit' onClick={() => {
                        setCheck(1-check)
                    }} style={{background: '#7D8EC4'}}>Hủy thay đổi</button>
                <button type='submit' className='submit final_submit' id='submit' style={{background: '#1A374D', color: '#FFF'}}>Xóa tài khoản</button>
            </div>
        )
    }

    return (
        <div className='info'>
            <div className='create_content'>{'QUẢN LÝ TÀI KHOẢN   >  CHI TIẾT'}</div>
            <div className='header-mini'>
                <p>Thông tin cá nhân</p>
            </div>
            <div className='border_info'>
               <form action="" method="post">
                    <ul className='left_info'>
                        <li className='Hoten'>
                            <label htmlFor='name'>Họ và tên</label>
                            <input type="text" id='name' style={{width: '14vw'}}/>
                        </li>
                        <li className='Namsinh'> 
                            <label htmlFor='year_born'>Năm sinh</label>
                            <input type="date" id='year_born' style={{width: '14vw'}}/>
                        </li>
                        <li className='ID'>
                            <label htmlFor="id_number">Mã nhân viên</label>
                            <input type='text' id='id_number' style={{width: '14vw'}}/>
                        </li>
                    </ul>
                    <ul className='right_info'>
                         <li className='Email'>
                              <label htmlFor='email'>Email</label>
                              <input type="email" id='email' style={{width: '14vw'}}/>
                         </li>
                         <li className='Password'>
                              <label htmlFor='password'>Password</label>
                              <input type="password" id='password' style={{width: '14vw'}}/>
                         </li> 
                         <li className='Job'>
                              <label htmlFor='job'>Vai trò</label>
                              <select name="" id="job" style={{width: '14vw'}}>
                                   <option value=""></option>
                                   <option value="collector">Collector</option>
                                   <option value="janitor">Janitor</option>
                              </select>
                         </li>
                    </ul>
                    {change_info(check)}
               </form> 
            </div>
        </div>
    );
}

export default InfoAccount;