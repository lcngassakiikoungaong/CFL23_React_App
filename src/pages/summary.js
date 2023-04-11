import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "../css/summary.css";

function Summary() {
    let live_barRef = useRef(null);
    let owe_barRef = useRef(null);
    let give_barRef = useRef(null);
    let grow_barRef = useRef(null);

    let [live_sum, setLiveSum] = useState(0);
    let [give_sum, setGiveSum] = useState(0);
    let [grow_sum, setGrowSum] = useState(0);
    let [owe_sum, setOweSum] = useState(0);

    let live_sumRef = useRef(null);
    let give_sumRef = useRef(null);
    let grow_sumRef = useRef(null);
    let owe_sumRef = useRef(null);

    /** Links to other pages ***/
    useEffect(() => {
        live_barRef.current.addEventListener('click', () => {
        window.location.href = "/live#form-header";
        });

        give_barRef.current.addEventListener('click', () => {
        window.location.href = "/give#form-header";
        });

        grow_barRef.current.addEventListener('click', () => {
        window.location.href = "/grow#form-header";
        });

        owe_barRef.current.addEventListener('click', () => {
        window.location.href = "/owe#form-header";
        });
    }, [live_barRef, give_barRef, grow_barRef, owe_barRef]);

    let circularProgressRef = useRef(null);
    let progressValueRef = useRef(null);
    let income_inputRef = useRef(null);

    let [taxValue, setTaxValue] = useState(0);
    let after_taxRef = useRef(null);
    let after_tax_numRef = useRef(null);
    let [i_sum, setISum] = useState(' ');
    let [l_sum, setLSum] = useState(0);
    let [g_sum, setGSum] = useState(0);
    let [gr_sum, setGrSum] = useState(0);
    let [o_sum, setOSum] = useState(0);

    let total_expenses_numRef = useRef(null);
    let [incomeValue, setIncomeValue] = useState('');


    /****Update Page Session Values on Refresh ****/
    let updateSession = () => {
        //Update Live, Give, Grow, Owe values
        let l_sum = parseInt(sessionStorage.getItem("liveTotal") || 0);
        let g_sum = parseInt(sessionStorage.getItem("giveTotal") || 0);
        let gr_sum = parseInt(sessionStorage.getItem("growTotal") || 0);
        let o_sum = parseInt(sessionStorage.getItem("oweTotal") || 0);
    
        setLiveSum(l_sum);
        setGiveSum(g_sum);
        setGrowSum(gr_sum);
        setOweSum(o_sum);

    
        //Update income value
        let income_value = sessionStorage.getItem("income_value");
        incomeValue = income_value;
        incomeInput();
    
        
        //Update Pie Chart
        let yValues = [l_sum || 0, g_sum || 0, gr_sum || 0, o_sum || 0];

        setExpenseTotal(l_sum + g_sum + gr_sum + o_sum);
        
        //Update DOM elements
        live_sumRef.current.textContent = `$${l_sum.toLocaleString('en-US')}`;
        give_sumRef.current.textContent = `$${g_sum.toLocaleString('en-US')}`;
        grow_sumRef.current.textContent = `$${gr_sum.toLocaleString('en-US')}`;
        owe_sumRef.current.textContent = `$${o_sum.toLocaleString('en-US')}`;
        total_expenses_numRef.current.textContent = `$${(l_sum + g_sum + gr_sum + o_sum).toLocaleString('en-US')}`;
        income_inputRef.current.value = income_value;
    
      };
      useEffect(() => {
        updateSession();
      }, []);

      
    let enterPressed = false;
    // add $ sign to beginning of input
    let handleIncomeInput = (event) => {
        if (event.target.value.charAt(0) !== '$') {
          setIncomeValue('$' + event.target.value);
        }
      };
    
      let handleIncomeKeyPress = (event) => {
        if (event.key === 'Enter' && parseInt(incomeValue.replace(/[^0-9.]/g, '')) > -1) {
          event.preventDefault();
          let strg = '$' + parseInt(incomeValue.replace(/[^0-9.]/g, '')).toLocaleString('en-US');
          setIncomeValue(strg);
          sessionStorage.setItem("income_value", strg);
          incomeInput();
        }
      };
    
      let handleIncomeFocusOut = () => {
        if (parseInt(incomeValue.replace(/[^0-9.]/g, '')) > -1) {
          let strg = '$' + parseInt(incomeValue.replace(/[^0-9.]/g, '')).toLocaleString('en-US');
          setIncomeValue(strg);
          sessionStorage.setItem("income_value", strg);
          incomeInput();
        }
      };
    
      let incomeInput = () => {
        let income_int = incomeValue.replace(/[^0-9.]/g, '');

        taxValue = calcTax(income_int);

        i_sum = income_int - (income_int * taxValue);
        let strg = '$' + i_sum.toLocaleString('en-US');
        after_tax_numRef.value = strg;
        enterPressed = false;
        
        animateBar(i_sum, parseInt(sessionStorage.getItem("giveTotal") || 0), parseInt(sessionStorage.getItem("liveTotal") || 0), parseInt(sessionStorage.getItem("growTotal") || 0), parseInt(sessionStorage.getItem("oweTotal") || 0));

        if (i_sum === income_int - (income_int * taxValue)) {
            after_taxRef.current.style.visibility = "visible";
            after_taxRef.current.style.opacity = "1";
            after_tax_numRef.current.textContent = `${(after_tax_numRef.value).toLocaleString('en-US')}`;
        }
        
      };

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

          useEffect(() => {
            updateSession();
          }, []);
          
        function animateBar(i_sum, l_sum, g_sum, gr_sum, o_sum) {
                let progressValue = progressValueRef.current;
                let circularProgress =  circularProgressRef.current;
                let marginValue = i_sum - l_sum - g_sum - gr_sum - o_sum;
            
                let fontSize = 40; //Handles font size if number gets too large
                let tmp = marginValue.toString().length;
                if (tmp < 6) {
                fontSize = 40;
                progressValue.style.fontSize = fontSize + "px";
                } else if (tmp >= 6 && tmp < 8) {
                fontSize = 35;
                progressValue.style.fontSize = fontSize + "px";
                } else if (tmp >= 8 && tmp < 10) {
                fontSize = 30;
                progressValue.style.fontSize = fontSize + "px";
                } else if (tmp >= 10) {
                fontSize = 20;
                progressValue.style.fontSize = fontSize + "px";
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
            
                    if (progressStart >= progressEnd) {
                    clearInterval(progress);
                    }
                }, speed);
                }
            }

            
            let [chart, setChart] = useState(null);
            let [expenseTotal, setExpenseTotal] = useState("");
            let chartSectionRef = useRef(null);
            let canvasRef = useRef(null);
            let chartErrorRef = useRef(null);
            let chartDisplayed = false;
    
            let displayChart = () => {
                let l_sum = parseInt(sessionStorage.getItem("liveTotal") || 0);
                let g_sum = parseInt(sessionStorage.getItem("giveTotal") || 0);
                let gr_sum = parseInt(sessionStorage.getItem("growTotal") || 0);
                let o_sum = parseInt(sessionStorage.getItem("oweTotal") || 0);

                let yValues = [l_sum, g_sum, gr_sum, o_sum];
                let xValues = ["Live", "Give", "Grow", "Owe"];

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
                "#00cc00"
                ];

                let canvas = canvasRef.current;
                let chartError = chartErrorRef.current;

                let sum = yValues.reduce((a, b) => a + b, 0);

                if (sum === 0) {
                chartError.style.display = "block";
                canvas.style.display = "none";
                } else {
                chartError.style.display = "none";
                canvas.style.display = "block";

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
            
                if (chart) {
                    chart.destroy();
                  }

                chart = new Chart(canvas, {
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
                    plugins: {
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
                }); 
            }
        }
       
          useEffect(() => {
            displayChart();
          },[]);

        useEffect(() => {
            window.addEventListener("scroll", function() {
              let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
              const canvas = canvasRef.current;
              const chartError = chartErrorRef.current;
          
              if (chartDisplayed && scrollTop < 200) {
                chartDisplayed = false;
                canvas.style.opacity = 0;
                canvas.style.transition = "opacity 0.5s ease-in-out";
              }
          
              if (!chartDisplayed && scrollTop >= 200) {
                chartDisplayed = true;
                canvas.style.opacity = 1;
                canvas.style.transition = "opacity 0.5s ease-in-out";
                displayChart();
              }
            });
          }, []);
                
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

                <section className='headersm'>
                    <Navbar></Navbar>

                    <div id="summary_head">
                        <h1>Income Summary</h1>
                    </div>

                    <section className="progress-section" id="progress_bar">
                        <div className="progress-container">
                            <div className="circular-progress" ref={circularProgressRef}>
                                <span className="progress-value" id="progress_value" ref={progressValueRef}>$0</span>
                            </div>
                            <span className="income-text">Income Margin</span>
                            <input type="text" id="income_inputRef" onChange={(event) => setIncomeValue(event.target.value)} ref={income_inputRef} defaultValue={incomeValue} onFocus={handleIncomeInput} onKeyPress={handleIncomeKeyPress} onBlur={handleIncomeFocusOut} placeholder="Enter monthly income" /> 
                            <div id="after_tax" ref={after_taxRef}>
                                <h1 id="after_tax_h1">Income After Tax: <span id="after_tax_num" ref={after_tax_numRef}></span></h1>
                            </div>
                            <div id="total_expenses">
                                <h1 id="total_expenses_h1">Total Expenses: <span id="total_expenses_num" ref={total_expenses_numRef}></span></h1>
                            </div>
                        </div>
                    </section>

                    
                    <section className="finance-bar">
                        <div id="live_bar" className="shiny finance-num" ref={live_barRef}>
                            <h1>Live</h1>
                            <h2 ref={live_sumRef}>${live_sum.toLocaleString('en-US')}</h2>
                        </div>
                    </section>

                    <section className="finance-bar">
                        <div id="give_bar" className="shiny finance-num" ref={give_barRef}>
                            <h1>Give</h1>
                            <h2 ref={give_sumRef}>${give_sum.toLocaleString('en-US')}</h2>
                        </div>
                    </section>

                    <section className="finance-bar">
                        <div id="grow_bar" className="shiny finance-num" ref={grow_barRef}>
                            <h1>Grow</h1>
                            <h2 ref={grow_sumRef}>${grow_sum.toLocaleString('en-US')}</h2>
                        </div>
                    </section>



                    <section className="finance-bar">
                        <div id="owe_bar" className="shiny finance-num" ref={owe_barRef}>
                            <h1>Owe</h1>    
                            <h2 ref={owe_sumRef}>${owe_sum.toLocaleString('en-US')}</h2>    
                        </div>
                    </section>
                </section>
            
                <h1 className="pie-header">Breakdown of Expenses</h1>
                <h3 className="pie-header">(For best results, make sure to log expenses in all categories.)</h3>
                <section className="alt-chart" id="chartSection" ref={chartSectionRef}>
                    <canvas style={{ width: '100%', maxWidth: '1000px' }} ref={canvasRef} />
                    <div id="chartError" style= { {display: 'none'} } ref={chartErrorRef}>No data to display. Please add your expenses to the appropriate pages.</div>
                </section>
                
                <Footer></Footer>
        </>
    );
}

export default Summary