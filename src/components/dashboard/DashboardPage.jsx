import React from 'react';
import Sidebar from '../commons/Sidebar';
import Navbar from '../commons/Navbar';
import Header from './Header';
import Dashboard from './Dashboard';

import '../../index.css';

const DashboardPage = () => {
    return (
        <>
            <div className="dashboard-app-container">
                <Sidebar />
                <div className="dashboard-main-content">
                    <Navbar />
                    <Header />
                    <Dashboard />
                </div>
            </div>
        </>
    );
};

export default DashboardPage;