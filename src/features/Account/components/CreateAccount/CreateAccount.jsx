import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import logo from '../picture/logo.png';
import axios from 'axios';

CreateAccount.propTypes = {
    
};

function CreateAccount(props) {

     const [p, setP] = useState({
          name: '',
          email: '',
          phone: '',
          password: '',
          role: '',
     });

     const handleInput = (e) => {
          setP({...p, [e.target.name]: e.target.value});
     }
 
     async function handleSubmit(event) {
          event.preventDefault();
          console.log(p)
          await axios
               .get('http://localhost:7000/worker')
               .then(res => console.log(res.data.workers))
               .catch(err => console.log(err))

          return await fetch('http://localhost:7000/worker/create', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(p)
          })
          .then (data => data.json())
     }

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
               <form action="" method="post" id='form' onSubmit={handleSubmit}>
                    <ul>
                         <li className='Hoten'>
                              <label htmlFor='name'>Họ và tên</label>
                              <input type="text" id='name' name="name" onChange={handleInput}/>
                         </li>
                         <li className='Namsinh'> 
                              <label htmlFor='year_born'>Số điện thoại</label>
                              <input type="text" id='year_born' name="phone" onChange={handleInput}/>
                         </li>
                         <li className='Email'>
                              <label htmlFor='email'>Email</label>
                              <input type="email" id='email' name="email" onChange={handleInput}/>
                         </li>
                         <li className='Password'>
                              <label htmlFor='password'>Password</label>
                              <input type="password" id='password' name="password" onChange={handleInput}/>
                         </li> 
                         <li className='Job'>
                              <label htmlFor='job'>Vai trò</label>
                              <select name="role" id="job" onChange={handleInput}>
                                   <option value=""></option>
                                   <option value="collector">Collector</option>
                                   <option value="janitor">Janitor</option>
                              </select>
                         </li>
                    </ul>
                    <button type='submit' className='submit'>Tạo tài khoản</button>
               </form> 
            </div>
        </div>
    );
}

export default CreateAccount;