import React,{useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState("Enter text here")
    // setText("Heklijhadgsjdgfvijkh ghjfga sujkm")
    const uppercaseClick = ()=>{
        // console.log()
        setText(text.toUpperCase())
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
                    <button className="btn btn-primary" onClick={uppercaseClick}>Convert to Uppercase</button>
                </div>
            </div>
        </div>
    </>
  )
}
