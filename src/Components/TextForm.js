import React,{useState} from "react";
import PropTypes from 'prop-types';


function TextForm(props) {

    const [text, setText] = useState("");

    // to upper case
    const  handleUpClick=()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
      props.showalert("Conveted to UpperCase", "success")

    }

    // to lower case
    const handleLoWClick=()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
      props.showalert("conveted to LowerCase", "success")

    }

    // to copy text

    const handlecopy=()=>{
      var text = document.getElementById("mybox")
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showalert("Text copied ✅", "success")
    }

    // to remove extra spaces
    const handleExtraSpaces=()=>{
      let newtext =text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showalert("Extra spaces removed ", "success")

    }

    // to reset
    const reset=()=>{
        setText("");
      props.showalert("Reseted", "success")

    }
    
    // to listen input
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }


    return (
    <div>
      <div className="mb-3 my-5 container">
        <h2 className={`text-${props.mode ==='light' ? 'dark': 'white'}`}>{props.heading}</h2>
        <textarea
          className="form-control"
          id="mybox"
          rows="9"
          value={text}
          onChange={handleOnChange}
          placeholder="Type here..."
        ></textarea>
        
        <div>
        <button className="btn btn-primary my-4 m-1" onClick={handleUpClick}>Convert to UperCase</button>

        <button className="btn btn-primary my-4 m-1" onClick={handleLoWClick}>Convert to LowerCase</button>

        <button className="btn btn-primary my-4 m-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

        <button className="btn btn-primary my-4 m-1" onClick={handlecopy}>Copy text</button>

        <button className="btn btn-success my-4 m-1" onClick={reset}>Reset</button>

        </div>
      </div>
      <div className="mb-3 my-5 container">
        <h2>Your text Summary</h2>
        <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> Characters.</p>
        <p>Reading time <b>{0.008 * text.split("").length}</b> Minitues.</p>
      </div>
    </div>
  );

}
TextForm.propTypes={
    heading : PropTypes.string.isRequired,
}

export default TextForm;
