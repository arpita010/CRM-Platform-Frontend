import React from "react";
import '../../index.css';
import PersonalSettings from "./PersonalSettings";


const UserSettings = () => {
    return (
        <div className="user-settings">
            <div className="settings-sidebar">
                <h3>User Settings</h3>
                <ul>
                    <li className="active">Personal Information</li>
                    <li>Notification & Alerts</li>
                    <li>Password & Security</li>
                    <li>Configurations</li>
                </ul>

                <div className="business-settings">
                    <button>Business Settings</button>
                </div>
            </div>

            <div className="settings-content">
                <PersonalSettings />
            </div>
        </div>
    );
}

export default UserSettings;
