import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import CreateAccount from './components/CreateAccount/CreateAccount';
import InfoAccount from './components/InfoAccount/InfoAccount';
import ManageAccount from './components/ManageAccount/ManageAccount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoError from '../Error';

TodoAccount.propTypes = {
    
};

function TodoAccount(props) {
    return (
        <div>
            <Header/>
            <Dashboard initBackground={1}/>
            <Routes>
                <Route path='/' exact element = {<ManageAccount/>} />
                <Route path='/manage' exact element = {<ManageAccount/>}/>
                <Route path='/create' element = {<CreateAccount/>}/>
                <Route path='/info' element = {<InfoAccount/>}/>
                <Route path='/*' element = {<TodoError/>} />
            </Routes>
        </div>
    );
}

export default TodoAccount;