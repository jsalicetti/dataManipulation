// Numbers that must total 50/
const n1 = 5;
const n2 = 15;
const n3 = 20; 
const n4 = 10;
/* 9 + 4 + 27 + 10 = 50 */

/* Values that add up to 50 */
const isSum50 = (n1 + n2 + n3 + n4) ==50;

console.log(`does the Sum of all 4 numbers total 50? ${isSum50}`);
console.log(`does the remainder of this equation total 0? ${isSum50}`);
console.log(`are all numbers divisible by 5%` )

/* Subtracted n1 and n2, use the remainder and multiply it by n3 then take the remainder and divide by n4 */
const result = (((n1 - n2) * n3) % n4)


const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;


const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;


console.log(isValid);

const distance = 1500;
const fuel_budget = 175;
const average_fuel_price = 3;

 const mph75 = 65.21 * 3; /*75 mph - 20 hrs and will cost you 195.63*/
 const mph60 = 53.57 * 3; /* 60 mph - 25 hrs and cost you 160.71*/
 const mph55 = 55 * 3; /* 55 mph - 27.27 hrs and will cost you 165*/
 console.log(`${mph60} is the price of fuel for trip at 760mph`);
 console.log(`${mph75} Price of fuel for trip at 75mph`);
 console.log(`${mph55} is the price of feul for the trip at 55 mph`);

const mpg30 = distance / 30;
const mpg28 = distance / 28;
const mpg23 = distance / 23;
console.log(`${mpg23} total gallons of fuel required`);
console.log(`${mpg28} total gallons of fuel required`);
console.log(`${mpg30} total gallons of fuel required `);
console.log(`only two out of three options work with your budget - 55mph, with 30 mpg. And 60mph, with 28 mpg.`);
 
//solution - end of assignment */
console.log(`The best option would be 55 miles per hour at 30mpg`);

