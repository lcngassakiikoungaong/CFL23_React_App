import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "../css/summary.css";

function Summary() {
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
                <section className='headersm'>
                    <Navbar></Navbar>

                    <div id="summary_head">
                        <h1>Income Summary</h1>
                    </div>

                    <section className="progress-section" id="progress_bar">

                        <div className="progress-container">
                            <div className="circular-progress">
                                <span className="progress-value" id="progress_value">$0</span>
                            </div>
                            <span className="income-text">Income Margin</span>
                            <input type="text" id="income_input" placeholder="Enter monthly income" />
                            <div id="after_tax">
                                <h1 id="after_tax_h1">Income After Tax: <span id="after_tax_num"></span> </h1>
                            </div>
                            <div id="total_expenses">
                                <h1 id="total_expenses_h1">Total Expenses: <span id="total_expenses_num"></span></h1>
                            </div>
                        </div>
                    </section>

                    <section className="finance-bar">
                        <div id="live_bar" className="shiny finance-num">
                            <h1>Live</h1>
                            <h2>.</h2>
                        </div>
                    </section>

                    <section className="finance-bar">
                        <div id="give_bar" className="shiny finance-num">
                            <h1>Give</h1>
                            <h2>.</h2>
                        </div>
                    </section>

                    <section className="finance-bar">
                        <div id="grow_bar" className="shiny finance-num">
                            <h1>Grow</h1>
                            <h2>.</h2>
                        </div>
                    </section>

                    <section className="finance-bar">
                        <div id="owe_bar" className="shiny finance-num">
                            <h1>Owe</h1>
                            <h2>.</h2>
                        </div>
                    </section>

                </section>

                <h1 className="pie-header">Breakdown of Expenses</h1>
                <h3 className="pie-header">(For best results, make sure to log expenses in all categories.)</h3>

                <section className="alt-chart" id="chartSection">
                    <canvas id="myChart"></canvas>
                    <div id="chartError">No data to display. Please add your expenses to the appropriate pages.</div>
                </section>
                
                <Footer></Footer>
            </body>
        </>
    );
}

export default Summary