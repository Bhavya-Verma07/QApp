import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder';

const Start = () => {
const{setStart} = useContext(QuizContext);

  return (
    <div className='startbutton'>
    <button className='Startbtn' onClick={()=>setStart(true)}>Start</button>
    
    
    
    </div>
  )
}

export default Start;