import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import InfoVehicle from './components/InfoVehicle/InfoVehicle';
import MananageVihicle from './components/ManageVehicle/ManageVehicle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoError from '../Error';
import axios from 'axios';

TodoVehicle.propTypes = {
    
};

function TodoVehicle(props) {

    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:7000/vehicle')
            .then((response) => {
                setVehicle(response.data.vehicles);
            })
            .catch((error) => console.log(error));
    }, []);    

    return (
        <div>
            <Header/>
            <Dashboard initBackground={4}/>
            <Routes>
                <Route path='/' exact element = {<MananageVihicle vehicle={vehicle}/>}/>
                <Route path='/manage' element = {<MananageVihicle/>}/>
                <Route path='/info' element = {<InfoVehicle/>}/>
                <Route path='*' element = {<TodoError/>} />
            </Routes>
        </div>
    );
}

export default TodoVehicle;