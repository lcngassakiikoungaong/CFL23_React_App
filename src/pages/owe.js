<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 2239e32e53fc376ecc6c42f5e5f87a77312a7064
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../css/shared_css/inputform.css";
import "../css/shared_css/table.css";
import "../css/shared_css/herobutton.css";
import "../css/owe.css";

/*const dateInput = document.querySelector(".user-details .input-box input[type='date']");

<<<<<<< HEAD
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
  let total = parseInt(sessionStorage.getItem("oweTotal") || 0);
  sessionStorage.setItem("oweTotal", total + parseInt(newAmnt.replace(/[$]|[,]/g, '')));
  
  tbody.innerHTML += `
    <tr>
      <td>${cate}</td>
      <td>${prdr}</td>
      <td>${date}</td>
      <td>${newAmnt}</td>
      <td><button class="deleteBtn">Delete</button></td>
    </tr>
  `;
  sessionStorage.setItem("oweTableRows", tbody.innerHTML);
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }
  const btn = e.target;
  btn.closest("tr").remove();
  sessionStorage.setItem("oweTableRows", tbody.innerHTML);
  
  let total = parseInt(sessionStorage.getItem("oweTotal"));
  total -= parseInt(btn.closest("tr").children[3].innerHTML.replace(/[$]|[,]/g, ''));
  sessionStorage.setItem("oweTotal", total);
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
  tbody.innerHTML = sessionStorage.getItem("oweTableRows") || "";
}*/

function Owe() {
=======
function Owe() {
        let [total, setTotal] = useState(parseInt(sessionStorage.getItem("oweTotal") || 0));
        let [rows, setRows] = useState(JSON.parse(sessionStorage.getItem("oweTableRows")) || []);
    
        let onAddWebsite = (e) => {
        e.preventDefault();
        let cate = e.target.elements.Category.value;
        let prdr = e.target.elements.Purchase.value;
        let date = e.target.elements.Date.value;
        let amnt = e.target.elements.Amount.value;
    
        if (amnt.charAt(0) !== '$') {
            amnt = '$' + amnt;
        }
    
        let newAmnt = '$' + parseInt(amnt.replace(/[$]|[,]/g, '')).toLocaleString('en-US');
    
        setTotal(total + parseInt(newAmnt.replace(/[$]|[,]/g, '')));
        sessionStorage.setItem("oweTotal", total + parseInt(newAmnt.replace(/[$]|[,]/g, '')));
    
        setRows([...rows, { cate, prdr, date, amnt }]);
    
        sessionStorage.setItem("oweTableRows", JSON.stringify([...rows, { cate, prdr, date, amnt }]));
        };
    
        let onDeleteRow = (index) => {
        let rowToDelete = rows[index];
        let amntToDelete = rowToDelete.amnt;
        setTotal(total - parseInt(amntToDelete.replace(/[$]|[,]/g, '')));
        sessionStorage.setItem("oweTotal", total - parseInt(amntToDelete.replace(/[$]|[,]/g, '')));
    
        let updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
        sessionStorage.setItem("oweTableRows", JSON.stringify(updatedRows));
        };
>>>>>>> 2239e32e53fc376ecc6c42f5e5f87a77312a7064

  return (
    <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Live</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />

        <section className="headerow">
          <Navbar></Navbar>
          <div className="text-box">
            <h1>Owe</h1>
            <hr />
            <p>How much are you paying on debt and taxes?</p>
            <a href="#form-header" className="hero-btn" id="libertyBtn"
            >Click here to enter your debt</a>

          </div>
        </section>

        <section>
                <h1 id="form-header" className="form-header">Enter your Expenses</h1>
                <div className="containerL" id='containerL'>
                    <form action="#" method="POST" onSubmit={onAddWebsite}>
                    <div className="user-details">
                        <div className="input-box">
                        <span className="details">Category</span>
                        <select className="input-box" name="Category" id="CategoryInput" required>
                          <option disabled value selected>Select the category</option>
                          <option value="Student">Student Loans</option>
                          <option value="Credit">Credit Cards</option>
                          <option value="Federal">Federal Tax</option>
                          <option value="State">State Tax</option>
                          <option value="Other">Other</option>
                        </select>
                        </div>
        
                        <div className="input-box">
                            <span className="details">Description</span>
                            <input
                            type="text"
                            id="PurchaseInput"
                            className="purchaseInput"
                            placeholder="Enter the type of purchase"
                            name="Purchase"
                            required/>
                        </div>
                    
                        <div className="input-box" id="dateBox">
                            <span className="details">Date</span>
                            <input
                            type="date"
                            id="DateInput"
                            className="dateInput"
                            placeholder="11/14/2022"
                            name="Date"
                            required/>
                        </div>
                    
                        <div className="input-box">
                            <span className="details">Amount</span>
                            <input
                            type="text"
                            id="AmountInput"
                            className="amountInput"
                            data-type="currency"
                            placeholder="Enter the amount"
                            name="Amount"
                            required />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit" id="button" />
                    </div>
                    </form>
                </div>
            </section>

        <section>
        <table id="tbl" className="table">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                        <td>{row.cate}</td>
                        <td>{row.prdr}</td>
                        <td>{row.date}</td>
                        <td>{row.amnt}</td>
                        <td><button onClick={() => onDeleteRow(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
        </section>

        <section className="summary-link">
          <a href="/summary" className="hero-btn gold-btn" id="LibertyBtn">
            Back to Summary
          </a>
        </section>

        <Footer></Footer>
    </>
    );
}
        
export default Owe;