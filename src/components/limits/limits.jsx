import React from "react";
import '../css/limits.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid'
import { limitsTextCreate } from '../../redux/actions'
import SingleLimits from "./singleLimits";

const Limits = () => {
    const [textLimit, setTextLimit] = useState('')
    const name = useSelector(state => {
        const { limitsReducer } = state;
        return limitsReducer.name
    })
   
    const dispatch = useDispatch();

    const hendleInput = (e) => {
        setTextLimit(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(limitsTextCreate(textLimit, id));
    };

    return(
        <div className="container">
            <div className="navLimitPage">
                <div className="limit">
                      <p>Access daily restrictions for websites:</p>
                      <form onSubmit={handleSubmit}>
                      <input type="text" className="sitName" 
                             value={textLimit}
                             onChange={hendleInput}
                             placeholder="Enter site name..."/>
                      <input type="text" className="time" placeholder="Time..." />
                      <button className="addBtn">+</button>
                     </form>

                      <div className="nameList">
                        {!!name.length && name.map(res=>{
                            return  <SingleLimits key={res.id} data={res}/>
                        })}
                      
                      </div>
                </div>
            </div>
          
            
        </div>
    )
}

export default Limits