import React from "react";
import { useEffect, useState } from "react";


const Timer = () => {
    const time = useSelector(state => {
        const { timeReducer } = state;
        return  timeReducer.time 
    })
   
    const minute = useSelector(state => {
        const {  minuteReducer} = state;
        return  minuteReducer.minute
    })

    const [ hour, setHour] = useState(time )
    const [ minutes, setMinutes] = useState(minute )

    var timer;
    
    useEffect(() => {
        timer = setInterval(() => {
            setMinutes(minute - 1);
            if(minute === 0){
                setHour(hour-1);
                setMinutes(0)
            }
        },1000)
        
        return () => clearInterval(timer)
    },);

    return (
        <div>
            <h1>{hour<10? '0'+ hour : hour} : {minutes<10? '0' + minutes : minutes} </h1>

        </div>
    )
}

export default Timer