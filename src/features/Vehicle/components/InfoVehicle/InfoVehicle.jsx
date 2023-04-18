import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

InfoVehicle.propTypes = {
    
};

function InfoVehicle(props) {

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
            <div className='change_info' style={{top: '-24vh'}}>
                <button type='submit' className='submit' id='submit'>Lưu thay đổi</button>
                <button type='submit' className='submit' id='submit' onClick={() => {
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
               <form action="" method="post">
                    <ul className='left_info'>
                        <li className='Hoten'>
                            <label htmlFor='name'>Mã số xe</label>
                            <input type="text" id='name' style={{width: '14vw'}}/>
                        </li>
                        <li className='Namsinh'> 
                            <label htmlFor='year_born'>Trạng thái</label>
                            <input type="text" id='year_born' style={{width: '14vw'}}/>
                        </li>
                        <li className='ID'>
                            <label htmlFor="id_number">Biển số xe</label>
                            <input type='text' id='id_number' style={{width: '14vw'}}/>
                        </li>
                    </ul>
                    <ul className='right_info'>
                         <li className='Email'>
                              <label htmlFor='email'>Tên Collector</label>
                              <input type="text" id='email' style={{width: '14vw'}}/>
                         </li>
                         <li className='Password'>
                              <label htmlFor='password'>Mã nhân viên</label>
                              <input type="text" id='password' style={{width: '14vw'}}/>
                         </li> 
                         <li className='Job'>
                              <label htmlFor='job'>Sức chứa phương tiện</label>
                              <input type="text" id='job' style={{width: '14vw'}}/>
                         </li>
                    </ul>
                    {change_info(check)}
               </form> 
            </div>
        </div>
    );
}

export default InfoVehicle;