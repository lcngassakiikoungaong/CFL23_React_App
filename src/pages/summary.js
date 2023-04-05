import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "../css/summary.css";

/*let button1 = document.getElementsByClassName("button1");
let button2 = document.getElementsByClassName("button2");


highlightButton(button1);
highlightButton(button2);

function highlightButton(button)
{
    
    for (let i = 0; i < button.length; i++)
    {
        button[0].style.background = 'rgba(4, 59, 92, 0.7)';
        button[0].style.color = '#fff';

        button[i].addEventListener("click", function (){
            
            if (button[i].style.background == 'rgba(4, 59, 92, 0.7)')
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


/********** Filter Drop Down **********/

/*let filters = document.getElementById("details");

filters.onclick = () => { filters.setAttribute("open"); }*/



/********** Live, Give, Grow, Owe Section *************/

/*let live_bar = document.getElementById("live_bar");
let give_bar = document.getElementById("give_bar");
let grow_bar = document.getElementById("grow_bar");
let owe_bar = document.getElementById("owe_bar");

let live_sum = document.getElementById('live_bar').getElementsByTagName('h2');
let give_sum = document.getElementById("give_bar").getElementsByTagName('h2');
let grow_sum = document.getElementById("grow_bar").getElementsByTagName('h2');
let owe_sum = document.getElementById("owe_bar").getElementsByTagName('h2');*/



/** Links to other pages ***/
/*
live_bar.onclick = () => { window.location.href = "live.html#form-header"; }
give_bar.onclick = () => { window.location.href = "give.html#form-header"; }
grow_bar.onclick = () => { window.location.href = "grow.html#form-header"; }
owe_bar.onclick = () => { window.location.href = "owe.html#form-header"; }*/

//document.getElementById('displayChart').addEventListener('click', function() {
//myChart.canvas.style.display = 'block';
//});

/* Method for updating the sum of tables:

//let l_sum = headerSum(live_table, live_sum);
        etc...

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

*/

/************** Progress Bar ***************/
/*
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let income_input = document.getElementById("income_input");

let taxValue = 0;
let after_tax = document.getElementById("after_tax");
let after_tax_num = document.getElementById("after_tax_num");

let i_sum = 0;
let l_sum = 0;
let g_sum = 0;
let gr_sum = 0;
let o_sum = 0;
let total_expenses_num = document.getElementById("total_expenses_num");

//add $ sign to beginning of input
income_input.addEventListener("focus", function () {
    if (income_input.value.charAt(0) != '$') {
        income_input.value = '$';
    }

});*/

/*** User presses Enter key or tabs out of income input ***/
/*let enterPressed = false; //prevents progress bar animation from executing twice when the Blur function is called in incomeInput()
income_input.addEventListener("keypress", function (event) {
    if (event.key == "Enter" && parseInt(income_input.value.replace(/[^0-9.]/g, '')) > -1) {
        event.preventDefault;
        let strg = '$' + parseInt(income_input.value.replace(/[^0-9.]/g, '')).toLocaleString('en-US');
        income_input.value = strg;
        sessionStorage.setItem("income_value", strg);

        enterPressed = true;
        incomeInput();
    }
});

//        /[$]|[,]/g

income_input.addEventListener("focusout", function () {
    if (parseInt(income_input.value.replace(/[^0-9.]/g, '')) > -1 && enterPressed == false) {
        let strg = '$' + parseInt(income_input.value.replace(/[^0-9.]/g, '')).toLocaleString('en-US');
        income_input.value = strg;
        sessionStorage.setItem("income_value", strg);

        incomeInput();
    }

});*/

//Load income value
/*function incomeInput() {
    let income_int = income_input.value.replace(/[^0-9.]/g, '');

    taxValue = calcTax(income_int);
    i_sum = income_int - (income_int * taxValue);

    document.querySelectorAll(':focus').forEach(el => el.blur()); /*focus out of input field on enter*/
   /* animateBar(i_sum, g_sum, l_sum, gr_sum, o_sum);

    after_tax_num.textContent = "$" + i_sum.toLocaleString("en-US");
    enterPressed = false;
    after_tax.style.visibility = "visible";
    after_tax.style.opacity = "1";
}

//calculate tax off of the income value entered
function calcTax(input_value) {
    /* Tax brackets is for single filers only in the US */
   /* if (input_value > 0 && input_value <= 10275) {
        taxValue = 0.10;
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

/* Progress Bar Animation */
/*function animateBar(i_sum, l_sum, g_sum, gr_sum, o_sum) {
    let progress_value = document.getElementById("progress_value");
    let marginValue = i_sum - l_sum - g_sum - gr_sum - o_sum;

    let fontSize = 40; //Handles font size if number gets too large
    let tmp = marginValue.toString().length;
    if (tmp < 6) {
        fontSize = 40;
        progress_value.style.fontSize = fontSize + "px";
    }
    else if (tmp >= 6 && tmp < 8) {
        fontSize = 35;
        progress_value.style.fontSize = fontSize + "px";
    } else if (tmp >= 8 && tmp < 10) {
        fontSize = 30;
        progress_value.style.fontSize = fontSize + "px";
    } else if (tmp >= 10) {
        fontSize = 20;
        progress_value.style.fontSize = fontSize + "px";
    }


    let progressStart = 0;
    let progressEnd = (marginValue / i_sum) * 100;
    let speed = 20;

    if (100 - progressEnd < 1 && 100 - progressEnd > 0) {
        progressEnd = 99;
    }

    let marginCount = marginValue - Math.trunc(progressEnd);

    if (marginValue <= 0) {
        progressStart = 0;
        progressValue.textContent = "$" + marginValue.toLocaleString("en-US");
        circularProgress.style.background = `conic-gradient(darkgoldenrod ${progressStart * 3.6}deg, #ededed 0deg)`;

    } else {
        let progress = setInterval(() => {
            progressStart++;
            marginCount++;

            if (marginCount >= marginValue) {
                marginCount = marginValue;
            }
            progressValue.textContent = '$' + marginCount.toLocaleString("en-US");
            circularProgress.style.background = `conic-gradient(darkgoldenrod ${progressStart * 3.6}deg, #ededed 0deg)`; /*multiply by 3.6 as 1% of 360 = 3.6 --> dont change*/



           /* if (progressStart >= progressEnd) {
                clearInterval(progress);
            }
        }, speed)

    }

}


/****Update Page Session Values on Refresh ****/
/*window.onload = function updateSession() {
    //Update Live, Give, Grow, Owe values
    l_sum = parseInt(sessionStorage.getItem("liveTotal") || 0); //if null, set to 0
    g_sum = parseInt(sessionStorage.getItem("giveTotal") || 0);
    gr_sum = parseInt(sessionStorage.getItem("growTotal") || 0);
    o_sum = parseInt(sessionStorage.getItem("oweTotal") || 0);

    live_sum[0].textContent = "$" + l_sum.toLocaleString("en-US");
    give_sum[0].textContent = "$" + g_sum.toLocaleString("en-US");
    grow_sum[0].textContent = "$" + gr_sum.toLocaleString("en-US");
    owe_sum[0].textContent = "$" + o_sum.toLocaleString("en-US");
    total_expenses_num.textContent = "$" + (l_sum + g_sum + gr_sum + o_sum).toLocaleString("en-US");

    //Update income value
    let income_value = sessionStorage.getItem("income_value");
    income_input.value = income_value;
    incomeInput();



    //Update Pie Chart
    yValues[0] = l_sum || 0;
    yValues[1] = g_sum || 0;
    yValues[2] = gr_sum || 0;
    yValues[3] = o_sum || 0;

    expenseTotal = l_sum + g_sum + gr_sum + o_sum;

    myChart.update();
}

/* Progress Bar Expenses and After Tax summations */

/* Expenses & give table highlighting

highlightRow(expenses_table, "expenses_table");
highlightRow(give_table, "give_table");

function highlightRow(table, table_id)
{
    document.querySelector('#' + table_id).onclick = function(ev) {
        
        for (let i = 1; i < table.rows.length; i++)
        {
            table.rows[i].classList.remove("active-row");
        }
        ev.target.parentElement.classList.add("active-row");
        ev.target.contentEditable = "true";
        e_sum = headerSum(expenses_table, expenses_sum);
        g_sum = headerSum(give_table, give_sum);
        displayProgress(e_sum, g_sum, i_sum);
    }
}
*/

/* Table Hover Effect */
/*
let margin_box = document.getElementById("margin_box");

inc_bar.addEventListener("mouseover", function (){
    margin_box.style.display = "block";

});

inc_bar.addEventListener("mousemove", function(e){
    let x = e.clientX;
    let y = e.clientY;

    let rect = inc_bar.getBoundingClientRect();

    let newposX = x - rect.left - 40;
    let newposY = y - rect.top - 70;

    margin_box.style.transform = "translate3d(" + newposX + "px, " + newposY + "px, 0)";
});

inc_bar.addEventListener("mouseout", function (){
    margin_box.style.display = "none";

});
*/

/***** Draw Pie Chart *******/
//var ctx = document.getElementById('myChart').getContext('2d');


//myChart.canvas.style.display = 'none';

/*var chartDisplayed = false;

/*window.addEventListener("scroll", function () {
    var chartSection = document.getElementById("chartSection");
    var chartSectionRect = chartSection.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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
*/

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