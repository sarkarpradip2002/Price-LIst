import './App.css';
import Expenseitem from './components/Expenseitem';
import './components/Expenses.css'
import './components/Card'
import Card from './components/Card';
import NewExpense from './components/NewExpense';
import Filteryear from './components/Filteryear';
import {  useState } from 'react';
import Expensechat from './components/Expensechat';

// const dummyexpenses = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2022, 2, 10),
//   }
// ]

const all=[]
const dyear='2022'
function App() {
  const [expense, setexpense] = useState(all);
  const getexpense= newexpense =>{
    setexpense([newexpense,...expense])
  }
  const [year, setyear] = useState(dyear)
  const getyearuser=y=>{
    setyear(y.year);
  }

  const setfilteredyear=expense.filter(expens=>{
    return expens.getdate.getFullYear().toString()===year;
  })
  
 
  return (
    <>
      <NewExpense getnewexpense={getexpense}/>
      <Card className='expenses'>
        <Filteryear getyear={getyearuser}/>
        <Expensechat expenses={setfilteredyear}/>
        {setfilteredyear.length===0 ? (<p>No expense found</p>) :
        (setfilteredyear.map((expens)=>{
          return <Expenseitem key={expens.id} name={expens.gettitle} amount={expens.getprice} date={expens.getdate}/>
        }))
        }
      </Card>
      </>
  );
}

export default App;
