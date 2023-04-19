import React from 'react';
import PropTypes from 'prop-types';
import InfoFeatures from '../../components/Info/index';
import OSmap from '../../components/Map/OSmap';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoError from '../Error';
import ManageRoute from './components/ManageRoute/ManageRoute';
import CreateRoute from './components/CreateRoute/CreateRoute';
import AddMCP from './components/AddMCP/AddMCP';
import { useState } from 'react';

ManageCollectionRoute.propTypes = {
    
};

export function getMCP({position}) {
    return {'ID': Math.round(Math.random()*10)};
}
// export function SETMCP({value}){
//     CHOSENMCPS = value
// }

function ManageCollectionRoute(props) {
    const [mcpList, setMcpList] = useState([])
    return (
        <div>
            <Header/>
            <div style={{display: 'inline-block', position: 'fixed'}}>
                <Dashboard initBackground={3}/>   
            </div>
            <div style={{paddingLeft: '180px'}}>
                <Routes>
                    <Route path='/' exact element = {<ManageRoute/>}/>
                    <Route path='/manage' exact element = {<ManageRoute/>}/>
                    <Route path='/create' exact element = {<CreateRoute value={mcpList} setvalue={setMcpList}/>}/>
                    <Route path='/create/add' exact element = {<AddMCP value={mcpList} setvalue={setMcpList}/>}/>
                    {/* <Route path='/collection' element = {<AssignCollectionRoute/>}/> */}
                    <Route path='*' element = {<TodoError/>} />
                </Routes>
                {/* <InfoFeatures/> */}
                {/* <OSmap/> */}
            </div>   
        </div>
    );
}

export default ManageCollectionRoute;