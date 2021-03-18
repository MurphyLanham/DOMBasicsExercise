// 1
const portillos = document.getElementById(`portillos`);

// 2
const images = document.getElementsByTagName(`img`);

// 3
const centered = document.getElementsByClassName(`center`);

// 4
const ginosEast = document.querySelector(`div`);

// 5
const pTags = document.querySelectorAll(`p`);

// 6a
const h1 = document.querySelector(`h1`);
// const h1 = document.querySelector(`.center`)
// 6b
h1.innerText = "Matt's Favorite Places To Eat In Sweet Home Chicago!";

// 7a
const others = document.querySelector(`#others`);
// const others = document.getElementById(`others`)
// 7b
others.innerHTML =  `<h3>Other Favorites</h3>`;

// 8a
const aTag = document.querySelector(`a`);
// 8b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`text-color`, `background`);

// 10
h1.classList.remove(`background`);

// 11a
const h4 = document.createElement(`h4`);
// 11b
h4.innerText = `CHICAGO: Agreat place to eat!`;
// 11c
const body = document.querySelector(`body`);
body.prepend(h4)

// 12a
const h5 = document.createElement(`h5`);
// 12b
h5.innerText - "See you in the Windy City sometime!";
// 12c
aTag.insertAdjacentElement(`afterend`, h5);

// 13
const jays - document.querySelector(`li`);
jays.remove()