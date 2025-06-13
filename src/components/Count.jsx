import React, { useContext } from 'react'
import StudentProfile from './StudentProfile'
import { UserContext } from '../contexts/UserContext'
import { useCounter } from '../hooks/useCounter'


export  function Count({count,increment}) {




 const countVales=useCounter(0,2)
    
      console.log(countVales,"user1234")
  return (
  <div className="card">
        <div id="counr">
              count is {countVales.count}
        </div>
        <button onClick={()=>{
          countVales.increment()
        }}>
      click
        </button>

        <button onClick={()=>{
          countVales.decrement()
        }}> decrement</button>
         {/* <StudentProfile count={count}/>   */}
      </div>
  )
}
