import { ToDoCard } from "./ToDoCard"


export const ToDoList = () => {
  return (
    <>
    <h2 className="subtitle">Lista de tareas</h2>
    <div className="tareas-container">
        {/* {arrayTareas.map(({tarea,description})=>(
            // <p><span className="bold">{tarea} - </span>{descripcion}</p>
            <ToDoCard tarea={tarea} description={description} key={key}/>
            //faltan botones
        ))} */}
    </div>
    </>
  )
}
