import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import InfoVehicle from './components/InfoVehicle/InfoVehicle';
import MananageVihicle from './components/ManageVehicle/ManageVehicle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoError from '../Error';

TodoVehicle.propTypes = {
    
};

function TodoVehicle(props) {
    return (
        <div>
            <Header/>
            <Dashboard initBackground={4}/>
            <Routes>
                <Route path='/' exact element = {<MananageVihicle/>}/>
                <Route path='/manage' element = {<MananageVihicle/>}/>
                <Route path='/info' element = {<InfoVehicle/>}/>
                <Route path='*' element = {<TodoError/>} />
            </Routes>
        </div>
    );
}

export default TodoVehicle;