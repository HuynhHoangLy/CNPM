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

    const [users, setUsers] = useState([
        {
          "id": 1,
          "name": "Arne Silcox",
          "email": "asilcox0@state.gov",
          "phone": "4121478255",
          "fCollector": 0,
          "fJanitor": 1
        },
        {
          "id": 2,
          "name": "Bernardine Dealey",
          "email": "bdealey1@java.com",
          "phone": "2427946209",
          "fCollector": 0,
          "fJanitor": 1
        },
        {
          "id": 3,
          "name": "Saunderson Ferrant",
          "email": "sferrant2@walmart.com",
          "phone": "8444986307",
          "fCollector": 0,
          "fJanitor": 1
        },
        {
          "id": 4,
          "name": "Janette Worboy",
          "email": "jworboy3@princeton.edu",
          "phone": "5018247340",
          "fCollector": 0,
          "fJanitor": 1
        },
        {
          "id": 5,
          "name": "Hally Marvin",
          "email": "hmarvin4@uol.com.br",
          "phone": "1077129681",
          "fCollector": 0,
          "fJanitor": 1
        },
        {
          "id": 6,
          "name": "Perrine Storch",
          "email": "pstorch5@chron.com",
          "phone": "7194375348",
          "fCollector": 0,
          "fJanitor": 1
        }]);

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