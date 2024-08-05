import React, { useState } from 'react'


export default function TextForms(props) {
    
    const [text, setText] = useState("Enter text here");
    const [rotationAngle,setRotationAngle] = useState(0);

    const handleUpClick = () => {
        //console.log("To uppercase ")
        let newText = text.toUpperCase();
        setText(newText)
        console.log(newText)
    }
    const handleLoClick = () => {
        //console.log("To uppercase ")
        let newText = text.toLowerCase();
        setText(newText)
        console.log(newText)
    }

    const handleOnRotateClick =() =>{
        setRotationAngle(rotationAngle + 45)
    }


    const handleOnClearClick = () =>{
        setText("")
    }

    const handlOnChange = (event) => {
        setText(event.target.value)
    }

    const rotatedTextStyle = {
        transform: `rotate(${rotationAngle}deg)`,
        display: 'inline-block'
    };
 
    console.log(text.split(" ").length ); // split returns an empty array with 1 as the length.
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlOnChange} id="TextBox" rows="5"></textarea>
                </div>
                <button className='btn btn-primary ' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary ms-2 ' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary ms-2 ' onClick={handleOnClearClick}>Clear Text</button>
                <button className='btn btn-primary ms-2 my -2' onClick={handleOnRotateClick}>Rotate</button>
            </div>
            <div className='container my-3' >
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters and {text.split(".").length -1} sentences.</p>
                <h2>Your text :</h2>
                <p style={rotatedTextStyle}>{text}</p>
            </div>
        </>
    )
}
