import React, { useEffect, useReducer } from 'react'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'
import { todoReducer } from './todoReducer'

const initialState = [
    {
        id: new Date().getDate(),
        description: 'Piedra del alma',
        done: false,
    },
    {
        id: new Date().getDate() * 3,
        description: 'Piedra del tiempo',
        done: false,
    },
]

const init = () => {
    //si el local storage esta vacio regresa un arreglo vacio
    //sierve para persistir en el localstorage en el use reducer    
    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    //guardar en el localstorage con el useeffect
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        //creo la accion
        const action = {
            type: '[TODO]Add Todo',
            payload: todo
        }
        //mando la accion con el dispatch
        dispatch(action)
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO]remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO]toggle Todo',
            payload: id
        })
    }

    
    return (
        <>
            <h1>TodoApp: 12 - <small>Pendientes: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}

export default TodoApp