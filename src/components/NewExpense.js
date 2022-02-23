import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
    const addthedata=(expense)=>{
        const expensedata={
            ...expense,
            id: Math.random().toString(),
        }
        props.getnewexpense(expensedata)
    }
  return (
    <div className='new-expense'>
       <ExpenseForm onsavedata={addthedata}/>
    </div>
  )
}
