import React from 'react';
import './styles.css'
import Delete from './picture/Delete.png';
import GroupP from './picture/GroupP.png';
import ProfileOctagon from './picture/ProfileOctagon.png';
import truck from './picture/truck.png';
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className='dashboard'>
            <table className='table'>
                <Link to='/account' id='none'>
                    <tr className='profileOctagon'>
                        <th scope='row'>
                            <img src={ProfileOctagon} alt="" id='first_icon'/>
                        </th>
                        <td id='manage_account'>
                            Quản lý tài khoản 
                        </td>
                    </tr>   
                </Link>
                <Link to='/employee' id='none'>
                    <tr className='groupP'>
                        <th scope='row'>
                            <img src={GroupP} alt=""/>
                        </th>
                        <td id='manage_employee'>
                            Quản lý nhân viên 
                        </td>
                    </tr>
                </Link>
                <Link to='/collectroute' id='none'>
                    <tr className='delete'>
                        <th scope='row'>
                            <img src={Delete} alt=""/>
                        </th>
                        <td id='manage_route'>
                            Sắp xếp đường đi thu gom rác
                        </td>
                    </tr>
                </Link>
                <Link to='/vehicle' id='none'>
                    <tr className='truck'>
                        <th scope='row'>
                            <img src={truck} alt="" id='final_icon'/>
                        </th>
                        <td id='manage_vehicle'>
                            Quản lý phương tiện
                        </td>
                    </tr>
                </Link>
            </table>
        </div>
    );
}

export default Dashboard;