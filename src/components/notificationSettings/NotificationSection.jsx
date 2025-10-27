import React, { useState } from "react";
import "../../index.css";


const NotificationSection = ({ section, isActive, onToggle }) => {
    const [enabled, setEnabled] = useState(true);

    return (
        <div className="notification-section">
            <div className="section-header" onClick={onToggle}>
                <div className="section-left">
                    <span className="dropdown-icon">{isActive ? "▾" : "▸"}</span>
                    <div>
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                    </div>
                </div>
                <div className="toggle-container">
                    <span>Enable All</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={enabled}
                            onChange={() => setEnabled(!enabled)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            {isActive && (
                <div className="section-content">
                    {section.items.length > 0 ? (
                        section.items.map((item, index) => (
                            <div key={index} className="notification-item">
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.desc}</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        ))
                    ) : (
                        <p className="no-items">No specific notifications available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationSection;
