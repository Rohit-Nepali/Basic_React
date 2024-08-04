import React, { useState } from 'react'


export default function TextForms(props) {
    const handleUpClick = () => {
        //console.log("To uppercase ")
        let newText = text.toUpperCase();
        setText(newText)
        console.log(newText)
    }

    const handlOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here");

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlOnChange} id="TextBox" rows="5"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
            <div className='container my-3' >
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
            </div>
        </>
    )
}
