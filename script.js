// let fruits = ["apple", "banana", "orange"];

// const animateAll = (animate) => {
//   setTimeout(() => {
//     animate(fruits[0]);
//     setTimeout(() => {
//       animate(fruits[1]);
//       setTimeout(() => {
//         animate(fruits[2]);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// const animate = (fruit) => {
//   console.log("Animating...", fruit);
// };

// animateAll(animate);

// const ages = [15, 25, 46, 32, 56, 35, 18];

// const doubleAges = ages.map((age) => age * 2);
// console.log(doubleAges);

// const newAges = ages.filter((age) => age > 21);
// console.log(newAges);

function fullname(greet) {
  console.log(greet + " " + this.firstName + " " + this.lastName);
}

const person1 = {
  firstName: "Elun",
  lastName: "Musk",
};
const person2 = {
  firstName: "Ratan",
  lastName: "Tata",
};

fullname.call(person1, "Hello");
fullname.call(person2, "Hi");

fullname.apply(person1,["Hello"])
fullname.apply(person2,["Hii"])
