let stringArr = ["one", "hey", "Strat"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "johm";
stringArr.push("hai");
console.log(stringArr);

guitars[0] = 1984;
guitars.unshift("Jim");
console.log(guitars);

//object
// type Guitarist = {
//   name: string;
//   active?: boolean; // question becomes optional
//   albums: (string | number)[];
// };
interface Guitarist {
  name: string;
  active?: boolean; // question becomes optional
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

const greetGuitarist = (guitarist: Guitarist): string => {
  return `Hello ${guitarist.name}!`;
};

console.log(greetGuitarist(evh));

// Enums
// "Unlike most TypeScript features, Enums are not a
// type-level addition to JavaScript but something
// added to the language and runtime. "
enum Grade {
  U = 2,
  D,
  c,
  B,
  A,
}
console.log(Grade.U);
