import React,{useState} from "react";
import { EXAMPLES } from "../../../data";
import TabButton from "./tabButton";

import './explaination.css'
const Explaination= () =>{

    const [tabContent,setContent]=useState('');
    function handleClick(element){
        setContent(element)
    }

    return(
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton clickEvent={()=>handleClick("dynamicprograming")}>Dynamic Programing</TabButton>
          <TabButton clickEvent={()=>handleClick("linkedlist")}>Linked Lists</TabButton>
          <TabButton clickEvent={()=>handleClick("trees")}>Trees</TabButton>
          <TabButton clickEvent={()=>handleClick("graphs")}>Graphs</TabButton>
        </menu>
          {!tabContent?<p>Please choose a topic</p> : 
          (<div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <p>{EXAMPLES[tabContent].representation}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>
          </div>)
          }
      </section>
    );
}
export default Explaination;
