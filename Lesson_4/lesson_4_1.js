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

/* - створити функцію яка створює параграф з текстом. Текст задати через аргумент */
function createParagraph(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}
let myText = "Hello World";
let myParagraph = createParagraph(myText);
document.body.appendChild(myParagraph);

/* - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий */
function createList(text) {
    let myList = document.createElement("ul");
    for (let i = 1; i <= 3; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = text;
        myList.appendChild(listItem);
    }
    return myList;
}
let myWords = "This is life";
let myList = createList(myWords);
document.body.appendChild(myList);


/* - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) */
function createListWithItems(text, count) {
    const ul = document.createElement("ul");
    for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
}
const list = createListWithItems("Text", 3);
document.body.appendChild(list);

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */
function createListFromArray(arr) {
    const ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);
    }
    return ul;
}
const myBox = [1, "two", true, "four"];
const bigList = createListFromArray( myBox);
document.body.appendChild(bigList);

