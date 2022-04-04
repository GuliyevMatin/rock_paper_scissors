$(() => $("#myModal").modal("show"));

let player = document.querySelector("#player");
let playerChoose = document.querySelector("#playerChoose");
let comp = document.querySelector("#comp");
let compChoose = document.querySelector("#compChoose");
let playerScore = 0;
let compScore = 0;

let words = ["r", "s", "p"];
let p = document.createElement("p");
let a = Math.floor(Math.random() * words.length);

let randomWords = (arr) => {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

let playGame = (e) => {
  let userKeys = e.key.toLowerCase();
  let compKeys = randomWords(words);
  if (words.indexOf(userKeys) === -1) {
    alert("Zəhmət olmasa r s p Rəqəmlərini secin");
  } else {
    playerChoose.children[0].setAttribute("src", `./assets/img/${userKeys}.png`);
    compChoose.children[0].setAttribute("src", `./assets/img/${compKeys}.png`);

    if (
      (userKeys === "r" && compKeys === "s") ||
      (userKeys === "s" && compKeys === "p") ||
      (userKeys === "p" && compKeys === "r")
    ) {
      playerScore++;
      player.innerHTML = `
        <p>Win</p>
        <p>Player 1(ME)</p>
        <p>${playerScore}</p>
        `;
      comp.innerHTML = `
        <p>Lose</p>
        <p>Player 2(Comp)</p>
        <p>${compScore}</p>
        `;
        if (playerScore === 5) {
            setTimeout(() => {
              alert("User qalibdi,Təbriklər");
              location.reload();
            }, 500);
          }
    } else if (userKeys === compKeys) {
      player.innerHTML = `
        <p class="draw">Draw</p>
        <p>Player 1(ME)</p>
        <p>${playerScore}</p>
        `;
      comp.innerHTML = `
        <p class="draw">Draw</p>
        <p>Player 2(Comp)</p>
        <p>${compScore}</p>
        `;
    } else {
      compScore++;
      comp.innerHTML = `
        <p class="win">Win</p>
        <p>Player 2(Comp)</p>
        <p>${compScore}</p>
        `;
      player.innerHTML = `
        <p class="lose">Lose</p>
        <p>Player 1(ME)</p>
        <p>${playerScore}</p>
        `;
      if (compScore === 5) {
        setTimeout(() => {
          alert("Comp qalibdi,yenidən cəhd edin");
          location.reload();
        }, 500);
      }
    }
  }
};

window.onkeypress = playGame;
