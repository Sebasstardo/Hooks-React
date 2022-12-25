import React, { useRef } from 'react'

const FocusScreen = () => {

    //poder seleccionar una referencia a un elemento html
    const inputRef = useRef();

    const onClick = () =>{
        inputRef.current.select();        
    }


    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input 
            ref={inputRef}
            type="text"
            placeholder='Ingrese su Nombre'
            className='form-control'
             />

             <button onClick={onClick} className="btn btn-primary mt-3">Use ref</button>

        </>
        


    )
}

export default FocusScreen