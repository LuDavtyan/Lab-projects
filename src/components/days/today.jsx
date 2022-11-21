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



    return (
        <div className="container">
            <div className='doughnut'>
                <Doughnut data={data} />   
            </div>

            <h2>
                Today  2 ( {name.length} sites)
            </h2>

          <div className="todayList">
                <div>
                {name.map((data)=> 
                    <div>{data.text}</div> 
                )}
                </div>
                <div>
                {time.map((data)=> 
                    <div>{data.time} hh</div> 
                )}
                </div>
          </div>
        </div>
      
       
    )
}

export default Today