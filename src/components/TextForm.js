import React, {useState} from 'react'

export default function TextForm(prop) {
    const handleUpcase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

// a function which listen a even when any changes occure in text area
//onChange is usefull for text area otherwise we can not get permission to write or update in text area

    const handleOnChange = (event)=>{
       console.log("on change")
       setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");

  return (
   <><h1>{prop.handling}</h1>
   <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Enter text</label>
          <textarea className="form-control"  onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpcase}>convert to upper case</button>
    </>
  )
}
