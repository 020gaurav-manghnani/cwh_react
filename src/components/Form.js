import React, {useState} from 'react'

export default function Form() {

  const [text , setText] = useState("")
  const [prevValue , afterValue] = useState(0)

  const upperCase = () =>{
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  const lowerCase = () =>{
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const reset = () =>{
    let newtext ="bhak bsdk"
    setText(newtext)
  }
  const handleChange = (e) =>{
    setText(e.target.value)
  }
  
  const asciiValue=()=>{
    let newtext=text;
    let totalValue=0;
    let sum=0
    for(let i=0; i<newtext.length;i++){
       sum=text[i].charCodeAt()
      //  sum=sum+i;
      totalValue=totalValue+sum;
      afterValue(totalValue)
      
      
    }
    console.log(totalValue)
    
    
  }
  

  return (
    <>
    <div className="form-floating">
      <header className='container'>Yaha likh saale</header>
       <textarea className="form-control mt-2" placeholder="Leave a comment here" value={text} onChange={handleChange} id="floatingTextarea2"></textarea>
       <button type="button" className="btn btn-dark mt-2 mx-2" onClick={upperCase}>Uppercase</button>
       <button type="button" className="btn btn-dark mt-2 mx-2" onClick={lowerCase}>Lowercase</button>
       <button type="button" className="btn btn-dark mt-2 mx-2" onClick={reset}>Reset</button>
       <button type="button" className="btn btn-dark mt-2 mx-2" onClick={asciiValue}>Ascii value</button>
</div>

<div className='container mt-3'>
   <h1>Your text summary</h1>
   <p>{text.split(" ").length} Words and {text.length} Characters</p>
   <p><b>It will take {0.008*text.split(" ").length} minutes to read it</b></p>
   <p>Total Ascii value of your content is <b><i>{prevValue}</i></b></p>


</div>

<div className='container'>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
    </>
  )
}
