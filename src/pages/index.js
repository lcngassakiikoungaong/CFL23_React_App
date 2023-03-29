import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js";
import { NavLink } from "react-router-dom";
import "../css/shared_css/navbar.css";
import "../css/shared_css/footer.css";
import "../css/shared_css/progress_bar.css";
import "../css/shared_css/table.css";
import "../css/summary.css";

/*eslint-disable jsx-a11y/anchor-is-valid*/
function Summary() {
    const [showMenu, setShowMenu] = useState(false);
  const hideMenu = () => {
    setShowMenu(false);
  };

    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false)
    
        useEffect(() => {
        if (didMount.current) func()
        else didMount.current = true
        }, [func, deps])
    }

    useDidMountEffect (() => {
        const button1 = document.getElementsByClassName("button1");
        const button2 = document.getElementsByClassName("button2");
    
        highlightButton(button1);
        highlightButton(button2);

        function highlightButton(button)
        {
            
            for (let i = 0; i < button.length; i++)
            {
                button[0].style.background = 'rgba(4, 59, 92, 0.7)';
                button[0].style.color = '#fff';

                button[i].addEventListener("click", function (){
                    
                    if (button[i].style.background === 'rgba(4, 59, 92, 0.7)')
                    {
                        button[i].style.background = 'transparent';
                        button[i].style.color = 'black';
                    }else {
                        button[i].style.background = 'rgba(4, 59, 92, 0.7)';
                        button[i].style.color = '#fff';

                    }
                    
                });
            }
        }
    })

    


    /********** Filter Drop Down **********/

    useEffect(() => {
        const filters = document.getElementById("details");
        if (filters) {
            filters.onclick = () => { filters.setAttribute("open"); }
        }
      }, []);




    /********** Expenses & Give Table Section *************/

    let live_bar = document.getElementById("live_bar");
    let give_bar = document.getElementById("give_bar");
    let grow_bar = document.getElementById("grow_bar");
    let owe_bar = document.getElementById("owe_bar");

    let live_sum = document.getElementById('live_bar').getElementsByTagName('h2');
    let give_sum = document.getElementById("give_bar").getElementsByTagName('h2');
    let grow_sum = document.getElementById("grow_bar").getElementsByTagName('h2');
    let owe_sum = document.getElementById("owe_bar").getElementsByTagName('h2');

    let live_container = document.getElementById("live_container");
    let give_container = document.getElementById("give_container");
    let grow_container = document.getElementById("grow_container");
    let owe_container = document.getElementById("owe_container");

    let live_table = document.getElementById('live_table');
    let give_table = document.getElementById("give_table");
    let grow_table = document.getElementById("grow_table");
    let owe_table = document.getElementById("owe_table");


    /* Drop Down Effect */
    live_bar.onclick = () => { displayTable(live_container); }
    give_bar.onclick = () => { displayTable(give_container); }
    grow_bar.onclick = () => { displayTable(grow_container); }
    owe_bar.onclick = () => { displayTable(owe_container); }

    function displayTable(container)
    {
        if( container.style.display === "block")
        {
            container.style.display = "none";
        }else{
            container.style.display = "block";
        }
    }


    let l_sum = headerSum(live_table, live_sum);
    let g_sum = headerSum(give_table, give_sum);
    let gr_sum = headerSum(grow_table, grow_sum);
    let o_sum = headerSum(owe_table, owe_sum);

    function headerSum(table, container_sum)
    {
        let sum = 0;
        for (let i = 1; i < table.rows.length; i++)
        {
            sum += parseInt(table.rows[i].cells[2].innerText);
        }
        container_sum[0].textContent = "$" + sum.toLocaleString("en-US");
        return sum;
    }

    let total_expenses_num = document.getElementById("total_expenses_num");

    total_expenses_num.textContent = "$" + (l_sum + g_sum + gr_sum + o_sum).toLocaleString("en-US");



    /************** Progress Bar ***************/

    let circularProgress = document.querySelector(".circular-progress"),
        progressValue = document.querySelector(".progress-value");

    let income_input = document.getElementById("income_input");
    let i_sum = 0;

    let taxValue = 0;
    let after_tax = document.getElementById("after_tax");
    let after_tax_num = document.getElementById("after_tax_num");

    /* handles input box events */
    income_input.addEventListener("focus", function()
    {
        if(income_input.value.charAt(0) !== '$'){
            income_input.value = '$';
        }   
        
    });

    let enterPressed = false; //prevents progress bar animation from executing twice when the Blur function is called in incomeInput()
    income_input.addEventListener("keypress", function(event)
    {
        if(event.key === "Enter" && parseInt(income_input.value.replace(/[$]|[,]/g, '')) > -1)
        {
            event.preventDefault();
            income_input.value = '$' + parseInt(income_input.value.replace(/[$]|[,]/g, '')).toLocaleString('en-US');
            enterPressed = true;
            incomeInput();
        }
    });

    income_input.addEventListener("focusout", function()
    {
            if(parseInt(income_input.value.replace(/[$]|[,]/g, '')) > -1 && enterPressed === false)
            {
                income_input.value = '$' + parseInt(income_input.value.replace(/[$]|[,]/g, '')).toLocaleString('en-US');
                incomeInput();
            }
            
    });

    function incomeInput()
    {
        let income_int = income_input.value.replace(/[$]|[,]/g, '');

        taxValue = calcTax(income_int);
        i_sum = income_int - (income_int * taxValue);
        document.querySelectorAll(':focus').forEach(el => el.blur()); /*focus out of input field on enter*/
        animateBar(i_sum, g_sum, l_sum, gr_sum, o_sum);
        after_tax_num.textContent = "$" + i_sum.toLocaleString("en-US");
        enterPressed = false;
        after_tax.style.visibility = "visible";
        after_tax.style.opacity = "1";
    }

    function calcTax(input_value)
    {
    /* Tax brackets is for single filers only in the US */
            if (input_value > 0 && input_value <= 10275){
                taxValue = 0.10;
            } else if (input_value > 10275 && input_value <= 41775){
                taxValue = 0.12;
            }else if (input_value > 41775 && input_value <= 89075){
                taxValue = 0.22;
            }else if (input_value > 89075 && input_value <= 170050){
                taxValue = 0.24;
            }else if (input_value > 170050 && input_value <= 215950){
                taxValue = 0.32;
            }else if (input_value > 215950 && input_value <= 539900){
                taxValue = 0.35;
            }else if (input_value > 539900){
                taxValue = 0.37;
            }

        return taxValue;

    }

    /* Progress Bar Animation */
    function animateBar(i_sum, l_sum, g_sum, gr_sum, o_sum)
    {
        let progress_value = document.getElementById("progress_value");
        let marginValue = i_sum-l_sum-g_sum-gr_sum-o_sum;

        let fontSize = 40; //Handles font size if number gets too large
        let tmp = marginValue.toString().length;
        if (tmp < 6){
            fontSize = 40;
            progress_value.style.fontSize = fontSize + "px";
        }
        else if(tmp >= 6 && tmp < 8)
        {
            fontSize = 35;
            progress_value.style.fontSize = fontSize + "px";
        } else if (tmp >= 8 && tmp < 10)
        {
            fontSize = 30;
            progress_value.style.fontSize = fontSize + "px";
        }else if (tmp >= 10)
        {
            fontSize = 20;
            progress_value.style.fontSize = fontSize + "px";
        }


        let progressStart = 0,
            progressEnd = (marginValue/i_sum) * 100,
            speed = 20;
        
        if (100-progressEnd < 1 && 100-progressEnd > 0)
        {
            progressEnd = 99;
        }

        let marginCount = marginValue - Math.trunc(progressEnd);

        if(marginValue < 0)
        {
            progressStart = 0;
            progressValue.textContent = "$" + marginValue.toLocaleString("en-US");
            circularProgress.style.background = `conic-gradient(darkgoldenrod ${progressStart * 3.6}deg, #ededed 0deg)`;

        }else{
            let progress = setInterval(() => {
                progressStart++;
                marginCount++;

                if(marginCount >= marginValue)
                {
                    marginCount = marginValue;
                }
                progressValue.textContent = '$'+ marginCount.toLocaleString("en-US");
                circularProgress.style.background = `conic-gradient(darkgoldenrod ${progressStart * 3.6}deg, #ededed 0deg)`; /*multiply by 3.6 as 1% of 360 = 3.6 --> dont change*/

            
            
                if(progressStart >= progressEnd)
                {
                    clearInterval(progress);
                }
            }, speed)

        }
        
    }
    var xValues = ["Live", "Give", "Grow", "Owe"];
    var yValues = [l_sum, g_sum , gr_sum, o_sum];
    var tot = l_sum + g_sum + gr_sum + o_sum; 
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#009900"
    ];
    var hoverColors = [
      "#dd2254",
      "#00ccc9",
      "#3266b3",
      "#00cc00"]
  
    new ChartJS("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          hoverBackgroundColor: hoverColors,
          data: yValues,
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
            var newData = data / tot * 100;
                        return newData.toFixed(1) + '%';
                    }}
            },
      animation: {
            
            animateRotate: true,
            animateScale: true,
            //duration: 2000
        }
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Live</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        <section className="header">
                <nav>
                    <a href="index,js">
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

                <section class="progress-section" id="progress_bar">
                
                <div class="progress-container">
                    <div class="circular-progress">
                    <span class="progress-value" id="progress_value">$0</span>
                    </div>
                    <span class="income-text">Income Margin</span>
                    <input type="text" id="income_input" placeholder="Enter monthly income" />
                    <div id="after_tax">
                    <h1 id="after_tax_h1">Income After Tax: <span id="after_tax_num"></span> </h1>
                    </div>
                    <div id="total_expenses">
                    <h1 id="total_expenses_h1">Total Expenses: <span id="total_expenses_num"></span></h1>
                    </div>
                </div>
                </section>

                <section class="finance-bar">
                    <div id="live_bar" class="shiny finance-num">
                        <h1>Live</h1>
                    </div>
            
                    <div id="live_container" class="finance-container">
                        <table class="summary-table" id="live_table">
                        <thead>
                            <tr>
                            <th>Category</th>
                            <th>Purchase Description</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Rent</td>
                            <td>11/07/2022</td>
                            <td>1050</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                            </tr>
                            <tr>
                            <td>Electrical</td>
                            <td>11/10/2022</td>
                            <td>200</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                            </tr>
                            <tr>
                            <td>Food</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                            </tr>
                            <tr>
                            <td>Housing</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                            </tr>
                            <tr>
                            <td>Food</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </section>

                    <section class="finance-bar">
                    <div id="give_bar" class="shiny finance-num">
                        <h1>Give</h1>
                    </div>
                
                    <div id="give_container" class="finance-container">
                        <table class="summary-table" id="give_table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Samaritan's Purse</td>
                                    <td>11/07/2022</td>
                                    <td>200</td> 
                                </tr>
                                <tr>
                                    <td>Salvation Army</td>
                                    <td>11/10/2022</td>
                                    <td>100</td> 
                                </tr>
                                <tr>
                                    <td>Soles4Souls</td>
                                    <td>11/03/2022</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>Tithe</td>
                                    <td>11/17/2022</td>
                                    <td>500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section class="finance-bar">
                    <div id="grow_bar" class="shiny finance-num">
                    <h1>Grow</h1>
                    
                    </div>

                    <div id="grow_container" class="finance-container">
                    <table class="summary-table" id="grow_table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Rent</td>
                            <td>11/07/2022</td>
                            <td>1050</td>
                        </tr>
                        <tr>
                            <td>Electrical</td>
                            <td>11/10/2022</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Food</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </section>



                <section class="finance-bar">
                    <div id="owe_bar" class="shiny finance-num">
                    <h1>Owe</h1>
                    </div>

                    <div id="owe_container" class="finance-container">
                    <table class="summary-table" id="owe_table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Rent</td>
                            <td>11/07/2022</td>
                            <td>1050</td>
                        </tr>
                        <tr>
                            <td>Electrical</td>
                            <td>11/10/2022</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>Food</td>
                            <td>11/03/2022</td>
                            <td>350</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </section>
        </section>

        <section class="filters">
            <details id="details">
                <summary>Filter by Date</summary>

                <h2>Months</h2>
                <div class="months">
                <button class="button1">Jan</button>
                <button class="button1">Feb</button>
                <button class="button1">Mar</button>
                <button class="button1">Apr</button>
                <button class="button1">May</button>
                <button class="button1">Jun</button>
                <button class="button1">Jul</button>
                <button class="button1">Aug</button>
                <button class="button1">Sep</button>
                <button class="button1">Oct</button>
                <button class="button1">Nov</button>
                <button class="button1">Dec</button>
                </div>
                <h3>Years</h3>
                <div class="years">
                <button class="button2">2023</button>
                <button class="button2">2022</button>
                </div>
            </details>
        </section>

            <h1 class="pie-header">Breakdown of Income</h1>
        <section class="alt-chart">
            <canvas id="myChart" style= {{ width:'100%',maxWidth:'1000px' }} />
            <script>
                var chart = new Chart(ctx, config);
            </script>
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