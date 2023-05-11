/* - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б */

function areaRectangle(a, b) {
    let area = a * b;
    return area;
}
let result = areaRectangle(5, 10);
console.log(result);

/* - створити функцію яка обчислює та повертає площу кола з радіусом r */
function areaCircle(r) {
    let area_C = Math.PI * Math.pow(r, 2);
    return area_C;
}
let resultat = areaCircle(5);
console.log(resultat);

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r */
function cylinderArea(r, h) {
const baseArea = Math.PI * r ** 2;
const lateralArea = 2 * Math.PI * r * h;
const totalArea = baseArea + lateralArea;
return totalArea;
}
const r = 5;
const h = 10;
const area = cylinderArea(r, h);
console.log(area);

/* - створити функцію яка приймає масив та виводить кожен його елемент */
function elements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
} let myArray = [1, 2, 3, 4, 5];
elements(myArray);




/* - створити функцію яка створює параграф з текстом. Текст задати через аргумент
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
- створити функцію яка повертає найменьше число з масиву
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250 */