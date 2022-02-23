import React from 'react'
import Chart from './Chart'

export default function Expensechat(props) {
    const chart=[
        {label:'Jan' , value:0},
        {label:'Feb' , value:0},
        {label:'Mar' , value:0},
        {label:'Apr' , value:0},
        {label:'May' , value:0},
        {label:'Jun' , value:0},
        {label:'Jul' , value:0},
        {label:'Aug' , value:0},
        {label:'Sep' , value:0},
        {label:'Oct' , value:0},
        {label:'Nov' , value:0},
        {label:'Dec' , value:0},
    ]

    for(const get of props.expenses){
         const getmonth=get.getdate.getMonth();
         chart[getmonth].value+=get.getprice;
    }

  return (
    <div>
        <Chart datapoints={chart}/>
    </div>
  )
}
