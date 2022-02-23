import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(props) {
    const datapointvalue=props.datapoints.map(datapoint=>datapoint.value)
    const maxvalue=Math.max(...datapointvalue)
  return (
    <div className='chart'>
      {props.datapoints.map(datapoint=>{
        return <ChartBar key={datapoint.label} value={datapoint.value} maxvalue={maxvalue} label={datapoint.label}/>
      })
      }
    </div>
  )
}
