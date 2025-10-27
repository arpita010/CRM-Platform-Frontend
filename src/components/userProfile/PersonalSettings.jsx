import React from "react";
import '../../index.css';

const PersonalSettings = () => {
    return (
        <div className="personal-settings">
            <h2>Personal Settings</h2>

            <div className="profile-section">
                <div className="profile-avatar">
                    <div className="avatar-circle">A</div>
                    <p className="profile-name">Arpita Mittal</p>
                    <p className="profile-username">Arpita</p>
                </div>

                <div className="profile-form">
                    <div className="form-row">
                        <label>Name</label>
                        <input type="text" value="Arpita Mittal" readOnly />
                    </div>

                    <div className="form-row">
                        <label>Email</label>
                        <input type="email" value="argsjava1@gmail.com" readOnly />
                    </div>

                    <div className="form-row">
                        <label>Country</label>
                        <select>
                            <option>India</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <label>Phone</label>
                        <input type="text" value="+91 98504-05243" readOnly />
                    </div>

                    <div className="form-row">
                        <label>Active Refrens Key</label>
                        <input type="text" value="arpita-mittal" readOnly />
                    </div>

                </div>

            </div>
            <div className="btn-section">
                <button className="save-btn">Save Changes</button>
            </div>
        </div>
    );
}

export default PersonalSettings;
