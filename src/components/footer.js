import React from "react"
import "../css/shared_css/footer.css"

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

function Footer() {
    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                />
            </head>
            
            <section className="footer">
                <h4>About the Team</h4>
                <p>
                    In 2023 the CFL team built the web app to facilitate business students
                    with their finances. The team is comprised of <br />
                    five members: Andrés Choque, Jonathan Wilson, Bailey Warren, Noha
                    Ngassaki, Michael Donoho.
                </p>
                <div className="icons">
                    <i className="fa-brands fa-facebook" onClick={() => showFBpage()}></i>
                    <i className="fa-brands fa-twitter" onClick={() => showTWpage()}></i>
                    <i className="fa-brands fa-instagram" onClick={() => showIGpage()}></i>
                    <i className="fa-brands fa-linkedin" onClick={() => showLIpage()}></i>
                </div>
                <p>Made with <i className="fa-solid fa-heart"></i> by CFL Team</p>
            </section>
        </>
    )
};

export default Footer