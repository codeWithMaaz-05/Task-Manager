import React, { useContext } from 'react'
import { Count } from './Count'
import { UserContext } from '../contexts/UserContext'

export  function Test() {

      const user =useContext(UserContext)

        console.log(user,"inside test")
  return (
    <div>

  <div>Inisde the test</div>
    </div>
  )
}
