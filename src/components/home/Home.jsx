import React from 'react';
import '../../index.css';
import Logo from '../../assets/CRM Platform Logo.png';

const Home = () => {
    return <>
        <div className="home">
            <header class="top-bar">
                <div class="logo">
                    <img src={Logo} alt="Company Logo" className='logo-img' />
                </div>
                <div class="navbar">
                    <nav>
                        <ul>
                            <li><a href="#">India ▾</a></li>
                            <li><a href="#">Products ▾</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </nav>
                    <div class="auth-buttons">
                        <button class="login">Login</button>
                        <button class="register">Register</button>
                    </div>
                </div>
            </header>

            <section class="hero">

                <p class="rating">🟢 Rated 4.8/5 by businesses worldwide</p>
                <h1>AI-Powered CRM for <br></br>
                    <span>Smarter Customer Relationships</span></h1>
                <p class="subtext">
                    Empower your sales, marketing, and support teams with real-time insights, <br />
                    automated workflows, and personalized customer engagement — all in one place.
                </p>
                <div class="cta-buttons">
                    <button class="primary">Try for Free</button>
                    <button class="secondary">Book a Demo</button>
                </div>

                <div class="features">
                    <a href="#">Vendors</a>
                    <a href="#">Payments</a>
                    <a href="#">Invoicing</a>
                    <a href="#">Accounting</a>
                    <a href="#">Expenses</a>
                    <a href="#">Compliance</a>
                    <a href="#">Clients</a>
                    <a href="#">Business Intelligence</a>
                    <a href="#">Inventory</a>
                    <a href="#">Sales</a>
                </div>
            </section>
        </div>

    </>;
}

export default Home;