import { useReducer } from "react"


export const useToDoReducer = () => {

    const [tareas, dispatch] = useReducer(ToDoReducer, [], init);

    const init = () => {
        const lclData = localStorage.getItem('tareas');
        console.log(lclData);
        if (lclData) {
            console.log(JSON.parse(lclData))
            return JSON.parse(lclData)
        }
        else { return [] }
    };

    const handleNewTodo = (newTarea) => {
        const action = {
            type: 'add',
            payload: newTarea
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'delete',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'add',
            payload: id
        }
        dispatch(action)
    }

    
    return {
        tareas,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}