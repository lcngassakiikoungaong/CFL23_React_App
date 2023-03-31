import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { NavLink } from "react-router-dom";
import "../css/shared_css/navbar.css";
import "../css/shared_css/footer.css";
import "../css/shared_css/progress_bar.css";
import "../css/shared_css/table.css";
import "../css/summary.css";
import AnimateBar from "./components/animatebar.js"

/*eslint-disable jsx-a11y/anchor-is-valid*/
function Summary() {
        const  navLinks = document.getElementById("navLinks");

            function showMenu() {
                navLinks.style.right = "0";
            }

            function hideMenu() {
                navLinks.style.right = "-200px";
            }

            let live_barRef = useRef(null);
            let  owe_barRef = useRef(null);
            let  give_barRef = useRef(null);
            let  grow_barRef = useRef(null);
            
            // eslint-disable-next-line no-unused-vars
            let  [live_sum, setLiveSum] = useState(0);
            // eslint-disable-next-line no-unused-vars
            let  [give_sum, setGiveSum] = useState(0);
            // eslint-disable-next-line no-unused-vars
            let  [grow_sum, setGrowSum] = useState(0);
            // eslint-disable-next-line no-unused-vars
            let  [owe_sum, setOweSum] = useState(0);

            let  live_sumRef = useRef(null);
            let  give_sumRef = useRef(null);
            let  grow_sumRef = useRef(null);
            let  owe_sumRef = useRef(null);

            /** Links to other pages ***/

            useEffect(() => {
                live_barRef.current.addEventListener('click', () => {
                  window.location.href = "/live.js#form-header";
                });
            
                live_barRef.current.addEventListener('click', () => {
                  window.location.href = "/give.js#form-header";
                });
            
                grow_barRef.current.addEventListener('click', () => {
                  window.location.href = "/grow.js#form-header";
                });
            
                owe_barRef.current.addEventListener('click', () => {
                  window.location.href = "/owe.js#form-header";
                });
              }, []);

            let circularProgressRef = useRef(null);
            let progressValueRef = useRef(null);
            let income_inputRef = useRef(null);

            // eslint-disable-next-line no-unused-vars
            let [taxValue, setTaxValue] = useState(0);
            let after_taxRef = useRef(null);
            let after_tax_numRef = useRef(null);
            // eslint-disable-next-line no-unused-vars
            let [i_sum, setISum] = useState(0);
            // eslint-disable-next-line no-unused-vars
            let [l_sum, setLSum] = useState(0);
            // eslint-disable-next-line no-unused-vars
            let [g_sum, setGSum] = useState(0);
            // eslint-disable-next-line no-unused-vars
            let [gr_sum, setGrSum] = useState(0);
            // eslint-disable-next-line no-unused-vars
            let [o_sum, setOSum] = useState(0);

            let total_expenses_numRef = useRef(null);
            let [incomeValue, setIncomeValue] = useState('');


            //add $ sign to beginning of input

            const handleIncomeInput = () => {
                if (incomeValue.charAt(0) !== '$') {
                  incomeValue = '$';
                }
              };

            /*** User presses Enter key or tabs out of income input ***/
            let enterPressed = false; //prevents progress bar animation from executing twice when the Blur function is called in incomeInput()
            
            function handleIncomeKeyPress(event) {
                if (event.key === 'Enter' && parseInt(incomeValue.replace(/[^0-9.]/g, '')) > -1) {
                  event.preventDefault();
                  const strg = '$' + parseInt(incomeValue.replace(/[^0-9.]/g, '')).toLocaleString('en-US');
                  setIncomeValue(strg);
                  sessionStorage.setItem('income_value', strg);
                  enterPressed = true;
                  incomeInput();
                }
              }
            
            function handleIncomeFocusOut() {
                if (parseInt(incomeValue.replace(/[^0-9.]/g, '')) > -1 && enterPressed === false)
                {
                    let strg = '$' + parseInt(incomeValue.replace(/[^0-9.]/g, '')).toLocaleString('en-US');
                    incomeValue = strg;
                    sessionStorage.setItem("income_value", strg);

                    incomeInput();
                }
            }
            //        /[$]|[,]/g

            //Load income value
            function incomeInput()
            {
                let income_int = incomeValue.replace(/[^0-9.]/g, '');

                taxValue = calcTax(income_int);
                i_sum = income_int - (income_int * taxValue);

                document.querySelectorAll(':focus').forEach(el => el.blur()); /*focus out of input field on enter*/
                AnimateBar(i_sum, g_sum, l_sum, gr_sum, o_sum);

                after_tax_numRef.textContent = "$" + i_sum.toLocaleString("en-US");
                enterPressed = false;
                after_taxRef.style.visibility = "visible";
                after_taxRef.style.opacity = "1";
            }

            const { marginCount, progressStart, fontSize } = AnimateBar({ i_sum: 100, l_sum: 50, g_sum: 25, gr_sum: 10, o_sum: 5 });

            //calculate tax off of the income value entered
            function calcTax(input_value = '') {
                /* Tax brackets is for single filers only in the US */
                let taxValue = 0;
                if (input_value > 0 && input_value <= 10275) {
                  taxValue = 0.1;
                } else if (input_value > 10275 && input_value <= 41775) {
                  taxValue = 0.12;
                } else if (input_value > 41775 && input_value <= 89075) {
                  taxValue = 0.22;
                } else if (input_value > 89075 && input_value <= 170050) {
                  taxValue = 0.24;
                } else if (input_value > 170050 && input_value <= 215950) {
                  taxValue = 0.32;
                } else if (input_value > 215950 && input_value <= 539900) {
                  taxValue = 0.35;
                } else if (input_value > 539900) {
                  taxValue = 0.37;
                }
              
                return taxValue;
              }


            /****Update Page Session Values on Refresh ****/
            window.onload = function updateSession()
            {
                //Update Live, Give, Grow, Owe values
                l_sum = parseInt(sessionStorage.getItem("liveTotal") || 0); //if null, set to 0
                g_sum = parseInt(sessionStorage.getItem("giveTotal") || 0);
                gr_sum = parseInt(sessionStorage.getItem("growTotal") || 0);
                o_sum = parseInt(sessionStorage.getItem("oweTotal") || 0);

                live_sum[0].textContent = "$" + l_sum.toLocaleString("en-US");
                give_sum[0].textContent = "$" + g_sum.toLocaleString("en-US");
                grow_sum[0].textContent = "$" + gr_sum.toLocaleString("en-US");
                owe_sum[0].textContent = "$" + o_sum.toLocaleString("en-US");
                total_expenses_numRef.textContent = "$" + (l_sum + g_sum + gr_sum + o_sum).toLocaleString("en-US");

                //Update income value
                let income_value = sessionStorage.getItem("income_value");
                income_inputRef.value = income_value;
                incomeInput();

                

                //Update Pie Chart
                yValues[0] = l_sum || 0;
                yValues[1] = g_sum || 0;
                yValues[2] = gr_sum || 0;
                yValues[3] = o_sum || 0;

                expenseTotal = l_sum + g_sum + gr_sum + o_sum;
            }

            let xValues = ["Live", "Give", "Grow", "Owe"];
            let yValues = [l_sum, g_sum, gr_sum ,o_sum];
            let expenseTotal = l_sum + g_sum + gr_sum + o_sum; 
            let barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#009900"
            ];
            let hoverColors = [
                "#dd2254",
                "#00ccc9",
                "#3266b3",
                "#00cc00"]

                function displayChart() {
                    let sum = yValues.reduce((a, b) => a + b, 0);
                    let canvas = document.getElementById("myChart");
                    let chartError = document.getElementById("chartError");
                    
                    if (sum === 0) {
                    chartError.style.display = "block";
                    canvas.style.display = "none";
                    //alert("'No chart for you.' -Chart Nazi");
                    } else {
                    chartError.style.display = "none"; // hide the chartError div when there is data to display
                    canvas.style.display = "block";

            //Sections with a value of 0 will not be displayed
            let nonZeroIndexes = yValues.reduce((acc, val, idx) => {
                if (val > 0) {
                acc.push(idx);
                }
                return acc;
            }, []);

            

            let nonZeroLabels = nonZeroIndexes.map(idx => xValues[idx]);
            let nonZeroData = nonZeroIndexes.map(idx => yValues[idx]);
            let nonZeroColors = nonZeroIndexes.map(idx => barColors[idx]);
            let nonZeroHoverColors = nonZeroIndexes.map(idx => hoverColors[idx]);
                    

            let myChart = new Chart("myChart", {
                type: "pie",
                data: {
                labels: nonZeroLabels,
                datasets: [{
                    backgroundColor: nonZeroColors,
                    hoverBackgroundColor: nonZeroHoverColors,
                    data: nonZeroData,
                    datalabels: {
            color: 'white'
                    },
                    animation: {
                    duration: 2000
                    }
                }]
                },
                options: {
                //title: {
                    //display: true,
                    //text: "Breakdown of Income (Percentage)"
                    
                //},
                plugins: {
                display: true,  
                        datalabels: {
                display: true,
                formatter: function(data) {
                    let newData = data / expenseTotal * 100;
                                return newData.toFixed(1) + '%';
                            },
                            function (value, index, values) {
                                if (value > 0) {
                                value = value.toString();
                                value = value.split(/(?=(?:...)*$)/);
                                value = value.join(",");
                                return value;
                                } else {
                                value = "";
                                return value;
                                }
                            },
                            function (value, index, values) {
                                if (value > 0) {
                                value = value.toString();
                                value = value.split(/(?=(?:...)*$)/);
                                value = value.join(",");
                                return value;
                                } else {
                                value = "";
                                return value;
                                }
                            }}
                    },
                animation: {
                    
                    animateRotate: true,
                    animateScale: true,
                    //duration: 2000
                }
                }
            })
            ; }}

            //myChart.canvas.style.display = 'none';

            let chartDisplayed = false;

            window.addEventListener("scroll", function () {
                let chartSection = document.getElementById("chartSection");
                let chartSectionRect = chartSection.getBoundingClientRect();
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
                // Check if the chart is in view
                if (chartSectionRect.top <= window.innerHeight && chartSectionRect.bottom >= 0) {
            
                // If the chart is not already displayed, display it
                if (!chartDisplayed) {
                    displayChart();
                    chartDisplayed = true;
                }
            
                // If the chart is not in view, reset the chartDisplayed variable
                } else {
                chartDisplayed = false;
                }
            });
  


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

    return (
        <>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>CFL APP</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
    
                <section className="header">
                        <nav>
                            <a href="./index.js">
                            <img src="" alt="" />
                            </a>
                            <div className={showMenu ? 'nav-links show-nav' : 'nav-links'}>
                            <i className="fa-solid fa-square-xmark" onClick={hideMenu}></i>
                            <ul>
                                <li>
                                <NavLink to="/index.js" id="homeNav">SUMMARY</NavLink>
                                </li>
                                <li>
                                <NavLink to="/live.js" id="liveNav">LIVE</NavLink>
                                </li>
                                <li>
                                <NavLink to="/give.js" id="giveNav">GIVE</NavLink>
                                </li>
                                <li>
                                <NavLink to="/grow.js" id="growNav">GROW</NavLink>
                                </li>
                                <li>
                                <NavLink to="/owe.js" id="oweNav">OWE</NavLink>
                                </li>
                                <li>
                                <NavLink to="/about.js" id="aboutNav">ABOUT</NavLink>
                                </li>
                            </ul>
                            </div>
                            <i className="fa-solid fa-bars" onClick={showMenu}></i>
                        </nav>


            <div id="summary_head">
            <h1>Income Summary</h1>
            </div>

            <section className="progress-section" id="progress_bar">
                <div className="progress-container">
                    <div className="circular-progress" ref={circularProgressRef}>
                        <span className="progress-value" id="progress_value" ref={progressValueRef}>$0</span>
                    </div>
                    <span className="income-text">Income Margin</span>
                    <input type="text" id="income_inputRef" ref={income_inputRef} defaultValue={incomeValue} onFocus={handleIncomeInput} onKeyPress={(e) => handleIncomeKeyPress(e)} onBlur={handleIncomeFocusOut} placeholder="Enter monthly income" />
                    <div id="after_tax" ref={after_taxRef}>
                        <h1 id="after_tax_h1">Income After Tax: <span id="after_tax_num" ref={after_tax_numRef}></span> </h1>
                    </div>
                    <div id="total_expenses">
                        <h1 id="total_expenses_h1">Total Expenses: <span id="total_expenses_num" ref={total_expenses_numRef}></span></h1>
                    </div>
                </div>
            </section>

            
            <section className="finance-bar">
                <div id="live_bar" className="shiny finance-num" ref={live_barRef}>
                    <h1>Live</h1>
                    <h2 ref={live_sumRef}> </h2>
                </div>
            </section>

            <section className="finance-bar">
                <div id="give_bar" className="shiny finance-num" ref={give_barRef}>
                    <h1>Give</h1>
                    <h2 ref={give_sumRef}> </h2>
                </div>
            </section>

            <section className="finance-bar">
                <div id="grow_bar" className="shiny finance-num" ref={grow_barRef}>
                    <h1>Grow</h1>
                    <h2 ref={grow_sumRef}> </h2>
                </div>
            </section>



            <section className="finance-bar">
                <div id="owe_bar" className="shiny finance-num" ref={owe_barRef}>
                    <h1>Owe</h1>    
                    <h2 ref={owe_sumRef}> </h2>    
                </div>
            </section>
        </section>
    
        <h1 className="pie-header">Breakdown of Expenses</h1>
        <h3 className="pie-header">(For best results, make sure to log expenses in all categories.)</h3>
        

        <section className="alt-chart" id="chartSection">
        <canvas id="myChart" style= { {width:'100%', maxWidth: '1000px'} }></canvas>
        <div id="chartError" style= { {display: 'none'} }>No data to display. Please add your expenses to the appropriate pages.</div>
        </section>

        <section className="footer">
            <h4>About the Team</h4>
            <p>
                    In 2022 the CFL team built the web app to facilitate business students
                    with their finances. The team is comprised of <br />
                    five members: Andrés Choque, Jonathan Wilson, Bailey Warren, Noha
                    Ngassaki, and William Donoho.
            </p>
            <div className="icons">
                    <i className="fa-brands fa-facebook" onClick={showFBpage}></i>
                    <i className="fa-brands fa-twitter" onClick={showTWpage}></i>
                    <i className="fa-brands fa-instagram" onClick={showIGpage}></i>
                    <i className="fa-brands fa-linkedin" onClick={showLIpage}></i>
            </div>
            <p>Made with <i className="fas fa-heart"></i> by CFL Team</p>
        </section>
        </>
    );
}

export default Summary;