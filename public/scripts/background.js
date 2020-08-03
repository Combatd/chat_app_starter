  const mainElement = document.querySelector("main");

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
       color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let colorOne = "#ee7752";
  let colorTwo = "#e73c7e";
  let colorThree = "#23a6d5";
  let colorFour = "#23d5ab";

  mainElement.style.background = `linear-gradient(-90deg, ${colorOne}, ${colorTwo}, ${colorThree}, ${colorFour})`;
  mainElement.style.animation = "gradient 15s ease infinite";

  
  function changeColors(){
    colorOne = getRandomColor();
    colorTwo = getRandomColor();
    colorThree = getRandomColor();
    colorFour = getRandomColor();
    mainElement.style.background = `linear-gradient(-45deg, ${colorOne}, ${colorTwo}, ${colorThree}, ${colorFour})`;
  }

  // setInterval(changeColors(), 1000);