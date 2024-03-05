import React from "react";
import Header from "./components/header";
import Cards from "./components/cards";
import { CORE_CONCEPTS } from "../data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Cards {...CORE_CONCEPTS[0]}/>
            <Cards {...CORE_CONCEPTS[1]}/>
            <Cards {...CORE_CONCEPTS[2]}/>
            <Cards {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
