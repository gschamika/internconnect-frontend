import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import StudentRegister from './StudentRegister'
import LecturerRegister from './LecturerRegister'
import CompanyRegister from './CompanyRegister'
import User from './User'
import StudentDashboard from './StudentDashboard'
import LecturerDashboard from './LecturerDashboard'
import CompanyDashboard from './CompanyDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}> </Route>
        <Route path='/StudentRegister' element={<StudentRegister/>}> </Route>
        <Route path='/LecturerRegister' element={<LecturerRegister/>}> </Route>
        <Route path='/CompanyRegister' element={<CompanyRegister/>}> </Route>
        <Route path='/StdDashboard' element={<StudentDashboard/>}> </Route>
        <Route path='/LecDashboard' element={<LecturerDashboard/>}> </Route>
        <Route path='/ComDashboard' element={<CompanyDashboard/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
