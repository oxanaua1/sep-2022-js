// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// масив вивести в консоль


function classIdFinder(htmlElement) {
    let children = htmlElement.children;
    let classArray = [];
    for (const child of children) {

        if (child.getAttribute('class') || child.getAttribute('id')) {
            classArray.push(child)

        }
        classIdFinder(child)
    }

    console.log(classArray);
}

classIdFinder(document.body);



