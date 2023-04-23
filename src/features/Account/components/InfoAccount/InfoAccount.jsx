import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import axios from 'axios';

InfoAccount.propTypes = {
    
};

function InfoAccount({info}) {

    const [check,setCheck] = useState(0);
    const [p, setP] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
   });

    function handleDelete(e) {
        axios
          .delete(`http://localhost:7000/worker/${e}`)
          .then(response => console.log(response))
          .catch((error) => console.log(error))
    }

    const handleInput = (e) => {
        setP({...p, [e.target.name]: e.target.value})
    }

    async function handleSave(e) {
        await axios 
            .patch(`http://localhost:7000/worker/${info.id}`, {p})
            .then(response => console.log(response))
            .catch((err) => console.log(err))
    }

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
                <button className='submit' id='submit' onClick={() => {
                        setCheck(1-check)
                    }} style={{background: '#7D8EC4'}}>Hủy thay đổi</button>
                <button className='submit final_submit' id='submit' style={{background: '#1A374D', color: '#FFF'}}
                        onClick={() => handleDelete(info.id)}
                >
                    Xóa tài khoản
                </button>
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
               <form action="" method="post" onSubmit={handleSave}>
                    <ul className='left_info'>
                        <li className='Hoten'>
                            <label htmlFor='name'>Họ và tên</label>
                            <input type="text" id='name' style={{width: '14vw'}} placeholder={info.name} name='name' onChange={handleInput}/>
                        </li>
                        <li className='Namsinh'> 
                            <label htmlFor='year_born'>Số điện thoại</label>
                            <input type="text" id='year_born' style={{width: '14vw'}} placeholder={info.phone} name='phone' onChange={handleInput}/>
                        </li>
                        <li className='ID'>
                            <label htmlFor="id_number">Mã nhân viên</label>
                            <input type='text' id='id_number' style={{width: '14vw'}} placeholder={info.id} name='id' onChange={handleInput}/>
                        </li>
                    </ul>
                    <ul className='right_info'>
                         <li className='Email'>
                              <label htmlFor='email'>Email</label>
                              <input type="email" id='email' style={{width: '14vw'}} placeholder={info.email} name='email' onChange={handleInput}/>
                         </li>
                         <li className='Password'>
                              <label htmlFor='password'>Password</label>
                              <input type="password" id='password' style={{width: '14vw'}}/>
                         </li> 
                         <li className='Job'>
                              <label htmlFor='job'>Vai trò</label>
                              <select name="role" id="job" style={{width: '14vw'}} placeholder={info.fCollector === 1 ? 'Collector' : 'Janitor'} onChange={handleInput}>
                                   {/* <option value=""></option> */}
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