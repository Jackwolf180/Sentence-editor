import React, { useState } from "react"; // using hooks to add values to the varibles of the components

export default function TextArea(props) {
  const handleUpclick = () => {
    // console.log("Button for uppercase was clicked"+text)
    let newtext = text.toUpperCase();
    setText(newtext);
    alerting("The text has been changed to Upper Case","success")
  };
  const handleLoclick = () => {
    // console.log("Button for uppercase was clicked"+text)
    let newtext = text.toLowerCase();
    setText(newtext);
    alerting("The text has been changed to Lower Case","success")
  };
  const handleOnChange = (event) => {
    // console.log("there was a change")
    setText(event.target.value);
  };
  const handleCopyText = () => {
    var CopyText = document.getElementById("mytextbox");
    // CopyText.select();//if you want the text to be selected the use this line
    alerting("The text has been Copied to clipboard","success")
    navigator.clipboard.writeText(CopyText.value);
  };
  const handleClear = () => {
    setText("");
    alerting("The text has been Cleared","warning")
  };
  const alerting =(msg,title)=>{
    if(text.length!==0){
      props.showAlert(msg,title)
    }
  }
  const wordNo = () => {
    if (text.length === 0) {
      return "0";
    } else {
      return text.split(" ").filter((element)=>{return element.length !== 0}).length;
    }
  };
  // inorder to change the varibles of a component we use state and this can be done in a function based conponent by using hooks
  const [text, setText] = useState("Enter your Text here");
  //text= "new text "// this cannot be done because text already constant also only settext funciton should be used to update the value of text
  return (
    <>
      <div
        style={{
          backgroundColor: `${
            props.elementMode === "light" ? "white" : "#272242"
          }`,
          color: `${props.elementMode === "light" ? "black" : "white"}`,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mytextbox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.elementMode === "light" ? "white" : "#21253a"
              ,
              color: props.elementMode === "light" ? "black" : "white"
            }}
          ></textarea>
        </div>
        {/* // or even we can add disabled= text.length===0 */}
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-2" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-2" onClick={handleLoclick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-2" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-2" onClick={handleCopyText}>
          CopyText
        </button>


        {/* <button className="btn btn-primary mx-1 my-2" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopyText}>
          CopyText
        </button> */}
      </div>
      <div
        className="container my-2"
        style={{
          backgroundColor: `${
            props.elementMode === "light" ? "white" : "#272242"
          }`,
          color: `${props.elementMode === "light" ? "black" : "white"}`,
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {wordNo()} words and {text.length} Characters
        </p>
        <h3>{text.length===0?"Enter any text to preview":"Preview"}</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
