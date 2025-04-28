import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD, REDUCE } from '../REDUX/action';

const CounterButtons = () => {

    const dispatch = useDispatch();
    return (
        <>
           <div className="counter"> <button onClick={() => dispatch({ type: ADD})}>ADD</button>
           <button onClick={() => dispatch({ type: REDUCE})} >REDUCE</button></div>
        </>
    )
}

export default CounterButtons