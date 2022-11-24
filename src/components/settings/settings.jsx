import React from "react";
import '../css/settings.css'
import { useState } from "react"
import { useDispatch , useSelector} from "react-redux";
import uniqid from 'uniqid';
import { settingsCreate } from '../../redux/actions';
import  SingleSettings  from './singleSettings'


const Settings = () => {

  const [sitName, setSitName] = useState('');
  const ignorName = useSelector(state => {
     const { settingsReducer } = state;
     return settingsReducer.name
  })

  const dispatch = useDispatch();

  const hendleInput = (e) => {
    setSitName(e.target.value)
  }

  const hendleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid()
    dispatch(settingsCreate(sitName, id))
    setSitName('')
  }



    return(
        <div className="container">
              <div className="navPage">
          <div className="allow">
                <input type="checkbox" />
                <label htmlfor=""> Allow deferring block for 5 minutes</label>
            
            <p>Stop tracking if no activity detected for:</p>
            <select name="" id="">
                <option value="">30 seconds</option>
                <option value="">45 seconds </option>
                <option value="">1 min </option>
                <option value="">2 min</option>
                <option value="">5 mins</option>
                <option value="">10 mins</option>
                <option value="">20 mins</option>
                <option value="">30 mins</option>
            </select>
            
            <div className="ignored-list">
                
                 <p>Ignored list of domain:</p>
                 <div className="list">
                 {!!ignorName.length && ignorName.map(res=>{
                            return  <SingleSettings key={res.id} data={res}/>
                        })}
                 </div>
                <form onSubmit={hendleSubmit}>  
                 <input type="text"  placeholder="Enter site name..." 
                 value={sitName}
                 onChange={hendleInput}
                 />
                 <button>+</button>
                 </form>
            </div>     
          </div>  
         </div>     
    </div>
    )
}

export default Settings