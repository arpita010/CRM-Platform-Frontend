import React, { useState } from "react";
import '../../index.css';
import ChangePasswordPage from "../changePassword/ChangePasswordPage";

const PasswordAndSecurityPage = () => {

    const [displayChangePassword, setDisplayChangePassword] = useState(false);

    const PasswordAndSecurityComponent = () => {
        return <>
            <h2 className="section-title">Password & Security</h2>

            <div className="security-item">
                <div className="security-text">
                    <h3>Change Password</h3>
                    <p>Update your password frequently to stay secure</p>
                </div>
                <button className="btn change-btn" onClick={() => setDisplayChangePassword(!displayChangePassword)}>Change Password</button>
            </div>

            <div className="security-item">
                <div className="security-text">
                    <h3>Logout from all devices</h3>
                    <p>This will log you out from all the devices you are logged in with</p>
                </div>
                <button className="btn logout-btn">Logout</button>
            </div>
        </>
    }

    return (
        <div className="password-security-container">
            {
                displayChangePassword ? <ChangePasswordPage toggleChangePasswordPage={setDisplayChangePassword} /> : PasswordAndSecurityComponent()
            }
        </div>
    );
};

export default PasswordAndSecurityPage;
