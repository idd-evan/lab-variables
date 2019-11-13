/*

// String is a serie of characters
console.log(`hello world`);
// Number is a number
console.log(123);
console.log(3 + 5); // add
console.log(3 - 5); // subtract
console.log(3 * 5); // multiply
console.log(3 / 5); // divide
console.log(3 % 5); // modulus
console.log(3 ** 5); // exponent/power

// Declaring variables, giving them starting values
let customerName =`George`;
let bitCoin = 0;
//Hi George, your balance is: 0
console.log(`Hi ${customerName}, your balance is: ${bitCoin}`);

// Asssigning a new value to a variable
bitCoin = bitCoin + 4;
//Hi George, your balance is 4
console.log(`Hi ${customerName}, your balance is: ${bitCoin}`);

bitCoin = bitCoin -1;
//Hi George, your balance is 3
console.log(`Hi ${customerName}, your balance is: ${bitCoin}`);


//   Lab Assignment


//Exercise 1:

let jobTitle = `Disco Dancer`;

let geoLocation = `Toronto`;

let annSalary = `$52,000`;

let companyName = `Zellers`;

console.log(`You will be a ${jobTitle} in ${geoLocation} making ${annSalary} for ${companyName}`);




//Exercise 2:

let birthYear = `1996`;

let presentYear = `2019`;

let age = (2019 - 1996);

console.log(`They are ${age} years old`)





//Excerise 3

let currentAge = `23`;

let maxAge = `74`;

let foodPerDay =  (6);

foodPerDay = (51 * 365);

console.log(`You will need ${foodPerDay} bags of chips to last you the ripe old age of ${maxAge}`);






//Exercise 4


let radius = `6`;

let diameter = `12`;

let circumfrence = (3.14*12);

let area = (6*6*3.14)

console.log(`The area is ${area}`);
console.log(`The circumfrence is ${circumfrence}`);





//Excercise 5


let celsius = (0);

fahrenheit = celsius + 32;

console.log(`${celsius}°C is ${fahrenheit}°F`);


celsius = fahrenheit - 32;

console.log(`${fahrenheit}°C is ${celsius}°F`);

*/






/* FUCNTIONS ****

let itemsInCart = 0;
let name = `George`;

//Things we receive: paranaters
//functions have their own variables, don't effect variables outside.
function addItemsToTheCart(qty=1) {

    itemsInCart += qty;
    console.log(`You added ${qty} item(s).s There are now: ${itemsInCart}.`);

}

console.log(itemsInCart);
addItemsToTheCart();
console.log(itemsInCart);

*/


/*   CALCULATOR**********

function getTheSum(first, second) {

console.log(`You want to sum ${first} and ${second}.`)
return first + second;

}
console.log(`The sum is: ${getTheSum(13, 14)}.`)
console.log(`The sum is: ${getTheSum(33, 71)}.`)
console.log(`The sum is: ${getTheSum(32, 74)}.`)

*/

let itemsInCart = 0;

function addItemsToTheCart(cart, qty=1) {

    console.log(`You added ${qty} item(s) to your ${cart}.`);


    return cart + qty;
}

itemsInCart = addItemsToTheCart(itemsInCart, 1);
itemsInCart = addItemsToTheCart(itemsInCart, 5);