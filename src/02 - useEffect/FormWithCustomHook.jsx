import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useForm';
import Message from './Message';

const FormWithCustomHook = () => {

    const { formState, onInputChange,resetForm } = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    );

    const { username, email, password } = formState;
  
    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />
            <input type="text"
                className='form-control'
                placeholder='UserName'
                name="username"
                value={username}
                onChange={onInputChange} />
            <input type="email"
                className='form-control mt-2'
                placeholder='Seba@gmail.com'
                name="email"
                value={email}
                onChange={onInputChange} />
            {
                (username === 'seba') && <Message />
            }
            <input type="password"
                className='form-control mt-2'
                placeholder='Seba@gmail.com'
                name="password"
                value={password}
                onChange={onInputChange} />

            <button onClick={resetForm} className='btn btn-primary mt-2'>Borrar</button>

        </>

    )
}

export default FormWithCustomHook