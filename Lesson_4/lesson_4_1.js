/* - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б */
function cutP (a,b){
    return a * b;
}
console.log(cutP(10,7));

// /* - створити функцію яка обчислює та повертає площу кола з радіусом r */
function coloR (r){
    return 3.14 * r * r;
}
console.log (coloR(5));

// /*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r */
function cylinderR (h,r){
    return (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
}
console.log(cylinderR(14, 7));
console.log(cylinderR(13, 4));

// /* - створити функцію яка приймає масив та виводить кожен його елемент */
function elements(arr) {
    for (let item of arr) {
        console.log(item);

    }
}
elements([8, 10, 9, 'school']);

/* - створити функцію яка створює параграф з текстом. Текст задати через аргумент */
function paragrafT(text){
    document.write(`<p> ${text} </p>`);
}
paragrafT('work, life, life' );

// /* - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий */

function paragrafUl(text){
    document.write(`<ul>`);

        document.write(`<li> ${text} </li>`);
        document.write(`<li> ${text} </li>`);
        document.write(`<li> ${text} </li>`);

    document.write(`</ul>`);
}
paragrafUl('work, life, life' );
paragrafUl('life, life, life' );

// /* - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) */
// function createListWithItems(text, count) {
//     const ul = document.createElement("ul");
//     for (let i = 0; i < count; i++) {
//         const li = document.createElement("li");
//         li.textContent = text;
//         ul.appendChild(li);
//     }
//     return ul;
// }
// const list = createListWithItems("Text", 3);
// document.body.appendChild(list);
//
// /*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */
// function createListFromArray(arr) {
//     const ul = document.createElement('ul');
//     for (let i = 0; i < arr.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = arr[i];
//         ul.appendChild(li);
//     }
//     return ul;
// }
// const myBox = [1, "two", true, "four"];
// const bigList = createListFromArray( myBox);
// document.body.appendChild(bigList);

