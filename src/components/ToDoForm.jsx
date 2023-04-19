import React from 'react'
import { useState } from 'react';
///// import { useToDoForm } from '../hooks/useToDoForm';

export const ToDoForm = ({addTarea}) => {

    ///// const { handlerChange, handlerSubmit, inputValues } = useToDoForm('',addTarea);

    const [inputValues, setInputValues] = useState('')//(getLocalData());
    const [send, setSend] = useState(false);

    const serializerForm = (ev) => {
        const data = new FormData(ev);
        const obj = {};
        for (let [key, value] of data) {
            if (!value) { return };
            obj[key] = value;
        }
        obj.id = Date.now();
        obj.done = false;
        obj.date = new Date();
        return obj
    }

    // const getLocalData=()=>{
    //     const lclData = localStorage.getItem('tareas');
    //     if(lclData){
    //         console.log(JSON.parse(lclData))
    //         return JSON.parse(lclData)}
    //     else{return[]}

    const handlerChange = (ev) => {
        const { name, value } = ev.target;
        if (inputValues == '') return setInputValues({ ...inputValues, [name]: value });//search:(valor introducido en el input)
    }

    const handlerSubmit = (ev) => {
        ev.preventDefault();
        const data = serializerForm(ev.target);
        if (!data) { return };
        console.log('data valida ', data)
        setInputValues(data);
        //si los datos son validos los datos de inputValues pasan como {tarea:__,description:__}
        addTarea(data);
        setSend(true);
        //si  los datos son validos send cambia a true
    }






    return (
        <>
            <h2 className="subtitle">Añadir tarea</h2>
            <form className="form" onSubmit={handlerSubmit}>
                <input
                    className="i-form"
                    id="tarea"
                    name="tarea"
                    type="text"
                    onChange={handlerChange}
                    placeholder="Tarea"
                />
                <textarea
                    className="ta-form"
                    id="descripcion"
                    name="descripcion"
                    // type="textarea"
                    // rows=''
                    // cols='23'
                    onChange={handlerChange}
                    placeholder="Descripcion"
                />
                <input
                    className="s-form"
                    type="submit"
                    value="Nueva tarea" />
            </form>
        </>
    )
}
