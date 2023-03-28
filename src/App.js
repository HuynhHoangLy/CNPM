import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import TodoFeatures from "./features";
import './App.css';
import Info from "./features/Info/components/Info/Info";


function App() {

  return (
    <div>
      <TodoFeatures/>
    </div>
  );
}

export default App;
