import React, { useEffect, useState } from "react";
import "../css/login.css";
import LoadingLogo from "../images/logo.jpeg";
import { NavLink, Link } from "react-router-dom";

function Login() {
    
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setData(json);
            setloading(true);
            });
        }, 2000);
    }, []);

    //For the eye icon

    const forms = document.querySelector(".forms"),
        pwShowHide = document.querySelectorAll(".bx-hide"),
        links = document.querySelectorAll(".link");

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

            pwFields.forEach(password => {
                if (password.type === "password") {
                    password.type = "text";
                    eyeIcon.classList.replace("bx-hide", "bx-show");
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            })
        })
    })

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            forms.classList.toggle("show-signup");
        })
    })
    // eye icon


  return (
        <>
          {!loading ? (
            <div className="spinner">
              <span><img src={LoadingLogo} alt="LoadingLogo" /></span>
            </div>
          ) : (
            <>
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                        rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                </head>

                <body>
                    <section className="container fomrs">
                        <div className="form login">
                            <div className="form-content">
                                
                                <header>Login</header>


                                <form action="#">
                                <div className="field input-field">
                                    <input type="email" placeholder="Email" className="input"/>
                                </div>

                                <div className="field input-field">
                                    <input type="password" placeholder="Password" className="password"/>
                                    <i className="bx bx-hide eye-icon"></i>
                                </div>

                                <div class="form-link">
                                <a href="#" className="forgot-pass">Forgot password?</a>
                                </div>

                                <div className="field button-field">
                                    <NavLink to="./summary"><button type="button">Login</button></NavLink>
                                </div>

                                <div className="form-link">
                                    <span>Don't have an account? <a href="#" className="link sign-up-link">Sign Up</a></span>
                                </div>
                                </form>                           
                            </div>
                        </div>

                        <div class="form signup">
                            <div class="form-content">
                                <header>Sign Up</header>

                                    <form action="#">
                                        <div class="field input-field">
                                            <input type="email" placeholder="Email" class="input" />
                                        </div>

                                        <div class="field input-field">
                                            <input type="password" placeholder="Password" class="password" />
                                        </div>

                                        <div class="field input-field">
                                            <input type="password" placeholder="Password" class="password" />
                                            <i class="bx bx-hide eye-icon"></i>
                                        </div>


                                        <div class="field button-field">
                                            <button type="button" onclick="redirectpage()">Sign Up</button>
                                        </div>

                                        <div class="form-link">
                                            <span>Already have an account? <a href="/summary" class="link login-link">Login</a></span>
                                        </div>
                                      </form>
                                  </div>
                              </div>
                    </section>
                </body>
            </>
          )}
        </>
  );
}

export default Login;