import React from "react";

const TabButton = ({children,clickEvent})=>{
    
    return(
        <li>
            <button onClick={clickEvent}>{children}</button>
        </li>
    );
}

export default TabButton;