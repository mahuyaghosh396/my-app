import React, {useState} from 'react'

export default function TextForm(prop) {

  const [myStyle, setStyle] = useState({
    color : 'white',
    backgroundColor: 'black'
  })
  const [btnText, setbtnText] = useState("Enable dark mode")
 const toggleStyle= ()=>{

    if(myStyle.color === 'white'){
    setStyle({
      color : 'black',
      backgroundColor: 'white',
    });
    setbtnText("Enable dark mode");
  }

   else{
    setStyle({
      color : 'white',
      backgroundColor: 'black',
    })
    setbtnText("Enable light mode")
  }
  }
  
    const handleUpcase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)

    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox")
        setText(newText)

    }

    const handleLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)

    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

// a function which listen a even when any changes occure in text area
//onChange is usefull for text area otherwise we can not get permission to write or update in text area

    const handleOnChange = (event)=>{
       console.log("on change")
       setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");

  return (
   <>
   <div className='container'style={myStyle}>
   <h1>{prop.handling}</h1>
   <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Enter text</label>
          <textarea className="form-control"  onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpcase}>convert to upper case</button>
      <button className="btn btn-primary mx-1" onClick={handleLowercase}>convert to lower case</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      </div>
      <div className='container'>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words  and {text.length} characters </p>
       
       
      </div>
      <div className='container my-3'>
      <button onClick={toggleStyle} type="button" class="btn btn-outline-dark">{btnText}</button>
      </div>
    </>
  )
    
  }

