import React, { Component } from 'react';
import './styles.css'
import image from './picture/image.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id="header">
            <ul>
                <li className="header-left">
                    <em className="logo"><img src="logo.png" alt="Not found" /></em>
                    <Link to = "/" className="text-logo">
                        <em className="text-logo-1">UWC</em>
                        <em className="text-logo-2">2.0</em>
                    </Link>
                </li>
                <li className="header-right">
                    <div className='icon'>
                        <a className="icon-home">
                            <i className="fa-sharp fa-solid fa-house" />
                        </a>
                        <a className="icon-mess">
                            <i className="fa-brands fa-facebook-messenger"/>
                        </a>
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