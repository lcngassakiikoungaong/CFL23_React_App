import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Student1 from "../images/student1.png";
import Student2 from "../images/student2.png";
import '../css/shared_css/navbar.css';
import '../css/shared_css/footer.css';
import '../css/about.css';
/* eslint-disable jsx-a11y/anchor-is-valid */
function About() {
        //This is the JS code for the drop down menu on phone view
        const [showMenu, setShowMenu] = useState(false);
        
        const toggleMenu = () => {
            setShowMenu(!showMenu);
          }

        //This is the end of the JS code for the drop down menu on phone view
        function showCFLpage() {
            window.location.href = "https://www.liberty.edu/business/center-for-financial-literacy/";
        }

        // the is the functionalites for the social media icons
        function showFBpage() {
            window.location.href = "https://www.facebook.com/groups/LibertyCFL/?_ga=2.101789572.488967955.1669654119-816072560.1565226602";
        }

        function showTWpage() {
            window.location.href = "https://twitter.com/LibertyU_Busi?_ga=2.101985156.488967955.1669654119-816072560.1565226602";
        }

        function showIGpage() {
            window.location.href = "https://www.instagram.com/lucenterforfinancialliteracy/?_ga=2.268035211.488967955.1669654119-816072560.1565226602";
        }

        function showLIpage() {
            window.location.href = "https://www.linkedin.com/company/center-for-financial-literacy-liberty-university/?viewAsMember=true";
        }

        return(
            <>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>CFL APP</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                        rel="stylesheet" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
                
                <section className="header">
                <nav>
                <a href="index.js">
                    <img src="" alt="" />
                </a>

                <div className={showMenu ? 'nav-links show-nav' : 'nav-links'}>
                    <i className="fa-solid fa-square-xmark" onClick={toggleMenu}></i>
                
                        <ul>
                            <li>
                            <NavLink to="/index.js" id="homeNav">SUMMARY</NavLink>
                            </li>
                            <li>
                            <NavLink to="/live.js" id="liveNav">LIVE</NavLink>
                            </li>
                            <li>
                            <NavLink to="/give.js" id="giveNav">GIVE</NavLink>
                            </li>
                            <li>
                            <NavLink to="/grow.js" id="growNav">GROW</NavLink>
                            </li>
                            <li>
                            <NavLink to="/owe.js" id="oweNav">OWE</NavLink>
                            </li>
                            <li>
                            <NavLink to="/about.js" id="aboutNav">ABOUT</NavLink>
                            </li>
                        </ul>
                        </div>

                        <i className="fa-solid fa-bars" onClick={showMenu}></i>
                    </nav>

                    <div className="text-box">
                        <h1>Center for Financial Literacy</h1>
                        <p>Providing biblical financial wisdom with practical applications</p>
                        <a className="hero-btn" id="libertyBtn" onClick={showCFLpage}>
                        Visit our website
                        </a>
                    </div>
                    </section>
                    <section className="reviews">
                        <h1>Testimonials</h1>
                        <p>This is what some of the student financial planners have to say.</p>
                        <div className="row">
                            <div className="reviews-col">
                                <img src={Student1} alt="Student1" />
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed
                                est magni totam molestias voluptatem voluptate nemo ipsa quod a
                                accusamus aspernatur doloremque, dolorem ullam! Quasi esse nihil
                                eos laudantium.
                                </p>
                                <h3>John Smith</h3>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            </div>

                            <div className="reviews-col">
                            <img src={Student2} alt="Student2"/>
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed
                                est magni totam molestias voluptatem voluptate nemo ipsa quod a
                                accusamus aspernatur doloremque, dolorem ullam! Quasi esse nihil
                                eos laudantium.
                                </p>
                                <h3>David Blaine</h3>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            </div>
                        </div>
                        </section>

                        <section className="contact-us">
                        <h1>Contact CFL</h1>
                        <div className="row">
                            <div className="contact-col">
                            <div>
                                <i className="fas fa-home"></i>
                                <span>
                                <h5>1971 University Blvd</h5>
                                <p>Lynchburg, VA</p>
                                </span>
                            </div>

                            <div>
                                <i className="fas fa-phone"></i>
                                <span>
                                <h5>704-824-8789</h5>
                                <p>
                                    Monday - Saturday <br />
                                    8am - 5pm
                                </p>
                                </span>
                            </div>

                            <div>
                                <i className="fas fa-envelope"></i>
                                <span>
                                <h5>cfl@liberty.edu</h5>
                                <p>Email us</p>
                                </span>
                            </div>
                            </div>
                            <div className="contact-col">
                            <form action="../UI/backend/form-handler.php" method="post">
                                <input type="text" name="name" placeholder="Enter your Name" required />
                                <input type="text" name="email" placeholder="Enter your Email Address" required />
                                <input type="text" name="subject" placeholder="Enter your Subject" required />
                                <textarea name="message" placeholder="Message" required></textarea>
                                <button type="submit" className="hero-btn gold-btn" id="LibertyBtn">
                                Send Message
                                </button>
                            </form>
                            </div>
                        </div>
                        </section>

                        <section className="footer">
                            <h4>About the Team</h4>
                            <p>
                                In 2022 the CFL team built the web app to facilitate business students
                                with their finances. The team is comprised of <br />
                                five members: Andrés Choque, Jonathan Wilson, Bailey Warren, Noha
                                Ngassaki, and William Donoho.
                            </p>
                            <div className="icons">
                                <i className="fa-brands fa-facebook" onClick={showFBpage}></i>
                                <i className="fa-brands fa-twitter" onClick={showTWpage}></i>
                                <i className="fa-brands fa-instagram" onClick={showIGpage}></i>
                                <i className="fa-brands fa-linkedin" onClick={showLIpage}></i>
                            </div>
                            <p>Made with <i className="fas fa-heart"></i> by CFL Team</p>
                        </section>

                </>
        );
    }

export default About;