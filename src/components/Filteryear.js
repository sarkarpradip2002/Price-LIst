import React from 'react'

export default function Filteryear(props) {
    const style={
        color:'white'
    }
    const onchangeyear=(e)=>{
       const getyear={
           year:e.target.value
       }
       props.getyear(getyear)
    }
  return (
      <>
      <h3 style={style}>Filter by</h3>
    <form>
        <select  defaultValue={2022} onChange={onchangeyear} >
            <option value="2021" >2021</option>
            <option value="2022" >2022</option>
            <option value="2023" >2023</option>
            <option value="2024" >2024</option>
        </select>
    </form>
    </>
  )
}
