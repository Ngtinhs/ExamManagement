import React from 'react'
import Sidebar from './Sidebar'
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import './Admin.scss';


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)} />
                content goes here
            </div>
        </div>
    )
}

export default Admin
