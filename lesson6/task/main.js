// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// let toUpperCase1 = str1.toUpperCase(); 
// console.log(toUpperCase1);
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

//
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
//
// let toLowerCase1 = str1.toLowerCase();
// console.log(toLowerCase1);
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);
// let toLowerCase3 = str3.toLowerCase();
// console.log(toLowerCase3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let cleanStr = str.trim();
// console.log(cleanStr);
// console.log(str.length);
// console.log(cleanStr.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']



// let str = 'Ревуть воли як ясла повні';
//
// const stringToArray = (str) => {
//     return arr = str.split(' ');
// }
//
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . 
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let StrNumbers = numbers.map(value => {
//     return value.toString()
// });
// console.log(StrNumbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3];
//
// let numbersAscending = nums.sort((num1, num2) => {
//     return num1 - num2;
// });
// console.log(numbersAscending);
//
// let numbersDescending = nums.sort((num1, num2) => {
//     return num2 - num1
// });
//
// console.log(numbersDescending);


//// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortedCourses = coursesAndDurationArray.sort((course1, course2) => {
//     return course2.monthDuration - course1.monthDuration
// });
//
// console.log(sortedCourses);


//// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let filteredCourses = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5
// });
// console.log(filteredCourses);


// описати колоду карт

// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let deck = [
//     {cardSuit: 'Spade', value: '6', color: 'Black'},
//     {cardSuit: 'Clubs', value: '6', color: 'Black'},
//     {cardSuit: 'Hearts', value: '6', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '6', color: 'Red'},
//     {cardSuit: 'Spade', value: '7', color: 'Black'},
//     {cardSuit: 'Clubs', value: '7', color: 'Black'},
//     {cardSuit: 'Hearts', value: '7', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '7', color: 'Red'},
//     {cardSuit: 'Spade', value: '8', color: 'Black'},
//     {cardSuit: 'Clubs', value: '8', color: 'Black'},
//     {cardSuit: 'Hearts', value: '8', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '8', color: 'Red'},
//     {cardSuit: 'Spade', value: '9', color: 'Black'},
//     {cardSuit: 'Clubs', value: '9', color: 'Black'},
//     {cardSuit: 'Hearts', value: '9', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '9', color: 'Red'},
//     {cardSuit: 'Spade', value: '10', color: 'Black'},
//     {cardSuit: 'Clubs', value: '10', color: 'Black'},
//     {cardSuit: 'Hearts', value: '10', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '10', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
// ];


// - знайти піковий туз

// let mapSpadeAceCard = deck.map((card) => {
//    if(card.cardSuit ==='Spade' && card.value ==='Ace'){
//             console.log(card);
//    }
// });
//
// ////або:
// let filteredSpadeAceCard = deck.filter((card)=>{
//      return card.cardSuit ==='Spade' && card.value ==='Ace'
// });
// console.log(filteredSpadeAceCard);


// - всі шістки

// let filteredValue6 = deck.filter((card) => {
//     return card.value === '6';
// });
// console.log(filteredValue6);
//
// - всі червоні карти

// let filteredColorRed = deck.filter((card) => {
//     return card.color === 'Red';
// });
// console.log(filteredColorRed);


// - всі буби
// let filteredCardsSuitsDiamonds = deck.filter((card) => {
//     return card.cardSuit === 'Diamonds'
// });
// console.log(filteredCardsSuitsDiamonds);


// - всі трефи від 9 та більше

//
// let filteredCardsSuitsClubsHigher9 = deck.filter((card) => {
//     return card.cardSuit === 'Clubs' && (card.value >= '9' || card.value ==='10')
// });
// console.log(filteredCardsSuitsClubsHigher9);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let deck = [
//     {cardSuit: 'Spade', value: '6', color: 'Black'},
//     {cardSuit: 'Clubs', value: '6', color: 'Black'},
//     {cardSuit: 'Hearts', value: '6', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '6', color: 'Red'},
//     {cardSuit: 'Spade', value: '7', color: 'Black'},
//     {cardSuit: 'Clubs', value: '7', color: 'Black'},
//     {cardSuit: 'Hearts', value: '7', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '7', color: 'Red'},
//     {cardSuit: 'Spade', value: '8', color: 'Black'},
//     {cardSuit: 'Clubs', value: '8', color: 'Black'},
//     {cardSuit: 'Hearts', value: '8', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '8', color: 'Red'},
//     {cardSuit: 'Spade', value: '9', color: 'Black'},
//     {cardSuit: 'Clubs', value: '9', color: 'Black'},
//     {cardSuit: 'Hearts', value: '9', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '9', color: 'Red'},
//     {cardSuit: 'Spade', value: '10', color: 'Black'},
//     {cardSuit: 'Clubs', value: '10', color: 'Black'},
//     {cardSuit: 'Hearts', value: '10', color: 'Red'},
//     {cardSuit: 'Diamonds', value: '10', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
// ];
// let reduceDeckCardSuit = deck.reduce((newDeck, deck) => {
//
//     if (deck.cardSuit === 'Spade') {
//         newDeck.spades.push(deck)
//
//     } else if (deck.cardSuit === 'Diamonds') {
//         newDeck.diamonds.push(deck)
//
//     } else if (deck.cardSuit === 'Hearts') {
//         newDeck.hearts.push(deck)
//
//     } else if (deck.cardSuit === 'Clubs') {
//         newDeck.clubs.push(deck)
//     }
//     return newDeck;
//
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
// console.log(reduceDeckCardSuit);



