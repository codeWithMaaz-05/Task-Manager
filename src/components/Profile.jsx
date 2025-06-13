import React from 'react'
import { Count } from './Count'

function Profile({firstName,lastName,count:CounterValue,increment}) {
  return (
    <div className='profile'>
        <p>{`My name is ${firstName} ${lastName}`}</p>
        <Count count={CounterValue} increment={increment}/>
    </div>
  )
}

export default Profile