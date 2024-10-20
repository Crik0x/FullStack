// * Розділяйте кожний пункт домашнього в коді коментарями.

// * Кожне завдання повинно бути виконане на 5 циклах: for, for of, for in, while, do while

// 1. Напишіть цикл, який виводить всі парні числа від 20 до 32.

// 2. Створіть масив зі списком:

//    вашого улюбленого фрукту,
//    вашого улюбленого кольору,
//    ім'я,
//    рандомного числа,
//    вашого віку.

//    Виведіть цей проітерований масив на консоль і визначте його тип даних.

// 3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

// 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

// 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

// 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

// 7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

// 8. Створіть prompt в якому потрібно проітерувати число з 0. 
//    Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//    Якщо це числа 100 і більше, завершити ітерацію.


function displayResult(elementId, result) {
    document.getElementById(elementId).innerHTML = result;
}

// 1. Цикл, який виводить всі парні числа від 20 до 32.
// For loop
function task1() {
    let result = 'For Loop: ';
    for (let i = 20; i <= 32; i++) {
        if (i % 2 === 0) result += i + ' ';
    }

    // For Of loop
    let evenNumbers = [];
    for (let i = 20; i <= 32; i++) {
        evenNumbers.push(i);
    }
    result += '<br>For Of Loop: ';
    for (let num of evenNumbers) {
        if (num % 2 === 0) result += num + ' ';
    }

    // For In loop (for arrays it's less common, but demonstrating)
    let arrayForIn = evenNumbers;
    result += '<br>For In Loop: ';
    for (let index in arrayForIn) {
        if (arrayForIn[index] % 2 === 0) result += arrayForIn[index] + ' ';
    }

    // While loop
    result += '<br>While Loop: ';
    let j = 20;
    while (j <= 32) {
        if (j % 2 === 0) result += j + ' ';
        j++;
    }

    // Do While loop
    result += '<br>Do While Loop: ';
    let k = 20;
    do {
        if (k % 2 === 0) result += k + ' ';
        k++;
    } while (k <= 32);

    displayResult('task1Result', result);
}

// 2. Масив зі списком: улюблений фрукт, колір, ім'я, випадкове число, вік
function task2() {
    let favoriteArray = ['Apple', 'Green', 'Nicolaj', Math.floor(Math.random() * 100), 30];

    // For Loop
    let result = 'For Loop: ';
    for (let i = 0; i < favoriteArray.length; i++) {
        result += favoriteArray[i] + ' ';
    }

    // For Of Loop
    result += '<br>For Of Loop: ';
    for (let item of favoriteArray) {
        result += item + ' ';
    }

    // For In Loop
    result += '<br>For In Loop: ';
    for (let index in favoriteArray) {
        result += favoriteArray[index] + ' ';
    }

    // While Loop
    result += '<br>While Loop: ';
    let i = 0;
    while (i < favoriteArray.length) {
        result += favoriteArray[i] + ' ';
        i++;
    }

    // Do While Loop
    result += '<br>Do While Loop: ';
    let j = 0;
    do {
        result += favoriteArray[j] + ' ';
        j++;
    } while (j < favoriteArray.length);

    displayResult('task2Result', result + '<br>Type: ' + typeof favoriteArray);
}

// 3. Цикл який виводить всі непарні числа від 17 до 39
function task3() {
    let result = 'For Loop: ';
    for (let i = 17; i <= 39; i++) {
        if (i % 2 !== 0) result += i + ' ';
    }

    let oddNumbers = [];
    for (let i = 17; i <= 39; i++) {
        oddNumbers.push(i);
    }
    
    result += '<br>For Of Loop: ';
    for (let num of oddNumbers) {
        if (num % 2 !== 0) result += num + ' ';
    }

    result += '<br>For In Loop: ';
    for (let index in oddNumbers) {
        if (oddNumbers[index] % 2 !== 0) result += oddNumbers[index] + ' ';
    }

    let j = 17;
    result += '<br>While Loop: ';
    while (j <= 39) {
        if (j % 2 !== 0) result += j + ' ';
        j++;
    }

    let k = 17;
    result += '<br>Do While Loop: ';
    do {
        if (k % 2 !== 0) result += k + ' ';
        k++;
    } while (k <= 39);

    displayResult('task3Result', result);
}

// 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи
function task4() {
    let array = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
    let result = 'For Loop: ';
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] % 2 === 0) {
            result += array[i] + ' ';
        }
    }

    result += '<br>For Of Loop: ';
    for (let item of array) {
        if (typeof item === 'number' && item % 2 === 0) {
            result += item + ' ';
        }
    }

    result += '<br>For In Loop: ';
    for (let index in array) {
        if (typeof array[index] === 'number' && array[index] % 2 === 0) {
            result += array[index] + ' ';
        }
    }

    let j = 0;
    result += '<br>While Loop: ';
    while (j < array.length) {
        if (typeof array[j] === 'number' && array[j] % 2 === 0) {
            result += array[j] + ' ';
        }
        j++;
    }

    let k = 0;
    result += '<br>Do While Loop: ';
    do {
        if (typeof array[k] === 'number' && array[k] % 2 === 0) {
            result += array[k] + ' ';
        }
        k++;
    } while (k < array.length);

    displayResult('task4Result', result);
}

// 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи
function task5() {
    let array = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
    let result = 'For Loop: ';
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] % 2 !== 0) {
            result += array[i] + ' ';
        }
    }

    result += '<br>For Of Loop: ';
    for (let item of array) {
        if (typeof item === 'number' && item % 2 !== 0) {
            result += item + ' ';
        }
    }

    result += '<br>For In Loop: ';
    for (let index in array) {
        if (typeof array[index] === 'number' && array[index] % 2 !== 0) {
            result += array[index] + ' ';
        }
    }

    let j = 0;
    result += '<br>While Loop: ';
    while (j < array.length) {
        if (typeof array[j] === 'number' && array[j] % 2 !== 0) {
            result += array[j] + ' ';
        }
        j++;
    }

    let k = 0;
    result += '<br>Do While Loop: ';
    do {
        if (typeof array[k] === 'number' && array[k] % 2 !== 0) {
            result += array[k] + ' ';
        }
        k++;
    } while (k < array.length);

    displayResult('task5Result', result);
}

// 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву
function task6() {
    let array = [1, 2, 4, 2, 3, 55, 66, 777, 12];
    let sum = 0;

    // For Loop
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let result = 'For Loop: ' + sum;

    // Reset sum for other loops
    sum = 0;

    // For Of Loop
    for (let item of array) {
        sum += item;
    }
    result += '<br>For Of Loop: ' + sum;

    // Reset sum for other loops
    sum = 0;

    // For In Loop
    for (let index in array) {
        sum += array[index];
    }
    result += '<br>For In Loop: ' + sum;

    // Reset sum for other loops
    sum = 0;

    // While Loop
    let j = 0;
    while (j < array.length) {
        sum += array[j];
        j++;
    }
    result += '<br>While Loop: ' + sum;

    // Reset sum for other loops
    sum = 0;

    // Do While Loop
    let k = 0;
    do {
        sum += array[k];
        k++;
    } while (k < array.length);
    result += '<br>Do While Loop: ' + sum;

    displayResult('task6Result', result);
}

// 7. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть середнє значення всіх елементів масиву
function task7() {
    let array = [1, 2, 4, 2, 3, 55, 66, 777, 12];
    let sum = 0;

    // For Loop
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    let result = 'For Loop: ' + average;

    // Reset sum for other loops
    sum = 0;

    // For Of Loop
    for (let item of array) {
        sum += item;
    }
    average = sum / array.length;
    result += '<br>For Of Loop: ' + average;

    // Reset sum for other loops
    sum = 0;

    // For In Loop
    for (let index in array) {
        sum += array[index];
    }
    average = sum / array.length;
    result += '<br>For In Loop: ' + average;

    // Reset sum for other loops
    sum = 0;

    // While Loop
    let j = 0;
    while (j < array.length) {
        sum += array[j];
        j++;
    }
    average = sum / array.length;
    result += '<br>While Loop: ' + average;

    // Reset sum for other loops
    sum = 0;

    // Do While Loop
    let k = 0;
    do {
        sum += array[k];
        k++;
    } while (k < array.length);
    average = sum / array.length;
    result += '<br>Do While Loop: ' + average;

    displayResult('task7Result', result);
}

// 8. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть максимальне значення
function task8() {
    let array = [1, 2, 4, 2, 3, 55, 66, 777, 12];
    let max = array[0];

    // For Loop
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    let result = 'For Loop: ' + max;

    // Reset max for other loops
    max = array[0];

    // For Of Loop
    for (let item of array) {
        if (item > max) {
            max = item;
        }
    }
    result += '<br>For Of Loop: ' + max;

    // Reset max for other loops
    max = array[0];

    // For In Loop
    for (let index in array) {
        if (array[index] > max) {
            max = array[index];
        }
    }
    result += '<br>For In Loop: ' + max;

    // Reset max for other loops
    max = array[0];

    // While Loop
    let j = 1;
    while (j < array.length) {
        if (array[j] > max) {
            max = array[j];
        }
        j++;
    }
    result += '<br>While Loop: ' + max;

    // Reset max for other loops
    max = array[0];

    // Do While Loop
    let k = 1;
    do {
        if (array[k] > max) {
            max = array[k];
        }
        k++;
    } while (k < array.length);
    result += '<br>Do While Loop: ' + max;

    displayResult('task8Result', result);
}

// Додати обробники подій для кнопок
document.getElementById('task1Button').onclick = task1;
document.getElementById('task2Button').onclick = task2;
document.getElementById('task3Button').onclick = task3;
document.getElementById('task4Button').onclick = task4;
document.getElementById('task5Button').onclick = task5;
document.getElementById('task6Button').onclick = task6;
document.getElementById('task7Button').onclick = task7;
document.getElementById('task8Button').onclick = task8;
