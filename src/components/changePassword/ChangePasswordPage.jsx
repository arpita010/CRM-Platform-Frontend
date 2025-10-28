import React, { useState } from "react";
import '../../index.css';
const ChangePasswordPage = ({ toggleChangePasswordPage }) => {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="create-password-container">
            <h2 className="form-title">Create New Password</h2>

            <form className="password-form">
                {/* Current Password */}
                <div className="form-group">
                    <label>
                        Current Password<span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                        <input
                            type={showCurrent ? "text" : "password"}
                            placeholder="Enter your current password"
                        />
                        <button
                            type="button"
                            className="toggle-visibility"
                            onClick={() => setShowCurrent(!showCurrent)}
                        >
                            👁️
                        </button>
                    </div>
                    <p className="helper-text">
                        <a href="#">Click here</a> if you don't have or remember your current password.
                    </p>
                </div>

                {/* New Password */}
                <div className="form-group">
                    <label>
                        New Password<span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                        <input
                            type={showNew ? "text" : "password"}
                            placeholder="Choose a strong password"
                        />
                        <button
                            type="button"
                            className="toggle-visibility"
                            onClick={() => setShowNew(!showNew)}
                        >
                            👁️
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                    <label>
                        Confirm Password<span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm new password"
                        />
                        <button
                            type="button"
                            className="toggle-visibility"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            👁️
                        </button>
                    </div>
                </div>
                <div className="btn-section">

                    <button type="submit" className="update-btn">
                        Update
                    </button>
                    <button type="submit" className="back-btn" onClick={() => toggleChangePasswordPage(false)}>
                        Go Back
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ChangePasswordPage;
