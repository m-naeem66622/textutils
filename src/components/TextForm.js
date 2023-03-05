import React, { useState } from 'react'

function TextForm(props) {

    document.title = "TextUtils | A utility to analyze text";
    const [text, setText] = useState("")

    const onchangeHandle = (e) => {
        setText(e.target.value);
    }

    function upperCaseHandle() {
        setText(text.toUpperCase());
        props.showAlert("success", "Text converted to Upper Case")
    }
    function lowerCaseHandle() {
        setText(text.toLowerCase());
        props.showAlert("success", "Text converted to Lower Case")
    }
    function titleCaseHandle() {
        setText(text.split(" ").map((elem) => { return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase() }).join(" "));
        props.showAlert("success", "Text converted to Ttile Case Sentence.")
    }
    function copyHandle() {
        navigator.clipboard.writeText(text)
        props.showAlert("success", "Text copied to clipboard");
    }
    function pasteHandle() {
        navigator.clipboard.readText().then(clipText => setText(text + " " + clipText));
        props.showAlert("success", "Text pasted to Textbox.")
    }
    function clearHandle() {
        setText("");
        props.showAlert("success", "Textbox has been cleard.")
    }


    return (
        <div className={`container text-${props.theme.text} mt-4`}>
            <h1 className={`text-${props.theme.text}`}>Enter text below to analyze it:)</h1>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.theme.bg} text-${props.theme.text}`} rows="10" value={text} onChange={onchangeHandle}></textarea>
            </div>
            <button className='btn btn-primary mb-3' style={{ marginRight: "1rem" }} onClick={upperCaseHandle}>Upper Case</button>
            <button className='btn btn-primary mb-3' style={{ marginRight: "1rem" }} onClick={lowerCaseHandle}>Lower Case</button>
            <button className='btn btn-primary mb-3' style={{ marginRight: "1rem" }} onClick={titleCaseHandle}>Title Case</button>
            <button className='btn btn-primary mb-3' style={{ marginRight: "1rem" }} onClick={copyHandle}>Copy Text</button>
            <button className='btn btn-primary mb-3' style={{ marginRight: "1rem" }} onClick={pasteHandle}>Paste Text</button>
            <button className='btn btn-primary mb-3' style={{ marginRight: "1rem" }} onClick={clearHandle}>Clear Text</button>

            <p>Words: {text.split(/\s+/).filter(elem => elem.length !== 0).length} | Characters: {text.split("").length}</p>
            <p>Time to read: {text.split(/\s+/).filter(elem => elem.length !== 0).length / 125} Minutes</p>

            <h2>Preview</h2>
            <p>{text === "" ? "No text to preview" : text}</p>
        </div>
    )
}

export default TextForm
