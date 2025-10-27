import React from "react";
import Sidebar from "../commons/Sidebar";
import Navbar from "../commons/Navbar";
import '../../index.css';
import UserSettings from "./UserSettings";

const UserProfile = () => {
    return <>
        <div className="user-profile-app-container">
            <Sidebar />
            <div className="user-profile-main-section">
                <Navbar />
                <UserSettings />
            </div>
        </div>
    </>
};
export default UserProfile;