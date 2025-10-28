import React, { useState } from "react";
import '../../index.css';
const ConfigurationsPage = () => {
    const [language, setLanguage] = useState("English");

    return (
        <div className="language-container">
            <h2 className="language-title">Choose Display Language</h2>
            <div className="language-selection">
                <p className="language-subtitle">
                    Select pages will be displayed in the chosen language
                </p>

                <div className="select-wrapper">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="language-select"
                    >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default ConfigurationsPage;
