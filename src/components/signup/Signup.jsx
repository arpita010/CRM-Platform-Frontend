import React from 'react';
import '../../index.css';
import { useNavigate } from 'react-router';

const Signup = () => {
    const navigator = useNavigate();
    const navigateToHome = () => {
        navigator("/");
    }
    return <>
        <div class="container">
            <div class="left-section">
                <div class="logo-signup" onClick={navigateToHome}>CRM Platform</div>
                <h1>Tools you need to run your business day-to-day.</h1>
                <p class="subtitle">Accounting. Inventory. Leads and more.</p>

                <div class="video-section">
                    <div class="video-box">
                        <div class="play-button">▶</div>
                        <p>Quick introduction to CRM Platform</p>
                    </div>
                </div>

                <p class="footer-text">
                    Join thousands of freelancers and businesses to grow your business
                </p>
            </div>

            <div class="right-section">
                <h2>Sign Up on CRM Platform</h2>

                {/* <button class="google-btn">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
                    Continue with Google
                </button> */}

                {/* <div class="divider">
                    <span>OR</span>
                </div> */}

                <form class="signup-form">
                    <label>Country*</label>
                    <select>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Canada</option>
                    </select>

                    <label>Your Name*</label>
                    <input type="text" placeholder="Enter your name" required />

                    <label>Your Email*</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label>Phone*</label>
                    <div class="phone-group">
                        <span class="flag">🇮🇳 +91</span>
                        <input type="tel" placeholder="Enter phone number" required />
                    </div>

                    <label>Set Password*</label>
                    <div class="password-box">
                        <input type="password" placeholder="Enter password" required />
                        <span class="eye">👁️</span>
                    </div>

                    <div class="terms">
                        <input type="checkbox" checked />
                        <p>I agree to the <a href="#">T&C</a> and <a href="#">Privacy Policy</a></p>
                    </div>

                    <button type="submit" class="create-btn">Create Account</button>

                    <p class="login-text">
                        Already a user? <a href="#">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    </>
};

export default Signup;


