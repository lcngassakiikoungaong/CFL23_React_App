import { useState, useEffect, useRef } from "react";

/* Progress Bar Animation */
function AnimateBar({ i_sum, l_sum, g_sum, gr_sum, o_sum }) {
    let circularProgressRef = useRef(null);
    let progressValueRef = useRef(null);
    let [marginCount, setMarginCount] = useState(0);
    let [progressStart, setProgressStart] = useState(0);
    let [fontSize, setFontSize] = useState(40);
  
    useEffect(() => {
      let marginValue = i_sum - l_sum - g_sum - gr_sum - o_sum;
  
      let tmp = marginValue.toString().length;
      if (tmp < 6) {
        setFontSize(40);
        progressValueRef.current.style.fontSize = `${fontSize}px`;
      } else if (tmp >= 6 && tmp < 8) {
        setFontSize(35);
        progressValueRef.current.style.fontSize = `${fontSize}px`;
      } else if (tmp >= 8 && tmp < 10) {
        setFontSize(30);
        progressValueRef.current.style.fontSize = `${fontSize}px`;
      } else if (tmp >= 10) {
        setFontSize(20);
        progressValueRef.current.style.fontSize = `${fontSize}px`;
      }
  
      let progressEnd = (marginValue / i_sum) * 100;
      let speed = 20;
  
      if (100 - progressEnd < 1 && 100 - progressEnd > 0) {
        progressEnd = 99;
      }
  
      let count = marginValue - Math.trunc(progressEnd);
      setMarginCount(count);
      if (marginValue <= 0) {
        setProgressStart(0);
        progressValueRef.current.textContent = "$" + marginValue.toLocaleString("en-US");
        circularProgressRef.current.style.background = `conic-gradient(darkgoldenrod ${progressStart * 3.6}deg, #ededed 0deg)`;
      } else {
        let progress = setInterval(() => {
          setProgressStart(prev => prev + 1);
          setMarginCount(prev => prev + 1);
  
          if (marginCount >= marginValue) {
            setMarginCount(marginValue);
          }
  
          progressValueRef.current.textContent = "$" + count.toLocaleString("en-US");
          circularProgressRef.current.style.background = `conic-gradient(darkgoldenrod ${progressStart * 3.6}deg, #ededed 0deg)`;
  
          if (progressStart >= progressEnd) {
            clearInterval(progress);
          }
        }, speed);
  
        return () => clearInterval(progress);
      }
    }, [i_sum, l_sum, g_sum, gr_sum, o_sum, fontSize, progressStart, marginCount]);

    return {
        marginCount,
        progressStart,
        fontSize,
      };
}

export default AnimateBar;