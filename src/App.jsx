import React,{useState} from "react";
import Header from "./components/header";
import Cards from "./components/cards";
import { CORE_CONCEPTS } from "../data";
import { EXAMPLES } from "../data";
import TabButton from "./components/tabButton";


function App() {
  const [tabContent,setContent]=useState('')

  function handleClick(element){
    setContent(element)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptelements,id)=>
              <Cards {...conceptelements}/>
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton clickEvent={()=>handleClick("components")}>Components</TabButton>
            <TabButton clickEvent={()=>handleClick("jsx")}>JSX</TabButton>
            <TabButton clickEvent={()=>handleClick("props")}>Props</TabButton>
            <TabButton clickEvent={()=>handleClick("state")}>State</TabButton>
          </menu>
            {!tabContent?<p>Please choose a topic</p> : 
            (<div id="tab-content"><h3>{EXAMPLES[tabContent].title}</h3><p>{EXAMPLES[tabContent].description}</p><pre>
                <code>
                  {EXAMPLES[tabContent].code}
                </code>
              </pre></div>)
            }

        </section>
      </main>
    </div>
  );
}

export default App;
