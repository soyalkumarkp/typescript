"use strict";
let stringArr = ["one", "hey", "Strat"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "johm";
stringArr.push("hai");
console.log(stringArr);
guitars[0] = 1984;
guitars.unshift("Jim");
console.log(guitars);
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(evh));
// Enums
// "Unlike most TypeScript features, Enums are not a
// type-level addition to JavaScript but something
// added to the language and runtime. "
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 2] = "U";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["c"] = 4] = "c";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
