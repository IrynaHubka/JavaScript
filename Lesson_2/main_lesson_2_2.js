// - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 10;

if (x !== 0) {
    console.log('true');
}
else {
    console.log('false');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = 30;

if (time >= 0 && time <= 15) {
    console.log("Перша чверть години");
} else if (time >= 16 && time <= 30) {
    console.log("Друга чверть години");
} else if (time >= 31 && time <= 45) {
    console.log("Третя чверть години");
} else if (time >= 46 && time <= 59) {
    console.log("Четверта чверть години");
} else {
    console.log("Введено некоректне значення часу");
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 13;

if (day <= 10) {
    console.log("Перша декада місяця");
} else if (day <= 20) {
    console.log("Друга декада місяця");
} else {
    console.log("Третя декада місяця");
}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).



// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
