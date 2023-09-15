/* ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б */
let cutP = (a,b) => a * b;
console.log(cutP(10,7));

// // /* - створити функцію яка обчислює та повертає площу кола з радіусом r */
const coloR = (r) => 3.14 * r * r;
console.log (coloR(5));
//
// // /*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r */
const cylinderR = (h,r) => (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
console.log(cylinderR(14, 7));
console.log(cylinderR(13, 4));
//
// // /* - створити функцію яка приймає масив та виводить кожен його елемент */
// function elements(arr) {
//     for (let item of arr) {
//         console.log(item);
//
//     }
// }
// elements([8, 10, 9, 'school']);
//
// /* - створити функцію яка створює параграф з текстом. Текст задати через аргумент */
// function paragrafT(text){
//     document.write(`<p> ${text} </p>`);
// }
// paragrafT('work, life, life' );
//
// // /* - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий */
//
// function paragrafUl(text){
//     document.write(`<ul>`);
//
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//
//     document.write(`</ul>`);
// }
// paragrafUl('work, life, life' );
//
// // /* - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) */
// function paragrafL(text, nomer){
//     document.write(`<ul>`);
//     for (let i = 0; i < nomer; i++) {
//         document.write(`<li> ${text} </li>`);
//
//     }
//     document.write(`</ul>`);
// }
// paragrafL('work, work, work', 5 );
//
// // /*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */
// function fromArray (arr){
//     document.write(`<ul>`);
//     for (let arrElement of arr) {
//         document.write(`<li> ${arr} </li>`);
//     }
//     document.write(`</ul>`);
// }
// fromArray([123,'sing', 'song',true,false] );
//
//


