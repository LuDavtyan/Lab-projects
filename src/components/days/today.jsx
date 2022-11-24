import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';


const Today = ({data}) => {
    const name = useSelector(state => {
        const { limitsReducer } = state;
        return limitsReducer.name
    })

    const time = useSelector(state => {
      const { timeReducer } = state;
      return  timeReducer.time 
    })

    const minute = useSelector(state => {
        const { minuteReducer } = state;
        return  minuteReducer.minute
    })

   
    return (
        <div className="container">
            <div className='doughnut'>
                <Doughnut data={data} />   
            </div>
           <div className="timeList"> 
            <h2>
                Today   ( {name.length} sites)
            </h2>
         
         </div>




          <div className="todayList">
          
                   <div className="dataName">
                    {name.map((data)=> 
                            <div>{data.text}</div> 
                     )}
                </div>
                <div className="webTime">
                    <div> 
                    {time.map((data)=> 
                        <div>{data.time} h</div> 
                    )}
                    </div>
                    <div> 
                    {minute.map((data)=> {
                        <div>{data.mainute} m</div>
                    })}
                    </div>
                </div>
           
             
          </div>

      
        </div>
      
       
    )
}

export default Today