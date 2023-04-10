import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import ManageAccount from './Account/components/ManageAccount/ManageAccount';
import ManageCollectionRoute from './MangeCollectionRoute/index';
import ManageEmployee from './Employee/components/ManageEmployee/ManageEmployee';
import ManageVehicle from './ManageVehicle/ManageVehicle';
import TodoError from './Error/index';
import CreateAccount from './Account/components/CreateAccount/CreateAccount';
import Login from '../components/Login/Login';

TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    return (
        <BrowserRouter>
            <Header/>
            {/* <Dashboard/>
            <Routes>
                <Route path="/" exact element = {<ManageCollectionRoute/>} />
                <Route path = "/account" element = {<ManageAccount/>} />
                <Route path='/account/create_account' element = {<CreateAccount/>}/>
                <Route path='/employee' element = {<ManageEmployee/>}></Route>
                <Route path='/collectroute'></Route>
                <Route path='/vehicle' element = {<ManageVehicle/>}></Route>
                <Route path = "*" element = {<TodoError/>} />
            </Routes> */}
            <Login/>
        </BrowserRouter>
    );
}

export default TodoFeatures;