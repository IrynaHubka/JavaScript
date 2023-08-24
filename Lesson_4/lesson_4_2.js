/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок. */
function renderUsers(users) {
    const container = document.createElement('div');

    users.forEach(user => {
        const userBlock = document.createElement('div');
        const userId = document.createElement('p');
        const userName = document.createElement('p');
        const userAge = document.createElement('p');

        userId.textContent = `Id: ${user.id}`;
        userName.textContent = `Name: ${user.name}`;
        userAge.textContent = `Age: ${user.age}`;

        userBlock.appendChild(userId);
        userBlock.appendChild(userName);
        userBlock.appendChild(userAge);

        container.appendChild(userBlock);
    });

    document.body.appendChild(container);
}
const users = [
    { id: 1, name: 'Anna', age: 25 },
    { id: 2, name: 'Vova', age: 30 },
    { id: 3, name: 'Igor', age: 35 },
];
renderUsers(users);

/* - створити функцію яка повертає найменьше число з масиву */
function findSmallestNumber(numbers) {
    return Math.min(...numbers);
}
let numbers = [4, 7, 1, 8, 3];
let smallestNumber = findSmallestNumber(numbers);
console.log(smallestNumber);

/* - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13 */
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(sum([1, 2, 10]));

/* - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44] */
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let arr = [11, 22, 33, 44];
swap(arr, 0, 1);
console.log(arr); // [22, 11, 33, 44]

/* - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250 */
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const currencyToBuy = currencyValues.find(currency => currency.currency === exchangeCurrency);
    const sumInExchangeCurrency = sumUAH / currencyToBuy.value;
    return sumInExchangeCurrency;
}
const currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
const sumUAH = 10000;
const exchangeCurrency = 'USD';
const sumInExchangeCurrency = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(sumInExchangeCurrency)





