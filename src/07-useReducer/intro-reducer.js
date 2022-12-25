console.log('first')

//Es mi estado inicial
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,

}];

/**
 *El reducer siempre tiene que devolver un estado 
 *se utiliza cuando tenemos un objeto algo elaborado y queremos hacerles ajustes al 
 mismo.
 El action se utiliza para realizar un nuevo estado del arreglo inicial, en este caso
 añadir un nuevo arreglo
 */
const todoReducer = (state = initialState, action = {} ) => {

    if(action.type === '[TODO] add todo'){
        return[...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

//NUEVO OBJETO QUE SE TIENE QUE AGREGAR
const newTodo = {
    id: 2,
    todo: 'piedra del poder',
    done: false,
}

/**
 * nuevo objeto
 */
const addTodoAction = {
    type:'[TODO] add todo',
    payload : newTodo,
}

todos = todoReducer(todos,addTodoAction);
