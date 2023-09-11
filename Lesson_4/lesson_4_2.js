// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

function usersBlok(arr) {
    for (const user of arr) {
        document.write(`<div>id: ${user.id} - name: ${user.name} - age: ${user.age}</div>`);
    }
}

usersBlok(users);

// - створити функцію яка повертає найменьше число з масиву
const arrayBlok = [534, -10, 20, 0, -80, 2543];
function arrayLittle(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i];
        }
    }
    return result;
}

console.log(arrayLittle(arrayBlok));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (const number of arr) {
        result += number;
    }
    return result;
}

console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями занячення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    const numIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numIndex1;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sum, currencies, resultCurrency) {
    for (let cur of currencies) {
        if (cur.currency === resultCurrency) {
            return `${sum / cur.value} ${resultCurrency}`
        }
    }
    return 'Wrong currency!!!'
}
const currencies = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'W', value: 2},
    {currency: 'DE', value: 6},
    {currency: 'SS', value: 25},
    {currency: 'RE', value: 13},
    {currency: 'PL', value: 8},
]
const result = exchange(10000, currencies, 'DD')
console.log('result : ', result)




