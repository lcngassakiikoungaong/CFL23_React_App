/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../css/login.css";
import { NavLink, Link } from "react-router-dom";

function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setErrorMessage] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
        }
        // Submit registration form data to backend API
    };

  return (
        <>
          
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Sign in/Sign Up</title>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                

            <section className="container">
                <div className="form login">
                    <div className="form-content">  
                        <header>Register</header>
                        <div className="form signup">
                            <div className="form-content">
                                <form action="#">
                                <div className="field input-field">
                                    <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    required
                                    />
                                </div>
                                <div className="field input-field">
                                    <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    required
                                    />
                                </div>
                                <div className="field input-field">
                                    <input
                                    type="email"
                                    placeholder="Email"
                                    className="input"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    />
                                </div>
                                <div className="field input-field">
                                    <input
                                    type="password"
                                    placeholder="Password"
                                    className="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                    />
                                </div>
                                <div className="field input-field">
                                    <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    required
                                    />
                                    <i class="bx bx-hide eye-icon"></i>
                                </div>
                                <div className="field button-field">
                                    <NavLink to="./summary" type="submit"><button type="button">Register</button></NavLink>
                                </div>

                                <div className="form-link">
                                <span>Already have an account? <Link to="/"className="link login-link">Login</Link></span>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  );
}

export default Register;