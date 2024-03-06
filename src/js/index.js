//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let num1= 0
let num2= 0
let num3= 0
let num4= 0
let num5= 0
let num6= 0


// let pause= function () {
//     clearInterval(count);
// }

const count = setInterval(function () {

    console.log( num6++)
    if (num6 > 9) {
        console.log(num5++);
        num6 = 0;
    }

    if (num5 > 5) {
        console.log(num4++);
        num5 = 0;
    }

    if (num4 > 9) {
        console.log(num3++);
        num4 = 0;
    }

    if (num3 > 5) {
        console.log(num2++);
        num3 = 0;
    }

    if (num2 > 9) {
        console.log(num1++);
        num2 = 0;
    }

    //render your react application
    ReactDOM.render(<Home digit1={num1} digit2={num2} digit3={num3} digit4={num4} digit5={num5} digit6={num6}/>, document.querySelector("#app"));
}, 1000);

