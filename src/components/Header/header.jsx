import React from "react";
import '../css/main.css'

import {  NavLink } from "react-router-dom";

const Header  = () => {
  const setActive = ({isActive}) => isActive ? 'test' : '';
 return(
    <div className="container">
        <div className="header">
             <div>
                <h1> Web Activity Time Tracker</h1> 
             </div>
            
         <div className="menu">
            <div>
              <nav>
                  <ul>
                     <NavLink className={setActive} to="/settings"><li>Settings</li>  </NavLink>
                     <NavLink className={setActive} to="/limits"><li>Limits</li> </NavLink>
                     <NavLink className={setActive} to="/days"><li>Days</li> </NavLink>
                  </ul>
              </nav>
            </div>       
         </div>
      </div> 
    </div>
 )

}
export default Header
                   