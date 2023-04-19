import { ToDoList } from "./ToDoList"
import { ToDoForm } from "./ToDoForm"
import { useToDoReducer} from "../hooks/useToDoReducer"
import { useToDoList} from "../hooks/useToDoList"
import { useState, useEffect, useReducer } from "react";

export const Container = () => {
    
    useEffect(()=>{
        localStorage.setItem('tareas',JSON.stringify(state),[state]);
        console.log(state);
    })

    //array de tareas=state



    const addTarea = (newTarea)=>{//{tarea: 'ggg', descripcion: 'aaaaa'}
        console.log('lo que llega al container del forms: ',newTarea);
        console.log(arrayTareas);

    }
    

    return (
        <>
            <h2 className="subtitle">Lista de tareas</h2>
            <section className="sec-form b">
                <ToDoForm addTarea={addTarea}/>
            </section>
            <section className="sec-tareas">
                <ToDoList />
            </section>
        </>
    )

    }