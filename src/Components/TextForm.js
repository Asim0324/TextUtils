import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import {toggleColor} from './ToggleColor';

export default function TextForm(props) {
  const [text, settext] = useState('');

  let upperCase = ()=>{
    settext(text.toUpperCase());
    console.log("upperCase clicked");
    props.toggleAlert('Converted to Upper Case', 'success');
  }
  
  let lowerCase = ()=>{
    settext(text.toLowerCase());
    console.log("lowerCase clicked");
    props.toggleAlert('Converted to Lower Case', 'success');
  }

  let onChange = (event)=>{                   // need to understand
    settext(event.target.value);              // need to understand ????
    console.log("onChange Triggered");
  }
  
  let clear = ()=>{
    settext('');
    props.toggleAlert('Textbox Cleared', 'warning');
  }

  let handleCopy = ()=>{
    let text = document.getElementById("copy");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.toggleAlert('Copied to Clipboard', 'primary');
  }

  let handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(' '));
    props.toggleAlert('Removed extra spaces from text', 'success');
  }

  // let plainText = ()=>{
  //   value
  // }

  return (
    <div className={`centerForm text-${props.theme === false ? 'light' : 'dark'} `}>
      <h1 className='my-4'>{props.heading}</h1>
      <textarea value={text} onChange={onChange} className={`form-control text-${props.theme === false ? 'light' : 'dark'} `} id="copy" rows="9" placeholder='You have not typed anything' style={{ backgroundColor: props.theme === false ? '#263238' : 'white'}}></textarea>
      <button onClick={upperCase} type="button" className="btn btn-primary btn1">{props.button1}</button>
      <button onClick={lowerCase} type="button" className="btn btn-success btn1">Convert to Lower Case</button>
      <button onClick={handleExtraSpace} type="button" className="btn btn-warning btn1">Remove Extra Spaces</button>
      <button onClick={clear} type="button" className="btn btn-danger btn1">Clear</button>
      <button onClick={handleCopy} type="button" className="btn btn-secondary btn1">Copy</button>
      <h2 className='my-3'>Summary :</h2>
      <p className='d-flex justify-content-center'>
        <button type="button" className={`btn btn-outline-${props.theme === false ? 'primary' : 'danger'}  me-3`}><b>{text.split(' ').length}</b> Words</button>
        <button type="button" className={`btn btn-outline-${props.theme === false ? 'warning' : 'dark'} `}><b>{text.length}</b> Characters</button></p>
      <h3 className='my-3'>Plain Text :</h3>
      <p className='ms-3'>{text.length > 0 ? text : 'Type anything in the above Textbox to preview here.'}</p>
    </div>

  )
}

TextForm.defaultProps = {
  heading: "Type Anything",
  button1: "First",
  button2: "Second",
  button3: "Third",
};

TextForm.propTypes = {
  heading: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string,
  button3: PropTypes.string,
};
