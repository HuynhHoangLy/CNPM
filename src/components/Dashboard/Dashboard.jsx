import React, { useState } from 'react';
import './styles.css'
import Delete from './picture/Delete.png';
import GroupP from './picture/GroupP.png';
import ProfileOctagon from './picture/ProfileOctagon.png';
import truck from './picture/truck.png';
import { Link } from "react-router-dom";

function Dashboard() {

    const [backgroundColor, setBackgroundcolor] = useState([0,0,0,0,0]);

    let changeBackgroundcolor = (i) => {

        let newData = backgroundColor;
        for (let index = 0; index < newData.length; index++) {
            newData[index] = (index == i) ? 1 : 0;
        }
        setBackgroundcolor(newData => [...newData]);
    };

    return (
        <div className='dashboard'>
            <table className='table'>
                <Link to='/account' id='none'>
                    <div onClick={() => {
                        changeBackgroundcolor(1);
                    }} 
                    className={(backgroundColor[1]==1)?'bgColor':'nonbgColor'}
                    id='first_bg'
                    >
                        <tr className='profileOctagon'>
                            <th scope='row'>
                                <img src={ProfileOctagon} alt="" id='first_icon'/>
                            </th>
                            <td id='manage_account'>
                                Quản lý tài khoản 
                            </td>
                        </tr>
                    </div>   
                </Link>
                <Link to='/employee' id='none'>
                    <div onClick={() => {
                        changeBackgroundcolor(2);
                    }} 
                    className={(backgroundColor[2]==1)?'bgColor':'nonbgColor'}>
                        <tr className='groupP'>
                            <th scope='row'>
                                <img src={GroupP} alt=""/>
                            </th>
                            <td id='manage_employee'>
                                Quản lý nhân viên 
                            </td>
                        </tr>
                    </div>
                </Link>
                <Link to='/collectroute' id='none'>
                    <div onClick={() => {
                        changeBackgroundcolor(3);
                    }} 
                    className={(backgroundColor[3]==1)?'bgColor':'nonbgColor'}>
                        <tr className='delete'>
                            <th scope='row'>
                                <img src={Delete} alt=""/>
                            </th>
                            <td id='manage_route'>
                                Sắp xếp đường đi thu gom rác
                            </td>
                        </tr>
                    </div>
                </Link>
                <Link to='/vehicle' id='none'>
                    <div onClick={() => {
                        changeBackgroundcolor(4);
                    }} 
                    className={(backgroundColor[4]==1)?'bgColor':'nonbgColor'}>
                        <tr className='truck'>
                            <th scope='row'>
                                <img src={truck} alt="" id='final_icon'/>
                            </th>
                            <td id='manage_vehicle'>
                                Quản lý phương tiện
                            </td>
                        </tr>
                    </div>
                </Link>
            </table>
        </div>
    );
}

export default Dashboard;