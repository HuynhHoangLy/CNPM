import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header/Header";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import ManageAccount from "./features/ManageAccount/ManageAccount";

function App() {

  return (
    // <BrowserRouter>
    //     <Header/>
    //     <Routes>
    //       <Route path="/" exact element = {<Intial/>} />
    //       <Route path = "/homepage" element = {<Homepage/>} />
    //       <Route path = "*" element = {<Error/>} />
    //     </Routes>
    // </BrowserRouter>
    <div>
      <Header/>
      <Dashboard/>  
      <ManageAccount/>
    </div>
  );
}

export default App;
