import React from "react";
import '../css/limits.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid'
import { limitsTextCreate,  timeTextCreate} from '../../redux/actions'
import SingleLimits from "./singleLimits";


const Limits = () => {
   
    const [textLimit, setTextLimit] = useState('')
    const [textTime, setTextTime] = useState('')

    const name = useSelector(state => {
        const { limitsReducer } = state;
        return  limitsReducer.name  
    })
   
 
    const time = useSelector(state => {
        const { timeReducer } = state;
        return  timeReducer.time 
    })
   
    console.log(time)

    
    const dispatch = useDispatch();

    const hendleInput = (e) => {
        setTextLimit(e.target.value)
    
    }

    const hendleTimeInput = (e) => {
        setTextTime(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        const timeId = uniqid();
        dispatch(limitsTextCreate(textLimit, id));
        dispatch(timeTextCreate(textTime, timeId));
        setTextLimit('')
        setTextTime('')
    };

    return(
        
            <div className="navLimitPage">
                <div className="limit">
                      <p>Access daily restrictions for websites:</p>
                      <form onSubmit={handleSubmit} className="formBox">
                      <input type="text" className="sitName" 
                             value={textLimit}
                             onChange={hendleInput}
                             placeholder="Enter site name..."/>

                       
                    <div className="time">
                       <div className="popUp-inner">
                           <label htmlFor="">Hour</label>
                              <input type="number" value={textTime}  onChange={hendleTimeInput}/>
                              <span> : </span>
                              <input type="number" />
                              <label htmlFor="">Minute</label> 
                            </div>
                     </div>
                      
                      <button className="addBtn">+</button>
                     </form>

                      <div className="nameList">
                        {!!name.length &&  name.map(res=>{
                            return  <SingleLimits key={res.id} data={res} />
                        })}
   
                      
                      </div>
                </div>
       
        
            
        </div>
    )
}

export default Limits