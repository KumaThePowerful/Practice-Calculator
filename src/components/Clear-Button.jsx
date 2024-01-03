import React from "react";
import '../style-sheets/Clear-Button.css'

const ClearButton = (props) => 
(
    <div className='clear-button'>
        {props.children}
    </div>
);

export default ClearButton; 