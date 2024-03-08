import React from "react";
import conceptImage from '../assets/react-core-concepts.png'

const words=['Important','Core','Crucial']
function getRandomWord(length){
    return Math.floor(Math.random()*(length));
}
const Header = () => {
    
    const word=words[getRandomWord(words.length)];
    
    return(
      <header>
          <img src={conceptImage} alt="Stylized atom" />
          <h1>Coding Essentials</h1>
          <p>
            Some of the most {word} concepts of programming and problem solving!
          </p>
        </header>
    );
  }
  export default Header;