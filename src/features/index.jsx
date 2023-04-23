import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import CollectionRoute from './CollectionRoute/index';
import TodoAccount from './Account/index';
import TodoEmployee from './Employee/index';
import TodoVehicle from './Vehicle/index';
import TodoError from './Error/index';
import Chat from '../components/Chat/Chat';
import Login from '../components/Login/Login';
import TodoRoute from './CollectionRoute/index';
import Homepage from './Homepage/Homepage';

TodoFeatures.propTypes = {
    
};

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }
  
  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  }

function TodoFeatures(props) {

    // const token = getToken()
    // console.log(token)

    // if (!token) return (<Login setToken={setToken}/>)

    return (
        <BrowserRouter>
            <Routes>  
                <Route path="/" exact element = {<Homepage/>}/>
                <Route path = "/account/*" element = {<TodoAccount/>} />
                <Route path='/employee/*' element = {<TodoEmployee/>}/>
                <Route path='/route/*' element = {<TodoRoute/>}/>
                <Route path = '/chat' element = {<Chat/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/vehicle/*' element = {<TodoVehicle/>}/>
                <Route path = "/*" element = {<TodoError/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default TodoFeatures;