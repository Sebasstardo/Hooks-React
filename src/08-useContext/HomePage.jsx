import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

const HomePage = () => {

  const { user, setUser} = useContext(UserContext);

  return (
    <>
    <h1>Home Page</h1>
    <hr />
    <h2>{user?.name}</h2>

    <button 
    className='btn btn-primary'
    onClick={()=> setUser({id:123,name:'seba',email:'seba@email.com'})}>
      Set Usuario
    </button>

</>
  )
}

export default HomePage