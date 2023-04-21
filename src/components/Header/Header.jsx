import React, { Component, useContext } from 'react';
import './styles.css'
import image from './picture/image.png';
import logo from './picture/logo.png';
import { Link } from 'react-router-dom';

function Header() {

    let check = useContext(0);

    return (
        <header id="header">
            <ul>
                <li className="header-left">
                    <em className="logo"><img src={logo} alt="Not found" /></em>
                    <Link to = "/" className="text-logo" onClick={() => {

                    }}>
                        <em className="text-logo-1">UWC</em>
                        <em className="text-logo-2">2.0</em>
                    </Link>
                </li>
                <li className="header-right">
                    <div className='icon'>
                        <Link to = '/' className="icon-home text-logo">
                            <i className="fa-sharp fa-solid fa-house" />
                        </Link>
                        <Link to = '/chat' className="icon-mess">
                            <i className="fa-brands fa-facebook-messenger"/>
                        </Link>
                        <a className="icon-bell">
                            <i className="fa-solid fa-bell"/>
                        </a>
                        <em className='avatar'><img src={image} alt="not found"/></em>
                        <div className='info_account'>
                            <p className='name'>Hoàng Ly</p>
                            <p className='position'>Back officer</p>
                        </div>
                    </div>
                </li>
            </ul>
        </header>
    );
}

export default Header;