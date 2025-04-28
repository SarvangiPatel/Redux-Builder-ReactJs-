import React from 'react'
import { useSelector } from 'react-redux'

const CounterValue = () => {

    const {count} =useSelector((state)=>state.counterReducer)
  return (
    <div className='counter'>
    <h2>Counter <br /><span> {count} </span></h2>
  </div>
  )
}

export default CounterValue