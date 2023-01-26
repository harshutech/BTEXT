import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
  const [text, setText] = useState("");

  // to upper case
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Conveted to UpperCase", "success");
  };

  // to lower case
  const handleLoWClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("conveted to LowerCase", "success");
  };

  // to copy text

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showalert("Text copied ✅", "success");
  };

  // to remove extra spaces
  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra spaces removed ", "success");
  };

  // to reset
  const reset = () => {
    setText("");
    props.showalert("Reseted", "success");
  };

  // to listen input
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="mb-3 my-5 container">
        <h2 className={`text-${props.mode === "light" ? "dark" : "white"}`}>
          {props.heading}
        </h2>
        <textarea
          className="form-control"
          id="mybox"
          rows="9"
          value={text}
          onChange={handleOnChange}
          placeholder="Type here..."
        ></textarea>

        <div>
          <button
            className="btn btn-primary my-1 m-1"
            onClick={handleUpClick}
            disabled={text.length === 0}
          >
            Convert to UperCase
          </button>

          <button
            className="btn btn-primary my-1 m-1"
            onClick={handleLoWClick}
            disabled={text.length === 0}
          >
            Convert to LowerCase
          </button>

          <button
            className="btn btn-primary my-1 m-1"
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Remove extra spaces
          </button>

          <button
            className="btn btn-primary my-1 m-1"
            onClick={handlecopy}
            disabled={text.length === 0}
          >
            Copy text
          </button>

          <button
            className="btn btn-success my-1 m-1"
            onClick={reset}
            disabled={text.length === 0}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="mb-3 my-5 container">
        <h2>Your text Summary</h2>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length}</b> Characters.
        </p>
        <p>
          Reading time <b>{0.008 * text.split("").length}</b> Minitues.
        </p>
      </div>
    </div>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default TextForm;
