import React,{useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState("Enter text here")
    // setText("Heklijhadgsjdgfvijkh ghjfga sujkm")
    const uppercaseClick = ()=>{
        // console.log()
        setText(text.toUpperCase())
    }
    const lowercaseClick = ()=>{
        // console.log()
        setText(text.toLowerCase())
    }
    const clearText = ()=>{
        // console.log()
        setText("")
    }
    const handleChange = (event)=>{
        setText(event.target.value)
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
                    <textarea  id="textarea" rows="10" className="form-control" value={text} onChange={handleChange}></textarea>
                </div>
                <div className="col-12 mt-3">
                    <button className="btn btn-primary me-4" onClick={uppercaseClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary me-4" onClick={lowercaseClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary me-4" onClick={clearText}>Clear Text</button>
                </div>
                <div className="col-12">
                    <p>{0.008*text.split(' ').length} minutes to read</p>
                    <p>{text.split(' ').length} Words and {text.length} letters are there</p>

                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    </>
  )
}
