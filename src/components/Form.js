import React,{useState} from 'react'


export default function Form(props) {
    const handleUpClick = () =>{
        // console.log("Change to Upper Case"+text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case","success")

    }
    

    const ClearText =() =>{
      let newText = ""
      setText(newText)
      props.showAlert("Cleared Text","success")
    }
    const handleUpClickForLower = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case","success")

    }

    const copyToClipboard = () =>{
      let copyText = document.getElementById("myBox")
      copyText.select()
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Copied On Clickboard","success")


    }
    const handleOnChange = (event) =>{
        // console.log("Onchange")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
   <>
      <div className="mb-3" style={{color:props.mode ===  'dark'?'white':'black' }}>
        <h1 className='mb-3'>{props.heading}</h1>
          <div className="container" >
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'?'#343a40':'white',color:props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert To Uppercase</button> 
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClickForLower}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy Text</button>

            <button className="btn btn-primary" onClick={ClearText}>Clear Text</button>

          </div>
        </div>
        <div className="container my-1" style={{color:props.mode ===  'dark'?'white':'black'}} >
          <h1>Text Summary</h1>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} character</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in above textbox to preview it here"}</p>

        </div>
       
        </>
   
  )
}
