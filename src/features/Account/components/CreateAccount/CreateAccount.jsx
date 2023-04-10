import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import logo from '../picture/logo.png';

CreateAccount.propTypes = {
    
};

function CreateAccount(props) {
    return (
        <div className='create_account'>
            <div className='create_content'>{'QUẢN LÝ TÀI KHOẢN   >  TẠO TÀI KHOẢN'}</div>
            <div className='border_create'>
               <div className='header-left_mini'>
                    <em className='logo_mini'><img src={logo} alt='Not found'/></em>
                    <div className='text-logo-mini'>
                         <em className='text-logo-1-mini'>UWC</em>
                         <em className='text-logo-2-mini'>2.0</em>
                    </div>
               </div>
               <form action="" method="post" id='form'>
                    <ul>
                         <li className='Hoten'>
                              <label htmlFor='name'>Họ và tên</label>
                              <input type="text" id='name'/>
                         </li>
                         <li className='Namsinh'> 
                              <label htmlFor='year_born'>Năm sinh</label>
                              <input type="date" id='year_born'/>
                         </li>
                         <li className='Email'>
                              <label htmlFor='email'>Email</label>
                              <input type="email" id='email'/>
                         </li>
                         <li className='Password'>
                              <label htmlFor='password'>Password</label>
                              <input type="password" id='password'/>
                         </li> 
                         <li className='Job'>
                              <label htmlFor='job'>Vai trò</label>
                              <select name="" id="job">
                                   <option value=""></option>
                                   <option value="collector">Collector</option>
                                   <option value="janitor">Janitor</option>
                              </select>
                         </li>
                    </ul>
                    <button type='submit' id='submit'>Tạo tài khoản</button>
               </form> 
            </div>
        </div>
    );
}

export default CreateAccount;