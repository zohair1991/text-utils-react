import React , {useState} from 'react'

export default function TextForm(props) {
const[myFirstStateTextVariable, setText]=useState("");
    const handleUpperCaseClick = ()=>{
        let newUpperText = myFirstStateTextVariable.toUpperCase();
        setText(newUpperText);
        props.showAlert("Text has been converted to Upper Case","success");
    }
    
    const handleLowerCaseClick = ()=>{
        let newUpperText = myFirstStateTextVariable.toLowerCase();
        setText(newUpperText);
        props.showAlert("Text has been converted to Lower Case","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleRemoveExtraSpacesClick = ()=>{
        let newText = myFirstStateTextVariable.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed.","success");
    }

    const handleClearClick = (event)=>{
        setText("");
    }
    

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h3>{props.heading}</h3>
    <div className="mb-3">
    <textarea className="form-control" style={
        {
            backgroundColor: props.mode === 'dark' ? '#200358' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
        }
                                             } 
     value={myFirstStateTextVariable} onChange={handleOnChange} id="txtMyBoxID" rows="12"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Upper Case</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>Lower Case</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your Text Summary</h3>
        <p>{myFirstStateTextVariable.split(" ").length} Words and {myFirstStateTextVariable.length} Characters.</p>
        <p>{0.008 * myFirstStateTextVariable.split(" ").length} Minute Read.</p>

        <h3>Preview</h3>
        <p>{myFirstStateTextVariable.length > 0 ?myFirstStateTextVariable: 'Please enter Text to Preview.'}</p>
    </div>
    </>
  )
}



