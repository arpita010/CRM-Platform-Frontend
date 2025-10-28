import React, { useState } from "react";
import "../../index.css";

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`toggle-switch ${isOn ? "on" : ""}`} onClick={toggleSwitch}>
            <div className="switch-circle"></div>
        </div>
    );
};

export default ToggleSwitch;
