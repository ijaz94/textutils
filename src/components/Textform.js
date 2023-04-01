import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "sucess");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "sucess");
  }
  const handleCpClick = ()=>{
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText = ('');
    setText(newText);
  }

  const handleonChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleCpClick}>Capitalize</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
