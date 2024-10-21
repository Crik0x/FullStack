// * Результат виконання кожного алгоритму вивести в консоль по принципу: <назва алгоритму>: <масив даних>

// 1. Реалізувати алгоритм: лінійний пошук для наступного масиву ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']

// 2. Реалізувати алгоритм: бінарний пошук для наступного масиву [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]


// Лінійний пошук
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return `Місто '${target}' знайдено на індексі: ${i}`;
        }
    }
    return `Місто '${target}' не знайдено.`;
}


function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return `Число '${target}' знайдено на індексі: ${mid}`;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return `Число '${target}' не знайдено.`;
}


let cities = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів'];


let numbers = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];


function performLinearSearch() {
    let cityInput = document.getElementById('cityInput').value;
    let result = linearSearch(cities, cityInput);
    document.getElementById('linearResult').innerHTML = result;
}


function performBinarySearch() {
    let numberInput = parseInt(document.getElementById('numberInput').value);
    let result = binarySearch(numbers, numberInput);
    document.getElementById('binaryResult').innerHTML = result;
}
