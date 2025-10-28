import React, { useState } from "react";

const SubscriptionDesc = () => {
    const [activeTab, setActiveTab] = useState("subscription");

    return (
        <div className="subscription-container">
            <div className="tab-header">
                <button
                    className={`tab-btn ${activeTab === "subscription" ? "active" : ""
                        }`}
                    onClick={() => setActiveTab("subscription")}
                >
                    Active Subscription
                </button>
                <button
                    className={`tab-btn ${activeTab === "billing" ? "active" : ""
                        }`}
                    onClick={() => setActiveTab("billing")}
                >
                    Billing History
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "subscription" && (
                    <div className="subscription-card">
                        <div className="premium-banner">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/616/616490.png"
                                alt="premium icon"
                                className="premium-icon"
                            />
                            <h2>CRM Platform Premium</h2>
                        </div>
                        <div className="subscription-info">
                            <p className="label">Status</p>
                            <span className="status-badge">Trial</span>
                        </div>
                    </div>
                )}

                {activeTab === "billing" && (
                    <div className="billing-section">
                        <p>No billing history available yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubscriptionDesc;
