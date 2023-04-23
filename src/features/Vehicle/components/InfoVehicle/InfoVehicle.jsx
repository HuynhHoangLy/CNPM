import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

InfoVehicle.propTypes = {
    
};

function InfoVehicle({vehicle}) {

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
            .patch(`http://localhost:7000/worker/${vehicle.id}`, {p})
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
            <div className='change_info' style={{top: '-27vh', left: '8.1vw'}}>
                <button type='submit' className='submit' id='submit'>Lưu thay đổi</button>
                <button className='submit' id='submit' onClick={() => {
                        setCheck(1-check)
                    }} style={{background: '#7D8EC4'}}>Hủy thay đổi</button>
            </div>
        )
    }

    return (
        <div className='info'>
            <div className='create_content'>{'QUẢN LÝ PHƯƠNG TIỆN   >  GIAO VIỆC'}</div>
            <div className='header-mini' style={{left: '30vw'}}>
                <p>Thông tin phương tiện</p>
            </div>
            <div className='border_info'>
               <form action="" method="post" onSubmit={handleSave}>
                    <ul className='left_info'>
                        <li className='Hoten'>
                            <label htmlFor='name'>Mã số xe</label>
                            <input type="text" id='name' style={{width: '14vw'}} placeholder={vehicle.id} name='id' onChange={handleInput}/>
                        </li>
                        <li className='Namsinh'> 
                            <label htmlFor='year_born'>Trạng thái</label>
                            <input type="text" id='year_born' style={{width: '14vw'}} placeholder={vehicle.status} name='status' onChange={handleInput}/>
                        </li>
                        <li className='ID'>
                            <label htmlFor="id_number">Biển số xe</label>
                            <input type='text' id='id_number' style={{width: '14vw'}} placeholder={vehicle.carNumber} name='carNumber' onChange={handleInput}/>
                        </li>
                    </ul>
                    <ul className='right_info'>
                         <li className='Email'>
                              <label htmlFor='email'>Loại xe</label>
                              <input type="text" id='email' style={{width: '14vw'}} placeholder={vehicle.type} name='type' onChange={handleInput}/>
                         </li>
                         <li className='Password'>
                              <label htmlFor='password'>Tải trọng</label>
                              <input type="text" id='password' style={{width: '14vw'}} placeholder={vehicle.weight} name='weight' onChange={handleInput}/>
                         </li> 
                         <li className='Job'>
                              <label htmlFor='job'>Tiêu thụ nhiên liệu</label>
                              <input type="text" id='job' style={{width: '14vw'}} placeholder={vehicle.fuelConsumption} name='fuelConsumption' onChange={handleInput}/>
                         </li>
                    </ul>
                    {change_info(check)}
               </form> 
            </div>
        </div>
    );
}

export default InfoVehicle;