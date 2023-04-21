import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import AssignSchedule from './components/AssignSchedule/AssignSchedule';
import ManageEmployee from './components/ManageEmployee/ManageEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoError from '../Error';
import { useState, useEffect } from 'react';
import axios from 'axios';

TodoEmployee.propTypes = {
    
};

function TodoEmployee(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:7000/worker')
            .then((response) => {
                setUsers(response.data.workers);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Header/>
            <Dashboard initBackground={2}/>
            <Routes>
                <Route path='/' exact element = {<ManageEmployee users={users}/>}/>
                <Route path='/manage' exact element = {<ManageEmployee/>}/>
                <Route path='/schedule' element = {<AssignSchedule/>}/>
                <Route path='*' element = {<TodoError/>} />
            </Routes>
        </div>
    );
}

export default TodoEmployee;