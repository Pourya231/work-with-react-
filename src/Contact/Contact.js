import React from 'react'
import Button from '../Button/Button'
const Contact = () => {
    const handleTextChange = (event) =>(
        console.log('change',event.target.value)
    )
    return (
     <div className='Contact'>
        <div className='formContorl'>
       <input type="text" onChange={handleTextChange} placeholder='subject' />
       </div>
       <div className='formContorl'>
        <input type="email"  onChange={handleTextChange} placeholder='Email' />
        </div>
        <div className='formContorl'>
        <textarea onChange={handleTextChange} placeholder='Your request here ' />
    
        </div>
       <button>Submit</button>
    </div>
    )
}


export default Contact;