import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../css/shared_css/inputform.css";
import "../css/shared_css/table.css";
import "../css/shared_css/herobutton.css";
import "../css/live.css";

/*eslint-disable jsx-a11y/anchor-is-valid*/

function Live() {  
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
      
return (
    <>
              <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                  rel="stylesheet"
              />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
              />

              <section className='headerlv'>
                  <Navbar></Navbar>

                  <div className="text-box">
                      <h1>Live</h1>
                      <hr />
                      <p>What is Your Cost of Living?</p>
                      <a href="#form-header" className="hero-btn" id="libertyBtn"
                      >Click here to enter your expenses</a>
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
                            <option value="Food">Food</option>
                            <option value="Housing">Housing</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Personal">Personal Spending</option>
                            <option value="Miscellaneous">Miscellaneous</option>
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
        
export default Live;