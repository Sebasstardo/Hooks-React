import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //sirve para memorizar funciones
    const increment = useCallback(
      () => {
        setCounter(value=> value + 1);
      },
      [],
    )
    
    return (
        <>
            <h1>userCallback Hook : {counter}</h1>
            <hr />
            <ShowIncrement increment= {increment} />
        </>
    )
}

export default CallbackHook