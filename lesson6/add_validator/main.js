// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе:
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над
// протоколом, з регулярками будете потім бавитись.

const validator = (email) => {
    let toLowerCaseEmail = email.toLowerCase();
    if (!toLowerCaseEmail.startsWith('@')
        && toLowerCaseEmail.includes('@')
        && toLowerCaseEmail.includes('.', toLowerCaseEmail.indexOf('@') + 3)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }


}
validator('someemail@gmail.com');
validator('someeMAIL@gmail.com');
validator('someeMAIL@i.ua');
validator('some.email@gmail.com');

