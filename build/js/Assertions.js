"use strict";
// convert to more or less specific
let a1 = "hello";
let b1 = a1; // less specific
let c1 = a1; // more specific
console.log(a1 + " " + b1 + " " + c1);
let d1 = "world";
let e1 = "world";
console.log(d1);
console.log(e1);
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(4, 2, "concat");
console.log(myVal);
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
//10 as string
10;
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
