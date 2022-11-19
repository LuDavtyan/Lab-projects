import React from "react";
import '../css/days.css'
import Settings from '../settings/settings'
import {
    NavLink,
    Routes,
    Route,
} from "react-router-dom";
import Today from "./today";
import ByDays from "./byDays";
import { useState } from "react";
import { useSelector } from "react-redux";
  
  
const Days = () => {
    const setActive = ({isActive}) => isActive ? '' : '';
    const name = useSelector(state => {
        const { limitsReducer } = state;
        return limitsReducer.name
    })

   /* const [webData, setWebData] = useState({
     labels:  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Web page names',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],

    })*/






    return(
        <div className="container">
            <div className="days"> 
          
                <NavLink className={setActive} to="/today"><li>TODAY</li>  </NavLink>
                <NavLink className={setActive} to="/bydays"><li>BY DAYS</li> </NavLink>
                <NavLink className={setActive} to="/settings"><li>SETTINGS</li> </NavLink>

                <Routes>
                    <Route path="settings" element={<Settings/>}/>
                    <Route path="/byDays" element={<ByDays/>}/>
                    <Route path="/today" element={<Today  />}/>
               </Routes> 
            </div>
        </div>
    )
}

export default Days