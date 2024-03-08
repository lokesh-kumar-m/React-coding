import React from "react";
import Header from "./components/Header/header";
import Cards from "./components/Introduction/cards";
import { CORE_CONCEPTS } from "../data";
import Explaination from "./components/Explaination/explaination";



function App() {
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Focused Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptelements,id)=>
              <Cards {...conceptelements}/>
            )}
          </ul>
        </section>
        <Explaination/>
      </main>
    </div>
  );
}

export default App;
