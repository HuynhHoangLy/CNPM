import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Helmet } from 'react-helmet';
import attachFile from './img/attachFile.jpg';
import attachPicture from './img/attachPicture.jpg';
import Celery from './img/Celery.jpg';
import Chives from './img/Chives.jpg';
import Fennel from './img/Fennel.jpg';
import Kale from './img/Kale.jpg';
import Parsley from './img/Parsley.jpg';
import Seaweed from './img/Seaweed.jpg';
import Spinach from './img/Spinach.jpg';
import Squashes from './img/Squashes.jpg';
import Tomato from './img/Tomato.jpg';
import Turnip from './img/Turnip.jpg';
import { Spin } from 'antd';

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';

// Chat.propTypes = {

// };

// function Chat(props) {
//     return (
//         <div>
//             {/* char-area */}
//             <section className="message-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="chat-area">
//                                 {/* chatlist */}
//                                 <div className="chatlist">
//                                     <div className="modal-dialog-scrollable">
//                                         <div className="modal-content">
//                                             <div className="chat-header">
//                                                 <div className="msg-search">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         id="inlineFormInputGroup"
//                                                         placeholder="Search"
//                                                         aria-label="search"
//                                                     />
//                                                     <a className="add" href="#">
//                                                         <img
//                                                             className="img-fluid"
//                                                             src="https://mehedihtml.com/chatbox/assets/img/add.svg"
//                                                             alt="add"
//                                                         />
//                                                     </a>
//                                                 </div>
//                                                 <ul className="nav nav-tabs" id="myTab" role="tablist">
//                                                     <li className="nav-item" role="presentation">
//                                                         <button
//                                                             className="nav-link active"
//                                                             id="Open-tab"
//                                                             data-bs-toggle="tab"
//                                                             data-bs-target="#Open"
//                                                             type="button"
//                                                             role="tab"
//                                                             aria-controls="Open"
//                                                             aria-selected="true"
//                                                         >
//                                                             Open
//                                                         </button>
//                                                     </li>
//                                                     <li className="nav-item" role="presentation">
//                                                         <button
//                                                             className="nav-link"
//                                                             id="Closed-tab"
//                                                             data-bs-toggle="tab"
//                                                             data-bs-target="#Closed"
//                                                             type="button"
//                                                             role="tab"
//                                                             aria-controls="Closed"
//                                                             aria-selected="false"
//                                                         >
//                                                             Closed
//                                                         </button>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                             <div className="modal-body">
//                                                 {/* chat-list */}
//                                                 <div className="chat-lists">
//                                                     <div className="tab-content" id="myTabContent">
//                                                         <div
//                                                             className="tab-pane fade show active"
//                                                             id="Open"
//                                                             role="tabpanel"
//                                                             aria-labelledby="Open-tab"
//                                                         >
//                                                             {/* chat-list */}
//                                                             <div className="chat-list">
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Tomato}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                         <span className="active" />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Tomato</h3>
//                                                                         <p>Collector</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Turnip}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Turnip</h3>
//                                                                         <p>Collector</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Seaweed}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                         <span className="active" />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Seaweed</h3>
//                                                                         <p>Janitor</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Chives}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Chives</h3>
//                                                                         <p>Janitor</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Kale}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Kale</h3>
//                                                                         <p>Collector</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Celery}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                         <span className="active" />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Celery</h3>
//                                                                         <p>Collector</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Parsley}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Parsley</h3>
//                                                                         <p>Collector</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Fennel}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                         <span className="active" />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Fennel</h3>
//                                                                         <p>Janitor</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Spinach}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Spinach</h3>
//                                                                         <p>Collector</p>
//                                                                     </div>
//                                                                 </a>
//                                                                 <a href="#" className="d-flex align-items-center">
//                                                                     <div className="flex-shrink-0">
//                                                                         <img
//                                                                             className="img-fluid"
//                                                                             src={Squashes}
//                                                                             width={60}
//                                                                             height={60}
//                                                                             alt="user img"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="flex-grow-1 ms-3">
//                                                                         <h3>Squashes</h3>
//                                                                         <p>Janitor</p>
//                                                                     </div>
//                                                                 </a>
//                                                             </div>
//                                                             {/* chat-list */}
//                                                         </div>
//                                                         <div
//                                                             className="tab-pane fade"
//                                                             id="Closed"
//                                                             role="tabpanel"
//                                                             aria-labelledby="Closed-tab"
//                                                         >
//                                                             {/* chat-list */}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 {/* chat-list */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* chatlist */}
//                                 {/* chatbox */}
//                                 <div className="chatbox">
//                                     <div className="modal-dialog-scrollable">
//                                         <div className="modal-content">
//                                             <div className="msg-head">
//                                                 <div className="row">
//                                                     <div className="col-8">
//                                                         <div className="d-flex align-items-center">
//                                                             <span className="chat-icon">
//                                                                 <img
//                                                                     className="img-fluid"
//                                                                     src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg"
//                                                                     alt="image title"
//                                                                 />
//                                                             </span>
//                                                             <div className="flex-shrink-0">
//                                                                 <img
//                                                                     className="img-fluid"
//                                                                     src={Seaweed}
//                                                                     width={60}
//                                                                     height={60}
//                                                                     alt="user img"
//                                                                 />
//                                                             </div>
//                                                             <div className="flex-grow-1 ms-3">
//                                                                 <h3>Seaweed</h3>
//                                                                 <p>Đang hoạt động</p>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-4">
//                                                         <ul className="moreoption">
//                                                             <li className="navbar nav-item dropdown">
//                                                                 <a
//                                                                     className="nav-link dropdown-toggle"
//                                                                     href="#"
//                                                                     role="button"
//                                                                     data-bs-toggle="dropdown"
//                                                                     aria-expanded="false"
//                                                                 >
//                                                                     <i
//                                                                         className="fa fa-ellipsis-v"
//                                                                         aria-hidden="true"
//                                                                     />
//                                                                 </a>
//                                                                 <ul className="dropdown-menu">
//                                                                     <li>
//                                                                         <a className="dropdown-item" href="#">
//                                                                             Action
//                                                                         </a>
//                                                                     </li>
//                                                                     <li>
//                                                                         <a className="dropdown-item" href="#">
//                                                                             Another action
//                                                                         </a>
//                                                                     </li>
//                                                                     <li>
//                                                                         <hr className="dropdown-divider" />
//                                                                     </li>
//                                                                     <li>
//                                                                         <a className="dropdown-item" href="#">
//                                                                             Something else here
//                                                                         </a>
//                                                                     </li>
//                                                                 </ul>
//                                                             </li>
//                                                         </ul>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="modal-body">
//                                                 <div className="msg-body">
//                                                     <ul>
//                                                         <li>
//                                                             <div className="divider">
//                                                                 <h6>Today</h6>
//                                                             </div>
//                                                         </li>
//                                                         <li className="repaly">
//                                                             <p>
//                                                                 Xin chào, chúng ta sẽ có một cuộc họp vào chiều nay
//                                                             </p>
//                                                             <span className="time">10:20 am</span>
//                                                         </li>
//                                                         <li className="repaly">
//                                                             <p>Bạn hãy có mặt ở phòng họp 302 lúc 4 giờ nhé!</p>
//                                                             <span className="time">10:20 am</span>
//                                                         </li>
//                                                         <li className="sender">
//                                                             <p>Vâng ạ, tôi sẽ đến đúng giờ.</p>
//                                                             <span className="time">10:26 am</span>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             <div className="send-box">
//                                                 <div className="send-btns">
//                                                     <div className="attach">
//                                                         <div className="button-wrapper">
//                                                             <span className="label">
//                                                                 <img
//                                                                     className="img-fluid"
//                                                                     src={attachFile}
//                                                                     width={15}
//                                                                     height={15}
//                                                                     alt="image title"
//                                                                 />
//                                                             </span>
//                                                             <input
//                                                                 type="file"
//                                                                 name="upload"
//                                                                 id="upload"
//                                                                 className="upload-box"
//                                                                 placeholder="Upload File"
//                                                                 aria-label="Upload File"
//                                                             />
//                                                         </div>
//                                                         <div className="button-wrapper">
//                                                             <span className="label">
//                                                                 <img
//                                                                     className="img-fluid"
//                                                                     src={attachPicture}
//                                                                     width={15}
//                                                                     height={15}
//                                                                     alt="image title"
//                                                                 />
//                                                             </span>
//                                                             <input
//                                                                 type="file"
//                                                                 accept=".jpg, .png"
//                                                                 name="upload"
//                                                                 id="upload"
//                                                                 className="upload-box"
//                                                                 placeholder="Upload File"
//                                                                 aria-label="Upload File"
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <br />
//                                                 <br />
//                                                 <form action="">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         aria-label="message…"
//                                                         placeholder="Nhập tin nhắn…"
//                                                     />
//                                                     <button type="button">
//                                                         <i className="fa fa-paper-plane" aria-hidden="true" />{" "}
//                                                         Gửi
//                                                     </button>
//                                                 </form>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* chatbox */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* char-area */}
//         </div>
//     );
// }

function ChatApp() {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Header />
            <Dashboard initBackground={0}/>
            <div className="Chat-App">
                {/* <NavBar /> */}
                {!user ? (
                    <Welcome />
                ) : (
                    <>
                        <ChatBox />
                    </>
                )}
            </div>
        </div>
    );
}

export default ChatApp;