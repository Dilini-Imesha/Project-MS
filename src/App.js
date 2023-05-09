
import React, { useState } from 'react';
import {Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './component/Form';
import Req from './component/Req';
import Reg from './component/Reg';
import Add from './component/Add';

import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      
        <div>
        <ToastContainer position='bottom-center' />
   
    </div>

<div>
          <Routes>
            <Route path="/" exact element={<Form />} />
            <Route path="/Register" element={<Reg />} />
            <Route path="/Requirment" element={<Req />} />
            <Route path="/Add Request" element={<Add />} />
          
          </Routes>
          </div>
      </div>
  
  );
}

export default App;