import React ,{useState} from 'react'

export default function TextForms(props) {
  const handleclick=()=>{
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to Upper case","success");
  }
  const handleloclick=()=>{
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("Converted to Lower case","success");

  }
  const handleclclick=()=>{
    console.log("Clear was clicked" + text);
    let newText =" ";
   setText(newText);
   props.showAlert("Text cleared","success");

  }
  const handlecopy=()=>{
    var text = document.getElementById('my-box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");

  }
  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className='form-control' value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} id='my-box' rows='8' onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleclick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclclick}>Clear</button>
      <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
    </div>
    <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{text.split(/[.?!]/g).length} sentences.</p>
      <p>read in {0.008 * text.split(" ").length} minutes</p>
      <h3>Preview of your text</h3>
      <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
   
    </>
  )
}
