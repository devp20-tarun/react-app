import React, {useState} from "react";


export default function About (props){

const [defaultTextState, updateTextState] = useState("White Mode");
const [defaultViewMode, updateViewMode] = useState({backgroundColor:"white",color:"black"});
const [defaultCheckedState, updateCheckedState] = useState(false);

    const togglMode = ()=>{
        if(defaultCheckedState === false){
            updateCheckedState(true);
            updateViewMode({backgroundColor:"black",color:"white"});
            updateTextState("Dark Mode Enabled");

        }
        else{
            updateCheckedState(false);
            updateViewMode({backgroundColor:"white",color:"black"});
            updateTextState("White Mode Enabled");
        }        
    }            
    
    return (
        <>
        <div className="container">
        <h2 className="my-2" style={props.bg}>{defaultTextState}</h2>
    <div className={"accordion my-3 " + (defaultCheckedState === false ? '1' : '2' )} id="accordionExample"> 
  <div className="accordion-item" style={defaultViewMode}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={defaultViewMode}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={defaultViewMode}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={defaultViewMode}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={defaultViewMode}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={defaultViewMode}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button type="button" className="btn btn-primary my-3" onClick={togglMode}>{defaultTextState}</button>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onChange={togglMode} checked={defaultCheckedState} />
</div>
</div>
</>
    )
}