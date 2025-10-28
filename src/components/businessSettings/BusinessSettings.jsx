import React, { useState } from 'react';
import '../../index.css';
import { BusinessSettingsOptions } from '../../constants/utils';
import GeneralSettings from '../generalSettings/GeneralSettingsPage';

const BusinessSettings = () => {
    const [activeTab, setActiveTab] = useState("GENERAL_SETTINGS");

    const changeTab = (tab) => {
        setActiveTab(tab);
    }
    
    return <>
        <div className="business-settings-container">
            <div className="settings-sidebar">
                <h3>Business Settings</h3>
                <ul>
                    {BusinessSettingsOptions.map(option => (
                        <li key={option.code} onClick={() => changeTab(option.code)}>{option.label}</li>
                    ))}
                </ul>

                <div className="user-setting-button-section">
                    <button>User Settings</button>
                </div>
            </div>
            <div className="business-settings-main-container">
                <GeneralSettings />
            </div>
        </div>
    </>
}
export default BusinessSettings;