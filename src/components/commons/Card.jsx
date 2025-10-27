import React from "react";
import '../../index.css';

const Card = ({ title, description, buttonText, image }) => {
    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{description}</p>
            <img src={image} alt={title} className="card-img" />
            <button className="card-btn">{buttonText}</button>
        </div>
    );
};

export default Card;
