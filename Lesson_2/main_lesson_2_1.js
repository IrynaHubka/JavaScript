// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(box);
console.log(box[0]);
console.log(box[1]);
console.log(box[2]);
console.log(box[3]);
console.log(box[4]);
console.log(box[5]);
console.log(box[6]);
console.log(box[7]);
console.log(box[8]);
console.log(box[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookA = {
    title: 'Flowers',
    pageCount: 520,
    genre: 'scientific'
}

let bookB = {
    title: 'Trees',
    pageCount: 200,
    genre: 'scientific'
    }

let bookC = {
    title: 'Bushes',
    pageCount: 300,
    genre: 'scientific'
    }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Flowers',
    pageCount: 520,
    genre: 'scientific',
    authors: ['name', 'age']
}

let book2 = {
    title: 'Trees',
    pageCount: 200,
    genre: 'scientific',
    authors: ['name', 'age']
}

let book3 = {
    title: 'Bushes',
    pageCount: 300,
    genre: 'scientific',
    authors: ['name', 'age']
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Iryna',
        username: 'ira',
        password: 11111
    },

    {
        name: 'Igor',
        username: 'igo',
        password: 22222
    },

    {
        name: 'Svitlana',
        username: 'svitlo',
        password: 33333
    },

    {
        name: 'Vova',
        username: 'vov',
        password: 44444
    },

    {
        name: 'Slava',
        username: 'slav',
        password: 55555
    },

    {
        name: 'Nina',
        username: 'nino',
        password: 66666
    },

    {
        name: 'Mira',
        username: 'mir',
        password: 77777
    },

    {
        name: 'Den',
        username: 'denchik',
        password: 88888
    },

    {
        name: 'Klava',
        username: 'klavka',
        password: 99999
    },

    {
        name: 'Anna',
        username: 'ann',
        password: 10100
    },
]

console.log(users);
console.log(users [0]['password']);
console.log(users [1]['password']);
console.log(users [2]['password']);
console.log(users [3]['password']);
console.log(users [4]['password']);
console.log(users [5]['password']);
console.log(users [6]['password']);
console.log(users [7]['password']);
console.log(users [8]['password']);
console.log(users [9]['password']);


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
