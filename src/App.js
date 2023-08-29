import React, { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./component/Form";
import Req from "./component/Req";
import Reg from "./component/Reg";
import Add from "./component/Add";
import Forgot from "./component/Forgot";
import Repassword from "./component/Repassword";
import { ToastContainer } from "react-toastify";
import SideBar from "./component/SideBar";
import Dashboard from "./component/Dashboard";
import Developer from "./component/Developer";
import ProjectManeger from "./component/ProjectManeger";


function App() {
  return (
    <div className="App">
      <div>
        <ToastContainer position="bottom-center" />
      </div>

      <div>
        <Routes>
          <Route path="/Register" exact element={<Form />} />
          <Route path="/Login" element={<Reg />} />
          <Route path="/Requirment" element={<Req />} />
          <Route path="/AddRequest" element={<Add />} />
          <Route path="/ForgotPassword" element={<Forgot />} />
          <Route path="/PasswordReset" element={<Repassword />} />
          <Route path="/SideBar" element={<SideBar/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Developer" element={<Developer/>}/>
          <Route path="/ProjectManeger" element={<ProjectManeger/>}/>
         
          


        </Routes>
      </div>
    </div>
  );
}

export default App;
