// Savana Mongkhonvilay 7/25/25

//fixed seconds hand animation 
//added dyamic background 
//added time at bottom 

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.getElementById('digitalTime');

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        //fixes seconds animation 
        if (seconds === 0) {
            secondHand.style.transition = 'none';
        } else {
            secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
        }

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  //time 
    function getDigitalTime() {
        const now = new Date();

        const hour = now.getHours();
        const mins = now.getMinutes();
        const seconds = now.getSeconds();

        let displayHour = hour % 12 || 12; 
        let ampm = hour >= 12 ? 'PM' : 'AM';

        let displayMinutes = mins < 10 ? '0' + mins : mins;
        let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

        digitalTime.textContent = `${displayHour}:${displayMinutes}:${displaySeconds} ${ampm}`;
    }

  //background 
  function getBackground() {
  const hour = new Date().getHours();
  const body = document.body;

  if (hour >= 6 && hour < 12) {
    //morning
    body.classList.add('morning');
  } else if (hour >= 12 && hour < 17) {
    //afternoon
    body.classList.add('afternoon');
  } else if (hour >= 17 && hour < 21) {
    //evening
    body.classList.add('evening');
  } else {
    //night
    body.classList.add('night');
  }
}



function updateClock() {
  setDate();
  getDigitalTime();
  getBackground();
}

setInterval(updateClock, 1000);
updateClock();
