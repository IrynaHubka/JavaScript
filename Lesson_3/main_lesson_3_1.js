// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 1; i <= 10; i++) {
    document.write(`<div> Hello World </div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++) {
    document.write("<div> " + i + " Box</div>");
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let temp = 1;
while (temp <= 20) {
    document.write(`<h1> love of learning </h1>`);
    temp++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i = 1;
while (i <= 20) {
    document.write(`<h1>bloc ${i} </h1>`);
    i++;
}






