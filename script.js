
console.log("✅ Скрипт успішно підключено");

const kunytu_kubik = document.querySelector('.btn.btn--roll'); 
const nova_gra = document.querySelector('.btn.btn--new'); 
const zaluhutu = document.querySelector('.btn.btn--hold'); 
const dice = document.querySelector('.dice');
const current_score = document.querySelector('.current-score');
const score = document.querySelector('.score');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let value2 = Number(current1.textContent);
let value = Number(current0.textContent); 




nova_gra.addEventListener('click', function () {
current0.textContent = 0
current1.textContent = 0
score0.textContent = 0
score1.textContent = 0
player2.classList.remove('player--active');
player1.classList.add('player--active');
player2.classList.remove('player--winner');
player2.classList.remove('player--winner');
document.querySelectorAll('.win').forEach(el => el.classList.add('hidden'));
document.querySelectorAll('.current').forEach(el => el.classList.remove('hidden'));
document.querySelectorAll('.player').forEach(el => el.classList.remove('player--winner'));
document.querySelectorAll('.btn--roll').forEach(el => el.classList.remove('hidden'));
document.querySelectorAll('.btn--hold').forEach(el => el.classList.remove('hidden'));


});

function checkWinner() { 
    if (Number(current0.textContent) >= 100 || Number(score0.textContent) >= 100) {  
        player1.classList.add('player--winner');
        document.querySelectorAll('.current').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.btn--roll').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.btn--hold').forEach(el => el.classList.add('hidden'));
        // [0]перший елемент у списку
        document.querySelectorAll('.win')[0].classList.remove('hidden');
        
    } 
    else if (Number(current1.textContent) >= 100 || Number(score1.textContent) >= 100) {
        player2.classList.add('player--winner');
        document.querySelectorAll('.current').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.btn--roll').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.btn--hold').forEach(el => el.classList.add('hidden'));
        // [1] другий елемент у списку
        document.querySelectorAll('.win')[1].classList.remove('hidden');
    }
}





zaluhutu.addEventListener('click', function () {
  checkWinner();
let scoreA = Number(score0.textContent);
let scoreB = Number(score1.textContent);
if (player1.classList.contains('player--active')) {
    scoreA += value;             // Додаємо тимчасовий рахунок
    score0.textContent = scoreA;
    current0.textContent = 0;    // Обнуляємо поточне
    value = 0; 
  player1.classList.remove('player--active');
  player2.classList.add('player--active');
} else if (player2.classList.contains('player--active')) {
  scoreB += value2;
  score1.textContent = scoreB;
  current1.textContent = 0;
  value2 = 0; 
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
} else {
  alert("⚠️ Сталася помилка з активним гравцем");
};
});

kunytu_kubik.addEventListener('click', function () {

    checkWinner();
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log("🎲 Випало число:", randomNumber);
  

if (player1.classList.contains('player--active')) {
    
if (randomNumber == 1) {
        document.querySelector('.dice').src = './dice1.png';
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        current0.textContent = 0;
      } else if (randomNumber === 2) {
        document.querySelector('.dice').src = './dice2.png';
        value += 2; // додаємо 1
        current0.textContent = value;
      }else if (randomNumber === 3) {
        document.querySelector('.dice').src = './dice3.png';
        value += 3; // додаємо 1
        current0.textContent = value;
      }else if (randomNumber === 4) {
        document.querySelector('.dice').src = './dice4.png';
        value += 4; // додаємо 1
        current0.textContent = value;
      }else if (randomNumber === 5) {
        document.querySelector('.dice').src = './dice5.png';
        value += 5; // додаємо 1
        current0.textContent = value;
      } else {
        document.querySelector('.dice').src = './dice6.png';
        value += 6; // додаємо 1
        current0.textContent = value;
      }

  } else if (player2.classList.contains('player--active')) {
    if (randomNumber == 1) {
        document.querySelector('.dice').src = './dice1.png';
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        current1.textContent = 0;
      } else if (randomNumber === 2) {
        document.querySelector('.dice').src = './dice2.png';
        value2 += 2; // додаємо 1
        current1.textContent = value2;
      }else if (randomNumber === 3) {
        document.querySelector('.dice').src = './dice3.png';
        value2 += 3; // додаємо 1
        current1.textContent = value2;
      }else if (randomNumber === 4) {
        document.querySelector('.dice').src = './dice4.png';
        value2 += 4; // додаємо 1
        current1.textContent = value2;
      }else if (randomNumber === 5) {
        document.querySelector('.dice').src = './dice5.png';
        value2 += 5; // додаємо 1
        current1.textContent = value2;
      } else {
        document.querySelector('.dice').src = './dice6.png';
        value2 += 6; // додаємо 1
        current1.textContent = value2;
      }
  } else {
    alert("⚠️ Сталася помилка з активним гравцем");
  };
 
});
    


