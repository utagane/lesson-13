'use strict';

// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests, 
// Функции: dogYears(), makeTea(), secret()
// Встроенные функции: console.log()
// Аргументы: myDog, 4, guests, 'Earl Grey'
// Параметры: dogname, age, cups, tea
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
console.log('Пример 1:');

let txt = 'JS';
console.log(txt.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
console.log('Пример 2:');


let str = 'я люблю JS!';

console.log(str.substr(2,5));
console.log(str.substr(-3,2));
console.log(str.substring(2,7));
console.log(str.substring(8,10));
console.log(str.slice(2,7));
console.log(str.slice(8,10));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
console.log('Пример 3:');

let str1 = 'я люблю JS!';
console.log(str1.indexOf('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
console.log('Пример 4:');

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque distinctio fugiat iste voluptatibus quae nobis repellendus.'
let n = 10;
let result = '';

if(n < text.length){
    result = text.slice(0, n) + '...';
}else{
    result = text;
}
console.log(result);

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
console.log('Пример 4:');

let text1 = 'Я-люблю-JS!'
console.log(text1.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
console.log('Пример 5:');

let text2 = 'я люблю JS';
console.log(text2.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
console.log('Пример 6:');

let text3 = 'привет мир';
console.log(text3.split(''));