import React, { useState } from 'react';
import './styles.css'
import Delete from './picture/Delete.png';
import GroupP from './picture/GroupP.png';
import ProfileOctagon from './picture/ProfileOctagon.png';
import truck from './picture/truck.png';
import { Link } from "react-router-dom";

function Dashboard({initBackground}) {

    return (
        <div className='dashboard'>
            <table className='table'>
                <Link to='/account' id='none'>
                    <div
                    className={(initBackground == 1)?'bgColor':'nonbgColor'}
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
                    <div
                    className={(initBackground == 2)?'bgColor':'nonbgColor'}
                    >
                        <tr className='groupP'>
                            <th scope='row'>
                                <img src={GroupP} alt="" id='second_icon'/>
                            </th>
                            <td id='manage_employee'>
                                Quản lý nhân viên 
                            </td>
                        </tr>
                    </div>
                </Link>
                <Link to='/route' id='none'>
                    <div
                    className={(initBackground == 3)?'bgColor':'nonbgColor'}>
                        <tr className='delete'>
                            <th scope='row'>
                                <img src={Delete} alt="" id='third_icon'/>
                            </th>
                            <td id='manage_route'>
                                Sắp xếp đường đi thu gom rác
                            </td>
                        </tr>
                    </div>
                </Link>
                <Link to='/vehicle' id='none'>
                    <div
                    className={(initBackground == 4)?'bgColor':'nonbgColor'}>
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