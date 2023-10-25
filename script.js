const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const playToSelect = document.querySelector('#playTo');
const txt = document.querySelector('#txt');

let p1Scores = 0;
let p2Scores = 0;
let winnigScore = 5; 
let isGameOver = false;

p1Button.addEventListener('click',function() {
    if(!isGameOver) {
        p1Scores++;
        p1Score.textContent = p1Scores;
        if(p1Scores==winnigScore) {
            isGameOver = true;
            p1Score.style.color = 'green';
            p2Score.style.color = 'red';
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

p2Button.addEventListener('click',function() {
    if(!isGameOver) {
        p2Scores++;
        p2Score.textContent = p2Scores;
        if(p2Scores==winnigScore) {
            isGameOver = true;
            p1Score.style.color = 'red';
            p2Score.style.color = 'green';
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})

resetButton.addEventListener('click',function() {
    reset();
})

playToSelect.addEventListener('change',function() {
    winnigScore = parseInt(this.value);
    reset();
})

function reset() {
    p1Score.textContent = '0';
    p2Score.textContent = '0';
    p1Scores = 0;
    p2Scores = 0;
    p1Score.style.color = 'black';
    p2Score.style.color = 'black';
    isGameOver = false;
    p1Button.disabled = false;
    p2Button.disabled = false;
}
