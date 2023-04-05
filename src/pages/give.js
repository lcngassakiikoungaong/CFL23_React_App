import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../css/shared_css/inputform.css";
import "../css/shared_css/table.css";
import "../css/shared_css/herobutton.css";
import "../css/give.css";

/*const dateInput = document.querySelector(".user-details .input-box input[type='date']");

dateInput.addEventListener("click", function() {
  this.classList.add("opened");
});

const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const amnt = document.getElementsByName("Amount");


//add $ sign to beginning of input
amnt[0].addEventListener("focus", function()
{
    if(amnt[0].value.charAt(0) != '$'){
        amnt[0].value = '$';
    }   
    
});

function onAddWebsite(e) {
  e.preventDefault();
  
  const cate = document.getElementsByName("Category")[0].value;
  const prdr = document.getElementsByName("Purchase")[0].value;
  const date = document.getElementsByName("Date")[0].value;
  amnt[0].value = '$' + parseInt(amnt[0].value.replace(/[$]|[,]/g, '')).toLocaleString('en-US');
  let newAmnt = amnt[0].value;

  //Session storage
  let total = parseInt(sessionStorage.getItem("giveTotal") || 0);
  sessionStorage.setItem("giveTotal", total + parseInt(newAmnt.replace(/[$]|[,]/g, '')));
  
  tbody.innerHTML += `
    <tr>
      <td>${cate}</td>
      <td>${prdr}</td>
      <td>${date}</td>
      <td>${newAmnt}</td>
      <td><button class="deleteBtn">Delete</button></td>
    </tr>
  `;
  sessionStorage.setItem("giveTableRows", tbody.innerHTML);
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }
  const btn = e.target;
  btn.closest("tr").remove();
  sessionStorage.setItem("giveTableRows", tbody.innerHTML);
  
  let total = parseInt(sessionStorage.getItem("giveTotal"));
  total -= parseInt(btn.closest("tr").children[3].innerHTML.replace(/[$]|[,]/g, ''));
  sessionStorage.setItem("giveTotal", total);
}

form.addEventListener("submit", onAddWebsite);
table.addEventListener('click', onDeleteRow);

// here is the implementation for the div select.

// let dateBox = document.getElementById("dateBox");

// dateBox.addEventListener("click", function(){
  
// })

//session storage update
window.onload = function updateSession()
{
  tbody.innerHTML = sessionStorage.getItem("giveTableRows") || "";
}*/

function Give() {

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