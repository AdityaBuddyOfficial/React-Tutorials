import React from 'react'
import "./index.css"
import ImageComp from './image'
import Information from './information'
import Skills from './Skills'

const SimpleCartWithSkills = () => {

    const skills=["java","html","css","dsa"]
    return (
        <>
            <div className='box-border'>
                <div>
                    <ImageComp />
                </div>
                <div>
                    <Information />
                </div>
                
                   <div style={{display:"flex"}}>
                   {skills.map((e,index)=>
                           ( <Skills key={index} skill={e}/>)
                        )}
                   </div>
                       
                    
                    
                
            </div>
        </>

    )
}

export default SimpleCartWithSkills
