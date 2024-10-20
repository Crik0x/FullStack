//1. Перевести тип і в консоль вивести результат через typeof
// - стрічку в булевий
// - число в булевий
// - стрічку в число
// - нул в булевий
// - андефайнед в булевий

// 2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)
// 2.1  Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль

// 3. Створити масив* list із 3 рівнями вкладеності (на кожному рівні не менше 3 елементів)
// 3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль

// 4. Напишіть цикл for, який виводить всі парні числа від 2 до 20.

// 5. Створіть масив зі списком вашого улюбленого фрукту, вашого улюбленого кольору, і вашого віку.
//    Виведіть цей масив на консоль і визначте його тип даних.

// 6. Напишіть 2 prompt які приймають два числа. виведіть більше з них. Використайте конструкцію if-else.

// 7. Напишіть цикл for який виводить всі непарні числа від 1 до 15.

// 8. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

// 9. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

// 10. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

// 11. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву 


// 1. Перевести тип і в консоль вивести результат через typeof:
console.log(typeof Boolean("hello")); // стрічка в булевий
console.log(typeof Boolean(100)); // число в булевий
console.log(typeof Number("123")); // стрічка в число
console.log(typeof Boolean(null)); // нул в булевий
console.log(typeof Boolean(undefined)); // андефайнед в булевий

// 2. Створити об'єкт user із 3 рівнями вкладеностей
let user = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 10001,
        details: {
            street: "5th Avenue",
            building: 23,
            apartment: 10
        }
    },
    hobbies: ["reading", "swimming", "coding"]
};

// 2.1 Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль
console.log(user.address.city); // 2 рівень
console.log(user.address.details.street); // 3 рівень
console.log(user.address.details.apartment); // 3 рівень

// 3. Створити масив list із 3 рівнями вкладеності
let list = [
    "apple", 
    "banana", 
    "orange", 
    [
        "car", 
        "bike", 
        "scooter", 
        [
            "red", 
            "blue", 
            "green"
        ]
    ]
];

// 3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль
console.log(list[3][1]); // 2 рівень
console.log(list[3][3][0]); // 3 рівень
console.log(list[3][3][2]); // 3 рівень


// 4. Напишіть цикл for, який виводить всі парні числа від 2 до 20
function displayEvenNumbers() {
    let evenNumbers = '';
    for (let i = 2; i <= 20; i++) {
        if (i % 2 === 0) {
            evenNumbers += i + " ";
        }
    }
    document.getElementById("evenNumbers").innerHTML = "Numeri pari da 2 a 20: " + evenNumbers;
}

let favoriteThings = ["mango", "blue", 30];
console.log(favoriteThings);
console.log(typeof favoriteThings); // Тип даних масив (object)


// 5. Створіть масив зі списком вашого улюбленого фрукту, вашого улюбленого кольору, і вашого віку
function displayFavoriteArray() {
    let favoriteThings = ["Mango", "Blu", 30];
    document.getElementById("favoriteArray").innerHTML = 
        "Frutto preferito: " + favoriteThings[0] + "<br>" +
        "Colore preferito: " + favoriteThings[1] + "<br>" +
        "Età: " + favoriteThings[2];
}


// 6. Напишіть 2 prompt які приймають два числа. виведіть більше з них
function promptNumbers() {
    let num1 = prompt("Введіть перше число:");
    let num2 = prompt("Введіть друге число:");
    num1 = Number(num1);
    num2 = Number(num2);

    let result;
    if (num1 > num2) {
        result = num1 + " більше за " + num2;
    } else if (num1 < num2) {
        result = num2 + " більше за " + num1;
    } else {
        result = "The numbers are egual";
    }

    document.getElementById("comparisonResult").innerHTML = result;
}


// 7. Напишіть цикл for який виводить всі непарні числа від 1 до 15
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}



// 8. Даний масив, виведіть парні елементи
let mixedArray = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number' && mixedArray[i] % 2 === 0) {
        console.log(mixedArray[i]); // Виведення парних елементів
    }
}

// 9. Даний масив, виведіть не парні елементи
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number' && mixedArray[i] % 2 !== 0) {
        console.log(mixedArray[i]); // Виведення непарних елементів
    }
}

// 10. Даний масив, виведіть суму всіх елементів масиву
let numbers = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Сума всіх елементів: " + sum);

// 11. Даний масив, перемножити та вивести всі елементи масиву
let arrayToMultiply = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let product = 1;
for (let i = 0; i < arrayToMultiply.length; i++) {
    product *= arrayToMultiply[i];
}
console.log("Добуток всіх елементів: " + product);

