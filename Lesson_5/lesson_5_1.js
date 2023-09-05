
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 34, status: true},
    {name: 'anya', age: 30, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
    // - користувачів зі статусом true

for (const user of users) {
  if (user.status) {
      document.write(`<div>Name: ${user.name} <br/> Age: ${user.age} Status: ${user.status}</div>`);
  }
}
// - користувачів зі статусом false
for (const user of users) {
  if (!user.status) {
      document.write(`<div>Name: ${user.name} <br/> Age: ${user.age} Status: ${user.status}</div>`);
  }
}
// - користувачів які старші за 30 років
for (const user of users) {
    if (user.age > 30) {
        document.write(`<div>Name: ${user.name} <br/> Age: ${user.age} Status: ${user.status}</div>`);
    }
}

