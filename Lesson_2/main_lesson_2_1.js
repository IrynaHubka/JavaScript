// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(box);

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


