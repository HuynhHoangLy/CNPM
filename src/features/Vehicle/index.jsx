import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import InfoVehicle from './components/InfoVehicle/InfoVehicle';
import MananageVihicle from './components/ManageVehicle/ManageVehicle';
import CreateVehicle from './components/CreateVehicle/CreateVehicle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoError from '../Error';
import axios from 'axios';

TodoVehicle.propTypes = {
    
};

function TodoVehicle(props) {

    const [data, setData] = useState({
      "id": 1,
      "carNumber": "0781-7066",
      "type": "TRUCK",
      "status": "BROKEN",
      "weight": 11.68,
      "fuelConsumption": 11.75
    });

    const [vehicle, setVehicle] = useState([{
        "id": 1,
        "carNumber": "0781-7066",
        "type": "TRUCK",
        "status": "BROKEN",
        "weight": 11.68,
        "fuelConsumption": 11.75
      },
      {
        "id": 2,
        "carNumber": "0904-6216",
        "type": "TROLLER",
        "status": "BROKEN",
        "weight": 18.24,
        "fuelConsumption": 9.96
      },
      {
        "id": 3,
        "carNumber": "62584-639",
        "type": "TROLLER",
        "status": "GOOD",
        "weight": 19.74,
        "fuelConsumption": 13.42
      },
      {
        "id": 4,
        "carNumber": "21695-126",
        "type": "TRUCK",
        "status": "GOOD",
        "weight": 14.69,
        "fuelConsumption": 6.46
      },
      {
        "id": 5,
        "carNumber": "54868-6262",
        "type": "TRUCK",
        "status": "BROKEN",
        "weight": 16.13,
        "fuelConsumption": 6.06
      },
      {
        "id": 6,
        "carNumber": "76077-400",
        "type": "TROLLER",
        "status": "BROKEN",
        "weight": 19.96,
        "fuelConsumption": 5.15
      }]);

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
                <Route path={`/info:${data.id}`} element = {<InfoVehicle vehicle={data}/>}/>
                <Route path='/create' element = {<CreateVehicle/>}/>
                <Route path='*' element = {<TodoError/>} />
            </Routes>
        </div>
    );
}

export default TodoVehicle;