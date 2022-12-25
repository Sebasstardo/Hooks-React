import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'seba',
        email: 'seba@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            //Hace el cambio por cada name relacionado con su valor
            [name]: value
        });
    }

    return (
        <>
            <h1>Formulario Simple</h1>
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
                    (username === 'seba') && <Message/>
                }
                
        </>

    )
}

export default SimpleForm