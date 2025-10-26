import React from 'react';
import '../../index.css';
import { useNavigate } from 'react-router';
import Logo from '../../assets/CRM Platform Logo.png';

const Signin = () => {
    return <>
        <nav class="navbar-signin">
            <div class="logo-signin">
                <img src={Logo} alt="Logo" />
                {/* <span>CRM Platform</span> */}
            </div>
            <div class="nav-links-signin">
                <a href="#">Products</a>
                <button class="login-signin">Login</button>
                <button class="register-signin">Register</button>
            </div>
        </nav>

        <main>
            <div class="login-container">
                <h2>Welcome to CRM Platform</h2>
                <p class="subtext-signin">Please login to continue</p>

                <form className='signin-form'>
                    <label for="email" className='signin-form-label'>Email<span class="required">*</span></label>
                    <input type="email" id="email" placeholder="Email Address" required className='signin-input' />

                    <label for="password" className='signin-form-label'>Password<span class="required">*</span></label>
                    <div class="password-wrapper">
                        <input type="password" id="password" required className='signin-input' />
                        {/* <span class="eye-icon">👁️</span> */}
                    </div>

                    <a href="#" class="forgot-link">Forgot password?</a>

                    <button type="submit" class="login-btn">Login and Continue</button>
                </form>

                <p class="help-text">
                    Don’t have an account? <a href="/signup">Sign up now</a>
                </p>
            </div>

            <div class="footer-text-signin">
                <div class="footer-links-signin">
                    <a href="#">Free Invoice Generator</a>
                    <a href="#">Estimate Templates</a>
                    <a href="#">Quotation Generator</a>
                    <a href="#">Accept Online Payments</a>
                    <a href="#">Freelance Invoice Templates</a>
                </div>
            </div>
        </main>
    </>
};

export default Signin;

