import React, {useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Student1 from "../images/student1.png";
import Student2 from "../images/student2.png";
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
                <head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    />
                </head>

                <body>
                    <section className="headerab">
                        <Navbar></Navbar>
                        <div class="text-box">
                            <h1>Center for Financial Literacy</h1>
                            <p>Providing biblical financial wisdom with practical applications</p>
                            <a class="hero-btn" id="libertyBtn" onclick="showCFLpage()"
                            >Visit our website</a
                            >
                        </div>
                    </section>

                    <section className="reviews">
                        <h1>Testimonials</h1>
                        <p>This is what some of the student financial planners have to say.</p>
                        <div className="row">
                            <div className="reviews-col">
                                <img src={Student1} />
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed
                                        est magni totam molestias voluptatem voluptate nemo ipsa quod a
                                        accusamus aspernatur doloremque, dolorem ullam! Quasi esse nihil
                                        eos laudantium.
                                    </p>
                                    <h3>John Smith</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                            </div>

                            <div className="reviews-col">
                                <img src={Student2} />
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed
                                        est magni totam molestias voluptatem voluptate nemo ipsa quod a
                                        accusamus aspernatur doloremque, dolorem ullam! Quasi esse nihil
                                        eos laudantium.
                                    </p>
                                    <h3>David Blaine</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact-us">
                        <h1>Contact CFL</h1>
                        <div className="row">
                            <div className="contact-col">
                                <div>
                                    <i class="fa-solid fa-house"></i>
                                    <span>
                                        <h5>1971 University Blvd</h5>
                                        <p>Lynchburg, VA</p>
                                    </span>
                                </div>

                                <div>
                                    <i class="fa-solid fa-phone"></i>
                                    <span>
                                        <h5>434-592-3210</h5>
                                        <p>
                                            Monday - Friday <br />
                                            8 am - 5 pm
                                        </p>
                                    </span>
                                </div>

                                <div>
                                    <i class="fa-solid fa-envelope"></i>
                                    <span>
                                        <h5>cfl@liberty.edu</h5>
                                        <p>Email us!</p>
                                    </span>
                                </div>
                            </div>
                            <div className="contact-col">
                                <form action="../UI/backend/form-handler.php" method="post">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your Name"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Enter your Email Address"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Enter your Subject"
                                        required
                                    />
                                    <textarea
                                        type="8"
                                        name="message"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                    <button type="submit" class="hero-btn gold-btn" id="LibertyBtn">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    <Footer></Footer>
                </body>
            </>
        );
    }

export default About;