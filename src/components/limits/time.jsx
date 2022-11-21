import React from "react";
import { useState, useEffect } from 'react';
import { timeTextDelete } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const Time = ({data}) => {
  const [webtime, setWebTime] = useState('')

    const {time, timeId} = data;

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(time){
            setWebTime(time)
        }
    }, [time])
    const handleInput = (e) => {
        setWebTime(e.target.value)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(timeTextDelete(timeId))
    }

    return(
        <div>
          <form >
            <div className=''>
                <input type='number' 
                    value={webtime} 
                    onChange={handleInput}/>
           </div>
         </form>
        </div>
    )
}

export default Time