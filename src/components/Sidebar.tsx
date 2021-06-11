import React from 'react'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import "../styles/Sidebar.css";

export default function Sidebar() {
    return (
        <div id="Sidebar">
            <Link to="/"><img src={Logo} alt="logo"/></Link>
            <div className="sidebar-options">
                <div>Dashboard</div>
                <div>Menu</div>
                <div><Link to="/">Kitchen</Link></div>
                <div>User</div>
                <div>Orders</div>
                <div>Promotions</div>
                <div>Banners</div>
                <div>Finances</div>
                <div>Reports</div>
            </div>
        </div>
    )
}
