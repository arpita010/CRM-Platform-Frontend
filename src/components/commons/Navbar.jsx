import React from "react";
import '../../index.css';

const Navbar = () => {
    return (
        <nav className="main-navbar">
            {/* Left: Logo */}
            <div className="main-navbar-left">
                <div className="main-logo-text">⚡ CRM Platform</div>
            </div>

            {/* Right: Buttons and icons */}
            <div className="main-navbar-right">
                <div className="account-manager">
                    <img
                        src="/images/rohit.png"
                        alt="Account Manager"
                        className="profile-pic"
                    />
                    <div>
                        <p className="manager-name">Meet Rohit</p>
                        <span>Your Account Manager</span>
                    </div>
                </div>

                <div className="main-navbar-icons">
                    <button title="Gift">🎁</button>
                    <button title="AI">🤖</button>
                    <button title="Music">🎵</button>
                    <button title="Notifications">🔔</button>
                </div>

                <button className="book-demo">Book A Demo</button>
            </div>
        </nav>
    );
};

export default Navbar;
