import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("Enter text here")
    // setText("Heklijhadgsjdgfvijkh ghjfga sujkm")
    const uppercaseClick = () => {
        // console.log()
        setText(text.toUpperCase())
        props.showAlert("Text Transformed to UpperCase", "success")
    }
    const lowercaseClick = () => {
        // console.log()
        setText(text.toLowerCase())
        props.showAlert("Text Transformed to LowerCase", "success")
    }
    const clearText = () => {
        // console.log()
        setText("")
        props.showAlert("Text Cleared", "success")
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const copyText = () => {
        // text.select()
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success")
     }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>
                            {props.heading}
                        </h1>
                    </div>
                    <div className="col-12">
                        <label htmlFor="textarea">Enter text here</label>
                        <textarea id="textarea" rows="10" className="form-control" style={{ background: `${props.state === "light" ? "#1a1a1a" : "#fff"}`, color: `${props.state === "dark" ? "#1a1a1a" : "#fff"}` }} value={text} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12 mt-3">
                        <button className="btn btn-primary me-4" onClick={uppercaseClick}>Convert to Uppercase</button>
                        <button className="btn btn-primary me-4" onClick={lowercaseClick}>Convert to Lowercase</button>
                        <button className="btn btn-primary me-4" onClick={clearText}>Clear Text</button>
                        <button className="btn btn-primary me-4" onClick={copyText}>Copy Text</button>
                    </div>
                    <div className="col-12">
                        <p>{0.008 * text.split(' ').length} minutes to read</p>
                        <p>{text.split(' ').length} Words and {text.length} letters are there</p>

                        <h3>Preview</h3>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
