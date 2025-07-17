// Savana Mongkhonvilay 7/17/25 

// Added a randomize function the the last panel

  const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


//arrays for text 
  const randWords = [
    "Warmth", "Kindness", "Magic", "Good", "Power",
    "Light", "Love", "Peace", "Joy", "Strength",
    "Hope", "Dreams", "Harmony", "Wisdom", "Grace"
  ];

  let usedWords = []; 

  function getWord() { 
    //reset used words 
      if (usedWords.length >= randWords.length) {
      usedWords = [];
    }

    let word; 

    //randomize words 
    do {
      word = Math.floor(Math.random() * randWords.length);
    } while (usedWords.includes(word));

    usedWords.push(word);
    return word;

  }

  function randPanel() {
    document.getElementById("line1").textContent = randWords[getWord()];
    document.getElementById("line2").textContent = randWords[getWord()];
    document.getElementById("line3").textContent = randWords[getWord()];
  }

 randPanel(); 

 // button
document.getElementById("button").addEventListener("click", randPanel);
