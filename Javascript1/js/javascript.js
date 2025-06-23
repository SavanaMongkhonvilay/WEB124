// Savana Mongkhonvilay 6/22/25

"use strict"; 
//Code updates 
//added a function to get a random key 
//added score counter to check if correct key was pressed 
const ranKeyDisplay = document.getElementById("ranKey");
const scoreDisplay = document.getElementById("score");
let score = 0;
let currentTargetKey = 0;

const keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76]; // A–L keys

// Set a random key
function setRandomKey() {
  const randomIndex = Math.floor(Math.random() * keyCodes.length);
  currentTargetKey = keyCodes[randomIndex];
  ranKeyDisplay.textContent = `Press: ${String.fromCharCode(currentTargetKey)}`;
}

// Check if the key pressed was correct
function checkIfCorrectKey(keyCode) {
  if (keyCode === currentTargetKey) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    setRandomKey();
  }
  else{
    score = 0; 
    scoreDisplay.textContent = `Score: ${score}`;
  }
}


//function to play sounds
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // Stop if no audio

    audio.currentTime = 0; // Rewind to start
    audio.play();
    key.classList.add('playing'); // Add playing class

    //check if correct key played 
    checkIfCorrectKey(e.keyCode);

}
// Remove 'playing' class 
const keys = document.querySelectorAll('.key');

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// event listener for keyboard input
window.addEventListener('keydown', playSound);

setRandomKey();

