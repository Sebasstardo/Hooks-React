import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterWithCustomHook = () => {

    const{ counter, increment, reset,decrement } = useCounter();


  return (
    <>
    <h1>Counter with Custom Hook : {counter}</h1>
    <hr />
    <button onClick={()=>increment(8)} className='btn btn-primary'>+1</button>
    <button onClick={reset} className='btn btn-warning mx-3'>Reset</button>
    <button onClick={()=>decrement(2)} className='btn btn-danger'>-1</button>
    </>
  )
}

export default CounterWithCustomHook