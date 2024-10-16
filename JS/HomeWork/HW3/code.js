// 1. Перевести тип і в консоль вивести результат через typeof:
// - стрічку в булевий
// - число в булевий
// - стрічку в число
// - нул в булевий
// - андефайнед в булевий

// 2. Написати confirm який відносно якого будете показувати в консолі:
//    - You confirmed popup - коли конфірм успішний
//    - Confirm Error - коли не успішний

// 3. Перепишіть попередній приклад використовуючи тернарний оператор

// 4. Через prompt взяти вік та виконати наступні умови в if else:
// - Якщо вік більше 1 і менше 12 вивести: you are child
// - Якщо вік більше 12 і менше 18 вивести: you are teenager
// - Якщо вік більше 18 і менше 60 вивести: you are adult person
// - Якщо вік більше 60 вивести: you are so old

// 5. Через prompt взяти імя та виконати наступні умови в switch case:
// - Якщо ім'я є 'Admin' вивести: I have full access
// - Якщо ім'я є 'Student' вивести: Im student
// - Якщо ім'я є 'Teacher' вивести: Im teacher
// - Якщо ім'я є 'Young' вивести: I young and ready to party
// - Всі інші імена вивести: You entered own name

// 6. Самостійно приведіть приклади використання <, >, >=, <=, ==, ===, !=, !==, ||, &&


//////// 1 //////// 
console.log("1. TypeOF");
console.log(typeof Boolean("hello"));
console.log(typeof Boolean(123)); 
console.log(typeof Number("456")); 
console.log(typeof Boolean(null)); 
console.log(typeof Boolean(undefined));

//////// 2 ////////
console.log("\n2. Confirm Popup");
let confirmed = confirm("Do you confirm this action?");
if (confirmed) {
    console.log("You confirmed the popup :-)");
} else {
    console.log("Not Confirmed");
}

//////// 3 ////////
console.log("\n3. Ternary Operator");
confirmed ? console.log("You confirmed the popup") : console.log("Confirm Error");

//////// 4 ////////
console.log("\n4. Age Conditions");
let age = prompt("Enter your age:");
age = Number(age);

if (age > 1 && age < 12) {
    console.log("You are a child");
} else if (age >= 12 && age < 18) {
    console.log("You are a teenager");
} else if (age >= 18 && age < 60) {
    console.log("You are an adult person");
} else if (age >= 60) {
    console.log("You are so old");
}

//////// 5 ////////
console.log("\n5. Name Conditions with switch case");
let name = prompt("Enter your name:");

let message;
switch (name) {
    case 'Admin':
        console.log("I have full access");
        message = "Hello Admin"
        break;
    case 'Student':
        console.log("I'm a student");
        message = "Hello student"
        break;
    case 'Teacher':
        console.log("I'm a teacher");
        message = "Hello teacher"
        break;
    case 'Young':
        console.log("I'm young and ready to party");
        message = "Go to the party! "
        break;
    default:
        console.log("You entered your own name");
        message = "Who are you?"
}
document.getElementById("Switch-Case").innerHTML = `<h2>${message}</h2>`;  

//////// 6 ////////
console.log("\n6. Comparison Operator Examples");
console.log(5 < 10); // true
console.log(15 > 10); // true
console.log(20 >= 20); // true
console.log(25 <= 30); // true
console.log(50 == "50"); // true
console.log(50 === "50"); // false 
console.log(100 != 101); // true
console.log(100 !== "100"); // true
console.log(true || false); // true
console.log(true && false); // false