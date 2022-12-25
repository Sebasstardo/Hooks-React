import React from 'react'
import useForm from '../hooks/useForm'

const TodoAdd = ({ onNewTodo }) => {

  const { description, formState, onInputChange, resetForm } = useForm({
    description: ''
  })
  const onFormSubmit = (e) => {
    e.preventDefault();
    
    if(description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description
    }

    onNewTodo(newTodo);
    resetForm();
  }

  return (
    <form action="" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder='Que hay que hacer?'
        className='form-control'
        name="description"
        value={description}
        onChange={onInputChange} />
      <button
        type='submit'
        className='btn btn-outline-primary mt-1'
      >
        Agregar
      </button>
    </form>
  )
}

export default TodoAdd