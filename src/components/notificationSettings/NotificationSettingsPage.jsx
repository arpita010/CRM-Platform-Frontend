import React, { useState } from "react";
import NotificationSection from "./NotificationSection";
import "../../index.css";

const NotificationPage = () => {
    const [activeSection, setActiveSection] = useState(null);

    const notifications = [
        {
            id: 1,
            title: "General Notifications",
            description: "Get Updates & alerts regarding general mails",
            items: [
                { name: "Due Invoice Reminders", desc: "Sent to you 3 days before the due date of an invoice" },
                { name: "Vendor Invoice Reminder", desc: "Reminders for self created invoices. Proforma Invoices & Quotations" },
                { name: "Monthly Business Digest", desc: "Summary of invoices and payments sent in first week of the month" },
                { name: "Monthly Rewards Summary Email", desc: "Summary of Refrens credits earned and redeemed by you" },
                { name: "Weekly Profile View Email", desc: "Summary of your business profile insights" },
                { name: "When a user is removed", desc: "Notify me when a user is removed from any of my businesses" },
                { name: "When you are removed", desc: "Notify me when i am removed from any of the businesses" },
                { name: "When you are added as new teammate", desc: "Notify me when I am added as a user in a business" },
                { name: "When a new teammate is added", desc: "Notify me when a user is added in any of my businesses" }
            ]
        },
        {
            id: 2,
            title: "Accounting Notifications",
            description: "Get Updates & alerts regarding accounting emails",
            items: []
        },
        {
            id: 3,
            title: "Leads Notifications",
            description: "Get Updates & alerts regarding lead mails",
            items: []
        },
        {
            id: 4,
            title: "Project & Escrow Notifications",
            description: "Get important updates on projects including milestones & payments.",
            items: []
        },
        {
            id: 5,
            title: "Payments & Verification Notifications",
            description: "Get important updates on payments and verification.",
            items: []
        }
    ];

    const toggleSection = (id) => {
        setActiveSection(activeSection === id ? null : id);
    };

    return (
        <div className="notification-page">
            <h2>Notifications & Alerts</h2>

            {notifications.map((section) => (
                <NotificationSection
                    key={section.id}
                    section={section}
                    isActive={activeSection === section.id}
                    onToggle={() => toggleSection(section.id)}
                />
            ))}
        </div>
    );
};

export default NotificationPage;
