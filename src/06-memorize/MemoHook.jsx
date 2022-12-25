import React, { useMemo, useState } from 'react'
import useCounter from '../hooks/useCounter'
import Small from './Small';



const MemoHook = () => {


    const heavyStuff = (iterationNumber = 100) => {
        for (let i = 0; i < iterationNumber; i++) {
            console.log('first')
        }
        return `${iterationNumber}`
    }

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    /**
     * useMemo para memoizear un valor que implique realizar acciones pesadas 
     * sin que se vuelva a ejecutar o calcular en caso de re-render
     */
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter : <small>{counter}</small></h1>
            <hr />
            <h4>{heavyStuff(counter)}</h4>
            <button className='btn btn-primary' onClick={() => increment()}>
                +1
            </button>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}

export default MemoHook