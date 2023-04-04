import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../css/shared_css/inputform.css";
import "../css/shared_css/table.css";
import "../css/shared_css/herobutton.css";
import "../css/give.css";

/*eslint-disable jsx-a11y/anchor-is-valid*/

function Give() {
  const [showMenu, setShowMenu] = useState(false);
  const hideMenu = () => {
    setShowMenu(false);
  };
  
  const [rows, setRows] = useState([]);

  const onAddWebsite = (e) => {
    e.preventDefault();
    const cate = e.target.elements.Category.value;
    const prdr = e.target.elements.Purchase.value;
    const date = e.target.elements.Date.value;
    const amnt = e.target.elements.Amount.value;

    setRows([...rows, { cate, prdr, date, amnt }]);
  };

  const onDeleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = rows
      .map(
        (row, index) => `
        <tr>
          <td>${row.cate}</td>
          <td>${row.prdr}</td>
          <td>${row.date}</td>
          <td>${row.amnt}</td>
          <td><button onclick="onDeleteRow(${index})">Delete</button></td>
        </tr>
      `
      )
      .join("");
  }, [rows]);

  // the is the functionalites for the social media icons
  const showFBpage = () => {
    window.location.href =
      "https://www.facebook.com/groups/LibertyCFL/?_ga=2.101789572.488967955.1669654119-816072560.1565226602";
  };

  const showTWpage = () => {
    window.location.href =
      "https://twitter.com/LibertyU_Busi?_ga=2.101985156.488967955.1669654119-816072560.1565226602";
  };

  const showIGpage = () => {
    window.location.href =
      "https://www.instagram.com/lucenterforfinancialliteracy/?_ga=2.268035211.488967955.1669654119-816072560.1565226602";
  };

  const showLIpage = () => {
    window.location.href =
      "https://www.linkedin.com/company/center-for-financial-literacy-liberty-university/?viewAsMember=true";
  };

  return (
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
        <section className='headergv'>
          <Navbar></Navbar>

          <div class="text-box">
            <h1>Give</h1>
            <hr />
            <p>What am I giving to?</p>
            <a href="#form-header" class="hero-btn" id="libertyBtn"
            >Click here to enter your donations</a>
          </div>
        </section>

        <section>
          <h1 id="form-header" class="form-header">Select your Giving</h1>
          <div class="containerL" id='containerL'>
            <form action="#" method="POST">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Category</span>
                  <select class="input-box" name="Category" id="CategoryInput" required>
                    <option disabled value selected>Select the category</option>
                    <option value="Tithing">Tithing</option>
                    <option value="Charity">Charity</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                  </select>
                </div>

                <div class="input-box">
                  <span class="details">Description</span>
                  <input type="text" id="PurchaseInput" class="purchaseInput" placeholder="Enter the description"
                    name="Purchase" required />
                </div>

                <div class="input-box">
                  <span class="details">Date</span>
                  <input type="date" id="DateInput" class="dateInput" placeholder="11/14/2022" name="Date" required />
                </div>

                <div class="input-box">
                  <span class="details">Amount</span>
                  <input type="text" id="AmountInput" class="amountInput" value="" data-type="currency"
                    placeholder="Enter the amount" name="Amount" required />
                </div>
              </div>
              <div class="button">
                <input type="submit" value="Submit" id="button" />
              </div>
            </form>
          </div>
        </section>

        <section>
          <table id="tbl" class="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </section>

        <section class="summary-link">
          <a href="/summary" class="hero-btn gold-btn" id="LibertyBtn">
            Back to Summary
          </a>
        </section>

        <Footer></Footer>
      </body>  
    </>
    );
}
        
export default Give;