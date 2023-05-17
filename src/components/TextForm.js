import React, {useState} from "react";

export default function TextForm(props){

const[staticText, setText] = useState('');
const runFormSubmitUppercase = ()=>{
    let newText = staticText.toUpperCase();
    setText(newText);
    
}

const newFunction = ()=> {
    let defVal = 1;
    let finalVal = defVal+1; 
    console.log(finalVal);
}
// change tex to lowercase
const runFormSubmiLowercase = ()=>{
    let newText = staticText.toLowerCase();
    setText(newText);    
}
// typed text updates in textarea
const updateTypedText = (event)=>{
    setText(event.target.value);
}
// clear button
const handleClearText = ()=>{
    let newText = '';
    setText(newText);
}

// staticText('Manual setting text');
// setText("Manual setting text");

    return (
        <>
        <div className="container">
            <h3 style={props.bg}>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="3" placeholder="Enter text here" value={staticText} onChange={updateTypedText}></textarea>
            </div> 
            <button className="btn btn-primary mx-1" onClick={runFormSubmitUppercase} style={props.color}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={runFormSubmiLowercase} style={props.color}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText} style={props.color}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={newFunction} style={props.color}>console</button>
        </div>
        <div className="container my-3">
            <h2>Your Summary</h2> 
            <p>{staticText.split(" ").length} words and characters {staticText.length}</p>
            <h3>Preview</h3>
            <p>{staticText.length > 0 ? staticText:'Enter text above to preview here.'}</p>
        </div>
        </>

    )
}