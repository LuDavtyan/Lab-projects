import React from "react";
import { useState, useEffect } from 'react';



const Time = ({data}) => {
  const [webtime, setWebTime] = useState('');
 
    const {time} = data;

    
    useEffect(() => {
        if(time){
            setWebTime(time)
        }
    }, [time])

  
    const handleInput = (e) => {
        setWebTime(e.target.value)
    }


    return(
        <div>
          <form >
            <div className='timIinput'>
                <input type='number' 
                    value={webtime} 
                    onChange={handleInput}/>
           </div>
         </form>
        </div>
    )
}

export default Time