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
import CvTemplate from "../student/CvTemplate"
import Profile from "../student/Profile"
import SelectedJobs from "../student/SelectedJobs"
import Vacancies from "../student/Vacancies"
import AddVacancies from "../company/AddVacancies"
import ComProfile from "../company/ComProfile"
import StdSearch from "../company/StdSearch"
import StdSelection from "../company/StdSelection"
import LecProfile from "../lecturer/LecProfile"
import SelectedList from "../lecturer/SelectedList"
import StudentSearch from "../lecturer/StudentSearch"
import AdminDashboard from "./AdminDashboard"


function App() {

  const exampleJobs = [
    { jobName: 'Job A', company: 'Company A', mark: 'A+', selected: true },
    { jobName: 'Job B', company: 'Company B', mark: 'B', selected: false },
    // Add more job objects as needed
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}> </Route>
        <Route path='/StudentRegister' element={<StudentRegister/>}> </Route>
        <Route path='/LecturerRegister' element={<LecturerRegister/>}> </Route>
        <Route path='/CompanyRegister' element={<CompanyRegister/>}> </Route>
        <Route path='/AdminDashboard' element={<AdminDashboard/>}> </Route>
      </Routes>

      <Routes>
        <Route path='/StdDashboard' element={<Profile/>}> </Route>
        <Route path="/profile" element={<Profile/>}/> 
        <Route path="/template" element={<CvTemplate/>}/> 
        <Route path="/jobs" element={<SelectedJobs selectedJobs={exampleJobs}/>}/> 
        <Route path="/vacancies" element={<Vacancies/>}/> 
      </Routes>

      <Routes>
        <Route path='/LecDashboard' element={<LecProfile/>}> </Route>
        <Route path="/lecprofile" element={<LecProfile/>}/> 
        <Route path="/selectedlist" element={<SelectedList/>}/> 
        <Route path="/studentsearch" element={<StudentSearch/>}/> 
      </Routes>

      <Routes>
        <Route path='/ComDashboard' element={<ComProfile/>}> </Route>
        <Route path="/addvacancies" element={<AddVacancies/>}/> 
        <Route path="/comprofile" element={<ComProfile/>}/> 
        <Route path="/stdsearch" element={<StdSearch/>}/> 
        <Route path="/stdselection" element={<StdSelection/>}/> 
      </Routes>

    </BrowserRouter>
  );
}

export default App;
