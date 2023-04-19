const allItemsRef = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allItemsRef.length}`);

const namesOfCategoriesRef = document.querySelectorAll('h2');
const listsInEveryCategoryRef = document.querySelectorAll('.item > ul');

namesOfCategoriesRef.forEach(name => {
    console.log(`Category: ${name.textContent}`);
});

listsInEveryCategoryRef.forEach(list => {
    console.log(`Elements: ${list.childElementCount}`);
});



