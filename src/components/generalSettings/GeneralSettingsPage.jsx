import React, { useState } from "react";
import SubscriptionDesc from "../subscription/SubscriptionDesc";

const GeneralSettings = () => {

    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (tab) => {
        setActiveTab("premium");
    }

    return (
        <div className="general-settings">
            <h2 className="settings-title">General Settings</h2>

            <div className="settings-section">
                <details>
                    <summary onClick={() => toggleTab("")}>Premium Subscription</summary>
                    {/* Add content here if needed */}
                </details>

                {
                    activeTab === "premium" && (
                        <SubscriptionDesc />
                    )
                }

                <details>
                    <summary>PDF & Reports Configurations</summary>
                </details>

                <details>
                    <summary>Time and Currency</summary>
                </details>

                <details>
                    <summary>Security</summary>
                </details>
            </div>
        </div>
    );
};

export default GeneralSettings;
