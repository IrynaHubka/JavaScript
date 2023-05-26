// Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 10;

 if (x !== 0) {
     console.log('true');
 }
 else {
     console.log('false');
 }

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = 30;

if (time >= 0 && time <= 15) {
    console.log('Перша чверть години');
} else if (time >= 16 && time <= 30) {
    console.log('Друга чверть години');
} else if (time >= 31 && time <= 45) {
    console.log('Третя чверть години');
} else if (time >= 46 && time <= 59) {
    console.log('Четверта чверть години');
} else {
    console.log("Невірне значення часу");
}

//  У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

 let day = 13;
    if (day <= 10) {
       console.log("Перша декада місяця");
 } else if (day <= 20) {
     console.log("Друга декада місяця");
 } else {
     console.log("Третя декада місяця");
 }

//  Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let days = [1, 2, 3, 4, 5, 6, 7]

switch (days) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Ener number .from 1 to 7');
}

    //  Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.

let num1 = parseFloat(prompt('Введіть перше число'));
let num2 = parseFloat(prompt('Введіть друге число'));

if (num1 > num2) {
    console.log(`Максимальне число: ${num1}`);
} else if (num2 > num1) {
    console.log(`Максимальне число: ${num2}`);
} else {
    console.log('Введені числа рівні');
}

//  Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let  X = 'value';
    if (X === NaN || x === undefined || x === null || 0) {
        X = 'default';
        console.log(x);
    }

