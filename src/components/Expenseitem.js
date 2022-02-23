import React, { useState } from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css'

export default function Expenseitem(props) {
  const [title, settitle] = useState(props.name)
  const onclickchange=()=>{
    settitle("Updated")
    console.log('Clicked!!!');
  }

  return <Card  className='expense-item'>
     <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
          <h2 >{title}</h2>
          <h3 className='expense-item__price'>${props.amount}</h3>
          <button onClick={onclickchange}>Change</button>
      </div>
  </Card>;
}
