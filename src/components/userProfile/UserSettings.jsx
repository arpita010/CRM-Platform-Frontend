import React, { useState } from "react";
import '../../index.css';
import PersonalSettings from "./PersonalSettings";
import { SettingsTab } from "../../constants/utils";
import NotificationPage from "../notificationSettings/NotificationSettingsPage";


const UserSettings = () => {
    const [activeTab, setActiveTab] = useState(SettingsTab.PERSONAL);

    const changeTab = (tab) => {
        setActiveTab(tab);
    }

    const renderActiveTabComponent = () => {
        switch (activeTab) {
            case SettingsTab.PERSONAL:
                return <PersonalSettings />;
            case SettingsTab.NOTIFICATION_AND_ALERTS:
                return <NotificationPage />;
            case SettingsTab.PASSWORD_AND_SECURITY:
                return <div>Password & Security Settings Component</div>;
            case SettingsTab.CONFIGURATIONS:
                return <div>Configurations Settings Component</div>;
            default:
                return <PersonalSettings />;
        }
    }

    return (
        <div className="user-settings">
            <div className="settings-sidebar">
                <h3>User Settings</h3>
                <ul>
                    <li className="active" onClick={() => changeTab(SettingsTab.PERSONAL)}>Personal Information</li>
                    <li onClick={() => changeTab(SettingsTab.NOTIFICATION_AND_ALERTS)}>Notification & Alerts</li>
                    <li onClick={() => changeTab(SettingsTab.PASSWORD_AND_SECURITY)}>Password & Security</li>
                    <li onClick={() => changeTab(SettingsTab.CONFIGURATIONS)}>Configurations</li>
                </ul>

                <div className="business-settings">
                    <button>Business Settings</button>
                </div>
            </div>

            <div className="settings-content">
                {
                    renderActiveTabComponent()
                }
            </div>
        </div>
    );
}

export default UserSettings;
