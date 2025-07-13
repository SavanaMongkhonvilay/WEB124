// Savana Mongkhonvilay 7/13/25 

// Added color pickers for each shadow color and background



  const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 500; // 500px

// variables for each color 
const colorInputs = [
  document.getElementById('color1'),
  document.getElementById('color2'),
  document.getElementById('color3'),
  document.getElementById('color4'), 
  document.getElementById('color5'), // background

];

// input colors with color map 
let shadowColors = colorInputs.map(input => input.value);

// update colors
colorInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    shadowColors[index] = input.value;
    //if index is 4, background(color5) changes 
     if (index === 4) {
      document.body.style.backgroundColor = shadowColors[4];
     }
  });
});

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 ${shadowColors[0]},
    ${xWalk * -1}px ${yWalk}px 0 ${shadowColors[1]},
    ${yWalk}px ${xWalk * -1}px 0 ${shadowColors[2]},
    ${yWalk * -1}px ${xWalk}px 0 ${shadowColors[3]}
  `;

  }

  hero.addEventListener('mousemove', shadow);

