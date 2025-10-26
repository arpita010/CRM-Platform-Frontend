import React from 'react';
import '../../index.css';
import { useNavigate } from 'react-router';
import Logo from '../../assets/CRM Platform Logo.png';

const Signin = () => {
    const navigator = useNavigate();
    const navigate = (path) => {
        console.log("Navigating to: ", path);
        navigator(path);
    }
    return <>
        <nav className="navbar-signin">
            <div className="logo-signin">
                <img src={Logo} alt="Logo" />
                {/* <span>CRM Platform</span> */}
            </div>
            <div className="nav-links-signin">
                <a href="#">Products</a>
                <button className="login-signin" onClick={() => navigate('/signin')}>Login</button>
                <button className="register-signin" onClick={() => navigate("/signup")}>Register</button>
            </div>
        </nav>

        <main>
            <div className="login-container">
                <h2>Welcome to CRM Platform</h2>
                <p className="subtext-signin">Please login to continue</p>

                <form className='signin-form'>
                    <label htmlFor="email" className='signin-form-label'>Email<span className="required">*</span></label>
                    <input type="email" id="email" placeholder="Email Address" required className='signin-input' />

                    <label htmlFor="password" className='signin-form-label'>Password<span className="required">*</span></label>
                    <div className="password-wrapper">
                        <input type="password" id="password" required className='signin-input' />
                        {/* <span class="eye-icon">👁️</span> */}
                    </div>

                    <a href="#" className="forgot-link">Forgot password?</a>

                    <button type="submit" className="login-btn">Login and Continue</button>
                </form>

                <p className="help-text">
                    Don’t have an account? <a href="/signup">Sign up now</a>
                </p>
            </div>

            <div className="footer-text-signin">
                <div className="footer-links-signin">
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

