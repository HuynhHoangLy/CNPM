import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import ManageAccount from './ManageAccount/ManageAccount';
import ManageCollectionRoute from './MangeCollectionRoute/index';
import ManageEmployee from './ManageEmployee/ManageEmployee';
import ManageVehicle from './ManageVehicle/ManageVehicle';
import Error from './Error/Error';

TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    return (
        <BrowserRouter>
            <Header/>
            <Dashboard/>
            <Routes>
                <Route path="/" exact element = {<ManageCollectionRoute/>} />
                <Route path = "/account" element = {<ManageAccount/>} />
                <Route path='/employee' element = {<ManageEmployee/>}></Route>
                <Route path='/collectroute'></Route>
                <Route path='vehicle' element = {<ManageVehicle/>}></Route>
                <Route path = "*" element = {<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default TodoFeatures;