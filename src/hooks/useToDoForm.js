import { useState } from "react"

export const useToDoForm = (initialState,addTarea) => {
    const [inputValues, setInputValues] = useState(initialState)//(getLocalData());
    // const [tarea,setTarea]=useState('');
    // const [description,setDescription]=useState('')
    const [send, setSend] = useState(false);

    const serializerForm = (dataForm) => {
        const data = new FormData(dataForm);
        const obj = {};
        for (let [key, value] of data) {
            if (!value) { return };
            obj[key] = value;
        }
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
        console.log(addTarea(data))
        //si  los datos son validos send cambia a true
    }

    return {
        handlerChange,
        handlerSubmit,
        send,
        inputValues
    }
}
