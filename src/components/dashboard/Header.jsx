import React from "react";
import '../../index.css';

const Header = () => {
    return (
        <header className="dashboard-header">
            <div className="dashboard-welcome">
                <div className="dashboard-profile-circle">A</div>
                <div>
                    <p className="dashboard-welcome-text">Hello Arpita Mittal</p>
                    <h3>Welcome to Arpita!</h3>
                </div>
            </div>
            <div className="dashboard-header-right">
                <button className="dashboard-demo-btn">Book A Demo</button>
            </div>
        </header>
    );
};

export default Header;
