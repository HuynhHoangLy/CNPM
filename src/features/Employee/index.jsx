import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import AssignCollectionRoute from './components/AssignCollectionRoute/AssignCollectionRoute';
import ManageEmployee from './components/ManageEmployee/ManageEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoError from '../Error';

TodoEmployee.propTypes = {
    
};

function TodoEmployee(props) {
    return (
        <div>
            <Header/>
            <Dashboard initBackground={2}/>
            <Routes>
                <Route path='/' exact element = {<ManageEmployee/>}/>
                <Route path='/manage' exact element = {<ManageEmployee/>}/>
                <Route path='/collection' element = {<AssignCollectionRoute/>}/>
                <Route path='*' element = {<TodoError/>} />
            </Routes>
        </div>
    );
}

export default TodoEmployee;