import React from "react";
import { useState, useEffect } from 'react';



const Minut = ({data}) => {
  
  const [webMinute, setWebMinute] = useState('')
  
    const { minute} = data;

    useEffect(() => {
        if(minute){
            setWebMinute(minute)
        }
    }, [minute])
    
    const handleMinuteInput = (e) => {
        setWebMinute(e.target.value)
    }

    return(
        <div>
          <form >
            <div className='timIinput'>
                <input type='number' 
                    value={webMinute} 
                    onChange={handleMinuteInput}/>
           </div>
         </form>
        </div>
    )
}

export default Minut