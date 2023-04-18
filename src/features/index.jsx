import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import CollectionRoute from './CollectionRoute/index';
import TodoAccount from './Account/index';
import TodoEmployee from './Employee/index';
import TodoVehicle from './Vehicle/index';
import TodoError from './Error/index';


TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element = {<TodoEmployee/>}></Route>
                <Route path="/collect/*" exact element = {<CollectionRoute/>} />
                <Route path = "/account/*" element = {<TodoAccount/>} />
                <Route path='/employee/*' element = {<TodoEmployee/>}></Route>
                <Route path='/route/*'></Route>
                <Route path='/vehicle/*' element = {<TodoVehicle/>}></Route>
                <Route path = "/*" element = {<TodoError/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default TodoFeatures;