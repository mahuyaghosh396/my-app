import React, {useState} from 'react'

export default function TextForm(prop) {
    const handleUpcase = ()=>{
        setText("you have clicked on handleUPclick")
    }
    const [text, setText] = useState("Enter text here");

  return (
   <><h1>{prop.handling}</h1>
   <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Enter text</label>
          <textarea className="form-control" value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpcase}>convert to upper case</button>
    </>
  )
}
