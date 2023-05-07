// import React, { useState } from 'react'
//eslint-disable-next-line
export default function (props) {
  
    // const[myStyle,setMyStyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white'
    //     }
    // )   

    let myStyle={
      color: props.mode ==='dark'?'white':'#343a40',
      backgroundColor:props.mode ==='dark'?'#343a40':'white'
    }
 
  return (

    
    <div className='container' >
        <h1 className="my-2" style={{color: props.mode ==='dark'?'white':'#343a40'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Why we created it?</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Text-Utils.com was born in 2014 as part of a learning exercise to practice our programming skills. In almost 10 years of existence, we continue to refactor, redesign, improve, and implement new features. And we could say that we learned a lot since we started, by including the experience here and in the overall development world. As long our spirit allows us to continue learning and coding, we will continue improving this website.      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle} >
    <h2 className="accordion-header"  >
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong> What does it do?</strong>      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Text-Utils.com is described as a central repository of tools for helping with developer activities. It includes tools such as for formatting JSON, XML, HTML, CSS, JavaScript, multiple text tools such as to convert case, remove accents, line breaks, extra space, also regular expressions tools for extracting elements from text such as IPs and e-mail addresses. And this is actually only a subset of what we have.      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Why is it different?</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Fast, secure and easy. This is a summary of what Text-Utils.com is. All we design is intended to be fast, really fast. Other than that, all our utilities are client-side, meaning your data will not go through our servers to be processed. Your data is secure. Finally, Text-Utils.com is also quite easy. Everything can be found on the page very quickly, in just a few clicks.      </div>
    </div>
  </div>
  
</div>
    </div>

    
    
  )
  

  
}
