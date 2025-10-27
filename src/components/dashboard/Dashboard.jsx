import React from "react";
import Card from "../commons/Card";
import '../../index.css';


const Dashboard = () => {
    const cards = [
        {
            title: "Invoices",
            description:
                "Effortlessly create and share professional invoices to clients via Email and WhatsApp.",
            buttonText: "+ Create New Invoice",
            image: "/images/invoice.png",
        },
        {
            title: "Quotations",
            description:
                "Seal the deal with customised quotations and win over potential clients.",
            buttonText: "+ Create New Quotation",
            image: "/images/quotation.png",
        },
        {
            title: "Expenses",
            description:
                "Stay on top of your expenses. Track and manage your finances with ease and accuracy.",
            buttonText: "+ Record New Purchase",
            image: "/images/expenses.png",
        },
        {
            title: "Expenses",
            description:
                "Stay on top of your expenses. Track and manage your finances with ease and accuracy.",
            buttonText: "+ Record New Purchase",
            image: "/images/expenses.png",
        },
        {
            title: "Expenses",
            description:
                "Stay on top of your expenses. Track and manage your finances with ease and accuracy.",
            buttonText: "+ Record New Purchase",
            image: "/images/expenses.png",
        },
    ];

    return (
        <div className="dashboard-main-content-section">
            <h2>Getting Started</h2>
            <div className="dashboard-card-grid">
                {cards.map((card, i) => (
                    <Card key={i} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
