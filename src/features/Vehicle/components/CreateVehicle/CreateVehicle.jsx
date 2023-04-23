import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../picture/logo.png';
import axios from 'axios';

CreateAccount.propTypes = {
    
};

function CreateAccount(props) {

     const [p, setP] = useState({
          vehicleNumber: '',
          type: '',
          status: '',
          weight: '',
          fuelConsumption: '',
     });

     const handleInput = (e) => {
          setP({...p, [e.target.name]: e.target.value});
     }
 
     async function handleSubmit(event) {
          event.preventDefault();
          console.log(p)
          await axios
               .get('http://localhost:7000/worker')
               .then(res => console.log(res.data.vehicles))
               .catch(err => console.log(err))

          return await fetch('http://localhost:7000/vehicle/create', {
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
            <div className='create_content'>{'QUẢN LÝ PHƯƠNG TIỆN   >  THÊM PHƯƠNG TIỆN'}</div>
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
                              <label htmlFor='name'>Mã số xe</label>
                              <input type="text" id='name' name="name" onChange={handleInput}/>
                         </li>
                         <li className='Namsinh'> 
                              <label htmlFor='year_born'>Loại xe</label>
                              <input type="text" id='year_born' name="phone" onChange={handleInput}/>
                         </li>
                         <li className='Email'>
                              <label htmlFor='email'>Sức chứa</label>
                              <input type="text" id='email' name="email" onChange={handleInput}/>
                         </li>
                         <li className='Password'>
                              <label htmlFor='password'>Tiêu thụ xăng</label>
                              <input type="password" id='password' name="password" onChange={handleInput}/>
                         </li> 
                         <li className='Job'>
                              <label htmlFor='job'>Tình trạng</label>
                              <select name="role" id="job" onChange={handleInput}>
                                   <option value=""></option>
                                   <option value="collector">GOOD</option>
                                   <option value="janitor">BROKEN</option>
                              </select>
                         </li>
                    </ul>
                    <button type='submit' className='submit'>Thêm phương tiện</button>
               </form> 
            </div>
        </div>
    );
}

export default CreateAccount;