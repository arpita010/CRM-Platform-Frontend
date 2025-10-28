import React from 'react';
import '../../index.css';
import Navbar from '../commons/Navbar';
import Sidebar from '../commons/Sidebar';
import BusinessSettings from './BusinessSettings';

const BusinessSettingsPage = () => {
    return <>
        <div className="business-settings-page-container">
            <Navbar />
            <div className="business-settings-section">
                <Sidebar />
                <BusinessSettings />
            </div>
        </div>
    </>
};
export default BusinessSettingsPage;