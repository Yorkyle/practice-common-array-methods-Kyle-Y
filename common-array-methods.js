//Task 1: Create the Order System 

let orderSystem = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
];

//Task 2: Log the number of drinks and number of pastries by using .length on each row

console.log("Drinks: " + orderSystem[0].length);
console.log("Pastries: " + orderSystem[1].length);

//Task 3: Access Orders Using Bracket Notation

console.log(orderSystem[0][1]);
console.log(orderSystem[1][0]);

console.log(orderSystem[0][2]);
console.log(orderSystem[1][2]);

console.log(orderSystem[0][0]);
console.log(orderSystem[1][1]);

//Task 4: Access Orders Dynamically with Variables

let row, item;

row = 0; item = 0;
console.log(orderSystem[row][item]);
row = 0; item = 1;
console.log(orderSystem[row][item]);
row = 0; item = 2;
console.log(orderSystem[row][item]);

row = 1; item = 0;
console.log(orderSystem[row][item]);
row = 1; item = 1;
console.log(orderSystem[row][item]);
row = 1; item = 2;
console.log(orderSystem[row][item]);

//Task 5: Write a loop that logs all the items in the drink category, ensuring the loop dynamically adjusts to the number of items using .length.

for (let item = 0; item < orderSystem[0].length; item++) {
    console.log(orderSystem[0][item]);
};

//Task 6: Add a New Order & Track Length

let updatedDrinkNumber = orderSystem[0].push("flat white");
console.log(updatedDrinkNumber);

let drinkRowIndex = 0;
let flatWhiteIndex = 3;

console.log(orderSystem[drinkRowIndex][flatWhiteIndex]);