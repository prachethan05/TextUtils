import React, { useState } from 'react';
export default function TextForm(props) {
    const [oldtext, settext] = useState('');
    const handleInputChange = (event) => {
        settext(event.target.value);
    };

    const handleclickUp = () => {
        let x = oldtext.toUpperCase();
        settext(x);
        props.showAlert("Converted to uppercase", "Successful");
    };
    const handleclicklo = () => {
        let x = oldtext.toLowerCase();
        settext(x);
        props.showAlert("Converted to LowerCase", "Successful");
    };
    const handleclickclear = () => {
        let x = '';
        settext(x);
        props.showAlert("Cleared Text", "Successful");
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(oldtext); 
        props.showAlert("Copied to Clipboard", "Successful");
    }
    const handleExtraSpaces = () => {
        let newText = oldtext.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "Successful");
    }
    return (
        <>
        <div className='container' >
                <h1>
                    {props.heading}
                </h1>
                <div className="" >
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    </label>
                    <div className="container" >
                    <textarea
                        className="form-control  "
                        id="exampleFormControlTextarea1"
                        rows="8"
                        value={oldtext}
                        onChange={handleInputChange}
                       
                    ></textarea>
                    </div>
                </div>
                <button className="btn btn-info mx-2  my-1" onClick={handleclickUp}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-info mx-2 my-1" onClick={handleclicklo}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-info mx-2 my-1" onClick={handleclickclear}>
                    Clear Text
                </button>
                <button className="btn btn-info mx-2 my-1" onClick={handleCopy}>
                    Copy your text
                </button>
                <button className="btn btn-info mx-2 my-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            {/* <div className="com" >
                <p >
                    Your Text Summary
                </p>
                <p>
                    {oldtext.split(" ").length} words and {oldtext.length} characters
                </p>
                <p>
                    User Can Take {oldtext.split(" ").length * 0.008} minutes to read the above text
                </p>
            </div> */
            }
            
      <div className="com paragraph-container"> {/* Added the paragraph-container class */}
        <p>Your Text Summary</p>
        <p>{oldtext.split(" ").length} words and {oldtext.length} characters</p>
        <p>User Can Take {oldtext.split(" ").length * 0.008} minutes to read the above text</p>
      </div>
        </>
    );
}
