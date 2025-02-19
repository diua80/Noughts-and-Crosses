
import * as basicLightbox from "basiclightbox";
const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];
const historyX = [];
const historyO = [];
let player = "X";

const content = document.querySelector(".content");
createMarkup();
content.addEventListener("click", handleClick);
//створимо рядок з 9 дівчиків;
function createMarkup() {
    let markup = "";
    for (let i = 1; i <= 9; i += 1){
        markup += `<div class = "item" data-id = "${i}"></div>`
    }
    content.innerHTML = markup;
}
function handleClick(event) {
    if (event.target.textContent || event.target === event.currentTarget) {
        return;
    }
    const id = Number(event.target.dataset.id);
    // handleClick обробляє клік.. якщо ходить хрестик, то треба перед малюванням х або о перевірку
    // створимо флажок чи виграв гравець..
    // за замовченням   
    let isWinner = "false"; 
    if (player === "X") {
        historyX.push(id);
        isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;        
    } else {
        historyO.push(id);
        isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
    };
    if (isWinner) {
        const instance = basicLightbox.create(
            `<div class = "mbox">
            <h1 class = "headText">
            <p style = "font-size: 60px; margin: 0; padding: 0;">${player}</p>
            <p>Is the winner!</p>
            </h1>
            </div>
            `
        );
        instance.show();
        resetGame();
        return;
    }
    if (historyO.length + historyX.length === 9) {
        const instance = basicLightbox.create(
            `
            <div class = "mbox">
            <h1 class = "headText">
            <p style = "font-size: 40px; margin: 0; padding: 0;">Friendship won!</p>            
            </h1>
            </div>
            `);
        instance.show();
        resetGame();
        return;
    }
    event.target.textContent = player;
    player = player === "X" ? "O" : "X";
}
function checkWinner(history) {
    return combination.some(item => item.every((id) => history.includes(id)));
}
function resetGame() {
    createMarkup();
    player = "X";
    historyO.splice(0);
    historyX.splice(0);
}