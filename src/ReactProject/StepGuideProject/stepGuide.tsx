import React, { useState } from 'react'
import "./StepGuide.css";

const messages=[
    "Learn React",
    "apply for job",
    "invest your new income"
]

const StepGuide = () => {

   const [step, setStep]=useState(1);


function handlePrevious()
{
    if(step>1){
        setStep(step-1)
    }
    
}
function handleNext(){
    if(step<3)
    {
        setStep(step+1)
    }

}

  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
<div className={step===1?"active":"unactive"}>1</div>
<div className={step===2?"active":"unactive"}>2</div>
<div className={step===3?"active":"unactive"}>3</div>
      </div>
      <div>
<p>Step {step}: {messages[step-1]}</p>
      </div>
      <div>
<button style={{backgroundColor:"#7950f2",color:"#fff"}} 
onClick={handlePrevious}>Previous</button>
<button style={{backgroundColor:"#7950f2",color:"#fff"}}
onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default StepGuide
