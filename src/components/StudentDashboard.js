import React, { useState } from 'react';
import {
    FaBars,
    FaClipboardCheck,
    FaCity ,
    FaFileAlt,
    FaUser,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const StudentDashboard = ({children}) => {

    const menuItem=[
        {
            path:'/profile',
            name:'Profile',
            icon:<FaUser/>
        },
        {
            path:'/template',
            name:'CV Template',
            icon:<FaFileAlt/>
        },
        {
            path:'/vacancies',
            name:'JOB Vacancies',
            icon:<FaCity />
        },
        {
            path:'/jobs',
            name:'Selected Jobs',
            icon:<FaClipboardCheck/>
        },

    ]
    return (
        <div className="container">
           <div style={{width:  "320px"  , marginLeft:  "-120px" , height:  "380vh" , }} className="dashboard">
               <div className="top_section">
                   <h1  className="logo"> <center>Student Dashboard</center></h1>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default StudentDashboard;