import React from "react"
import "../css/shared_css/footer.css"

function Footer() {
    return (
        <>
            <section className="footer">
                <h4>About the Team</h4>
                <p>
                    In 2023 the CFL team built the web app to facilitate business students
                    with their finances. The team is comprised of <br />
                    five members: Andrés Choque, Jonathan Wilson, Bailey Warren, Noha
                    Ngassaki, Michael Donoho.
                </p>
                <div className="icons">
                    <i className="fa-brands fa-facebook" onclick="showFBpage()"></i>
                    <i className="fa-brands fa-twitter" onclick="showTWpage()"></i>
                    <i className="fa-brands fa-instagram" onclick="showIGpage()"></i>
                    <i className="fa-brands fa-linkedin" onclick="showLIpage()"></i>
                </div>
                <p>Made with <i className="fa-solid fa-heart"></i> by CFL Team</p>
            </section>
        </>
    )
};

export default Footer