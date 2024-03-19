import React, { useState } from 'react';
import {
    FaClipboardCheck,
    FaCity ,
    FaFileAlt,
    FaUser,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const LecturerDashboard = ({children}) => {

    const menuItem=[
        {
            path:'/lecprofile',
            name:'Profile',
            icon:<FaUser/>
        },
        {
            path:'/studentsearch',
            name:'Search Student',
            icon:<FaFileAlt/>
        },
        {
            path:'/selectedlist',
            name:'Selected List',
            icon:<FaCity />
        }

    ]
    return (
        <div className="container">
           <div style={{width:  "320px"  , marginLeft:  "-120px" , height:  "380vh" , }} className="dashboard">
               <div className="top_section">
                   <h1  className="logo"> <center>Lecturer Dashboard</center></h1>
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

export default LecturerDashboard;