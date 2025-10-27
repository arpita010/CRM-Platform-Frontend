import React from "react";
import '../../index.css';

const Sidebar = () => {
    const icons = ["🏠", "📄", "💰", "📊", "⚙️", "👥"];
    return (
        <aside className="main-sidebar">
            <div className="main-logo">⚡</div>
            <ul className="main-menu">
                {icons.map((icon, index) => (
                    <li key={index} className="main-menu-item">
                        {icon}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
