import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

const LoginPage = () => {

    const { user, setUser} = useContext(UserContext);
    console.log( user)


    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <p>{user.name}</p>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}

export default LoginPage