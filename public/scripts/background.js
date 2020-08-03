  const mainElement = document.querySelector("main");
  const bodyElement = document.querySelector("body");
  const messagesCardContainer = document.getElementById('messages-card-container');

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
       color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let colorOne = "grey";
  let colorTwo = "light-grey";
//   let colorThree = "grey";
//   let colorFour = "#23d5ab";

  mainElement.style.background = `linear-gradient(-90deg, ${colorOne}, ${colorTwo}, ${colorThree}, ${colorFour})`;
  mainElement.style.animation = "gradient 15s ease infinite";

  
  function changeColors(){
    colorOne = getRandomColor();
    colorTwo = getRandomColor();
    colorThree = getRandomColor();
    colorFour = getRandomColor();
  }

  // setInterval(changeColors(), 1000);

  /*
  .background-3 {
 
    background-image: linear-gradient(#8b9da9, #fff6e4);
    box-shadow: inset 0 0 100px hsla(0,0%,0%,.3);
  }
  */