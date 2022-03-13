import React, { useState } from 'react'

export default function Navbar(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleCopyClick = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#4c4848' : 'white', color: props.mode === 'info' ? 'white' : 'black' }} id="myBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-info mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-info mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-info mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-info mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-info mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Minutes to Read {0.008 * text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here"}</p>

      </div>
    </>
  )
}