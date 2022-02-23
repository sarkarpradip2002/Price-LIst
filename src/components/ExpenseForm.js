import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const [title, settitle] = useState('')
    const [price, setprice] = useState('')
    const [date, setdate] = useState('')
    
    const onchangetitle=(e)=>{
       settitle(e.target.value)
    }
    const onchangeprice=(e)=>{
        setprice(e.target.value)
     }
     const onchangedate=(e)=>{
        setdate(e.target.value)
     }
     const submithandler=(e)=>{
        e.preventDefault()
        const submitresult={
            gettitle:title,
            getprice:price,
            getdate: new Date(date)
        }
        props.onsavedata(submitresult)
       settitle('')
       setprice('')
       setdate('')
     }

  return (
    <form onSubmit={submithandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={title} onChange={onchangetitle} />
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type="number" value={price}  onChange={onchangeprice} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" value={date} max="2030-01-01"  onChange={onchangedate} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}
