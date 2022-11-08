// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3

// let x = +prompt('введіть число');
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// };


// - Дано змінну time, яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю чи четверту частину години).

// let time = +prompt('enter time from 0 to 59');
//
// if (time >= 0 && time <= 15) {
//     console.log('first quarter');
// } else if (time >= 16 && time <= 30) {
//     console.log('second quarter');
// } else if (time >= 31 && time <= 45) {
//     console.log('third quarter');
// } else if (time >= 46 && time <= 59) {
//     console.log('forth quarter');
// } else {
//     console.log('you have entered the wrong number or string');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

// let day = +prompt('enter number of day from 1 to 31')
//
// if (day >= 1 && day <= 10) {
//     console.log('first decade');
// } else if (day >= 11 && day <= 20) {
//     console.log('second decade');
// } else if (day >= 21 && day <= 31) {
//     console.log('third   decade');
// } else {
//     console.log('try once more carefully');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day = prompt('enter a number of the day of the week from 1 to 7');

switch (day) {
    case '1':
        console.log('Monday - I have nothing to do');
        break;
    case '2':
        console.log('Tuesday - I have nothing to do');
        break;
    case '3':
        console.log('Wednesday - I have nothing to do');
        break;
    case '4':
        console.log('Thursday - I have nothing to do');
        break;
    case '5':
        console.log('Friday - I have nothing to do');
        break;
    case '6':
        console.log('Saturday - I have nothing to do');
        break;
    case '7':
        console.log('Sunday - Still I have nothing to do');
        break;
    default:
        console.log('error');
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.


// let firstNum = +prompt('enter first number');
// let secondNum = +prompt('enter second number');
//
// if (firstNum - secondNum > 0) {
//     console.log(firstNum);
// } else if (secondNum - firstNum > 0) {
//     console.log(secondNum);
// } else if (firstNum === secondNum) {
//     console.log('equal numbers', firstNum);
// } else {
//     console.log('try again');
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х
//         значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt('enter any value')|| 'default'
//
// console.log(x);



