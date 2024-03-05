import React from "react";
import conceptImage from '../assets/react-core-concepts.png'
const words=['Fundamental','Core','Crucial']
function getRandomWord(length){
    return Math.floor(Math.random()*(length));
}
const Header = () => {
    
    const word=words[getRandomWord(words.length)];
    
    return(
      <header>
          <img src={conceptImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {word} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }
  export default Header;