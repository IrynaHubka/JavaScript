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


