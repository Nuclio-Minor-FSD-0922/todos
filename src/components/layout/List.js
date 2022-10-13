import Listitem from "./Listitem"

function List() {

    var todos = [
        {
            tarea: "Llevar la gata al veterinario",
            dueDate: "15NOV",
        },
        {
            tarea: "Preparar la clase de Nuclio",
            dueDate: "20NOV"
        }
    ]
    
    return(
    <div>
        <h2>Tareas</h2>
        
        {todos.map(function(todo){
            return (<Listitem tarea={todo.tarea} dueDate={todo.dueDate} />)
        })}
    </div>
    )
}

export default List