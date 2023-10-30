type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a1: One = "hello";
let b1 = a1 as Two; // less specific
let c1 = a1 as Three; // more specific

console.log(a1 + " " + b1 + " " + c1);

let d1 = <One>"world";
let e1 = <string | number>"world";
console.log(d1);
console.log(e1);

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(4, 2, "concat") as string;
console.log(myVal);

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

//10 as string
10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
