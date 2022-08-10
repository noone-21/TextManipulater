import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");   

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        if(text!==""){
            props.showAlert("Converted to UPPER CASE","success")
        }else{
            props.showAlert("Enter text to perform an action!","warning")
        }
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        if(text!==""){
            props.showAlert("Converted to lower case","success")
        }else{
            props.showAlert("Enter text to perform an action!","warning")
        }    
    }
    const handleCapCaseClick=()=>{
        const arr=text.split(" ");
        for(let i=0; i<arr.length;i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        setText(arr.join(" "));
        if(text!==""){
            props.showAlert("Converted to Capitalized Case","success")
        }else{
            props.showAlert("Enter text to perform an action!","warning")
        }
        
    }
    const handleSCaseClick=()=>{
        const arr=text.split(".");
        for(let i=0; i<arr.length;i++){
            if(arr[i].charAt(0)===" "){
                arr[i]=arr[i].slice(1);
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                arr[i]=" " + arr[i];
            }else{
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
        }
        setText(arr.join("."));
        if(text!==""){
            props.showAlert("Converted to Sentence case","success")
        }else{
            props.showAlert("Enter text to perform an action!","warning")
        }    
    }
    const handleAltCaseClick=()=>{
        let newText = text.toLowerCase().split("");
        for (let i = 0; i < newText.length; i += 2) {
        newText[i] = newText[i].toUpperCase();
        }
        setText(newText.join(""));
        if(text!==""){
            props.showAlert("Converted to AlTeRnAtE CaSe","success")
        }else{
            props.showAlert("Enter text to perform an action!","warning")
        } 
    }
    const handleClrClick=()=>{
        let newText="";
        setText(newText);
        if(text!==""){
            props.showAlert("Text cleared","success")
        }else{
            props.showAlert("Enter text to Clear!","warning")
        }    
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        if(text!==""){
            props.showAlert("Removed Extra spaces","success")
        }else{
            props.showAlert("Enter text to Remove Extra Spaces!","warning")
        }
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }  
  return (
<div className='container my-3'  >
<div  >
    <h1 style={{color:props.mode==='dark'?'#A5C9CA':'black'}}>{props.heading}</h1>
    <div className="form-group">
    <textarea style={{backgroundColor:props.mode==='dark'?'#395B64':'white',borderColor:props.mode=== 'dark'?'#2C3333':'#A5C9CA',
    borderRadius:'30px'}} 
    className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
    </div>
    <button  style={{color:props.mode==='dark'?'#A5C9CA':'black'}} className={`btn ${props.mode==="dark"?'btn-dark':'btn-light'} my-1 mx-1`} onClick={handleUpClick}>UPPER CASE</button>
    <button  style={{color:props.mode==='dark'?'#A5C9CA':'black'}} className={`btn ${props.mode==="dark"?'btn-dark':'btn-light'} my-1 mx-1`} onClick={handleLowClick}>lower case</button>
    <button  style={{color:props.mode==='dark'?'#A5C9CA':'black'}} className={`btn ${props.mode==="dark"?'btn-dark':'btn-light'} my-1 mx-1`} onClick={handleCapCaseClick}>Capitalized Case</button>
    <button  style={{color:props.mode==='dark'?'#A5C9CA':'black'}} className={`btn ${props.mode==="dark"?'btn-dark':'btn-light'} my-1 mx-1`} onClick={handleSCaseClick}>Sentence case</button>
    <button  style={{color:props.mode==='dark'?'#A5C9CA':'black'}} className={`btn ${props.mode==="dark"?'btn-dark':'btn-light'} my-1 mx-1`} onClick={handleAltCaseClick}>ALtErNaTiNg CaSe</button>
    <button  style={{color:props.mode==='dark'?'#A5C9CA':'black'}} className={`btn ${props.mode==="dark"?'btn-dark':'btn-light'} my-1 mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button  style={{color:props.mode==='dark'?'#A5C9CA':'black'}} className={`btn ${props.mode==="dark"?'btn-dark':'btn-light'} my-1 mx-1`} onClick={handleClrClick}>Clear Text</button>
</div>
<footer className="container ">
    <h1 style={{color:props.mode==='dark'?'#A5C9CA':'black'}}>TEXT SUMMARY</h1>
    <p style={{color:props.mode==='dark'?'#A5C9CA':'black'}}>{text.split(/\s+/).filter(function(n) { return n !== ''&& n !=='\n' }).length} word(s) and {text.split("").filter(function(n) { return n !== ' '&& n !== '\n' }).length}{" "}  
    character(s) and {text.split("\n").filter(function(n) { return n !== '' }).length} line(s)</p>
</footer>
</div>

    
  )
}
