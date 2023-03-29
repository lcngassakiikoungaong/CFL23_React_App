import React, { useEffect, useState } from "react";
import "../css/loading.css";
import LoadingLogo from "../images/logo.jpeg";
import { NavLink } from "react-router-dom";

function Loading() {
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

        const forms = document.querySelector(".forms"),
        pwShowHide = document.querySelectorAll(".bx-hide"),
        links = document.querySelectorAll(".link");

        pwShowHide.forEach(eyeIcon => {
            eyeIcon.addEventListener("click", ()=> {
                let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

                pwFields.forEach(password => {
                    if(password.type === "password"){
                        password.type = "text";
                        eyeIcon.classNameList.replace("bx-hide", "bx-show");
                        return;
                    }
                    password.type = "password";
                    eyeIcon.classNameList.replace("bx-show", "bx-hide");
                })
            })
        })

        links.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                forms.classList.toggle("show-signup");
            })
        })

  return (
        <>
          {!loading ? (
            <div className="spinner">
              <span><img src={LoadingLogo} alt="LoadingLogo" /></span>
            </div>
          ) : (
            <div>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Sign in/Sign Up</title>
                    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                        rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                

                    <section className="container">
                        <div className="form login">
                            <div className="form-content">
                                
                                <header>Login</header>


                                <form action="#">
                                <div className="field input-field">
                                    <input type="email" placeholder="Email" className="input" />
                                </div>

                                <div className="field input-field">
                                    <input type="password" placeholder="Password" className="password" />
                                    <i className="bx bx-hide eye-icon"></i>
                                </div>

                                <div class="form-link">
                                <NavLink to=" " className="forgot-pass">Forgot password?</NavLink>
                                </div>

                                <div className="field button-field">
                                    <NavLink to="./index.js"><button type="button">Login</button></NavLink>
                                </div>

                                <div className="form-link">
                                    <span>Don't have an account? <NavLink className="link sign-up-link">Sign Up</NavLink></span>
                                </div>
                                </form>
                            </div>
                        </div>


                        <div className="form signup">
                            <div className="form-content">

                                <header>Sign Up</header>
            
                                <form action="#">
                                    <div className="field input-field">
                                        <input type="email" placeholder="Email" className="input" />
                                    </div>

                                    <div className="field input-field">
                                        <input type="password" placeholder="Password" className="password" />
                                    </div>

                                    <div className="field input-field">
                                        <input type="password" placeholder="Password" className="password" />
                                        <i class="bx bx-hide eye-icon"></i>
                                    </div>


                                    <div className="field button-field">
                                        <NavLink to="./index.js"><button type="button">Sign Up</button></NavLink>
                                    </div>

                                    <div className="form-link">
                                        <span>Already have an account? <NavLink to=" "className="link login-link">Login</NavLink></span>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </section>
            </div>
          )}
        </>
  );
}

export default Loading;