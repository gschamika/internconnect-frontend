import React, { useState } from 'react';
import {
    FaClipboardCheck,
    FaCity ,
    FaFileAlt,
    FaUser,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const AdminDashboard = ({children}) => {

    const menuItem=[
        {
            path:'/adminprofile',
            name:'Profile',
            icon:<FaUser/>
        },
        {
            path:'/manageusers',
            name:'Manage Users',
            icon:<FaFileAlt/>
        },
        {
            path:'/cvupload',
            name:'Add CV Template',
            icon:<FaCity />
        }

    ]
    return (
        <div className="container">
           <div style={{width:  "320px"  , marginLeft:  "-120px" , height:  "380vh" , }} className="dashboard">
               <div className="top_section">
                   <h1  className="logo"> <center>Admin Dashboard</center></h1>
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

export default AdminDashboard;