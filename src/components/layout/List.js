import React, {useEffect, useState} from "react"
import Listitem from "./Listitem"

function List() {
    
    const [todos, setItems] = useState([])

    useEffect(
        function() {
            fetch('http://localhost:8000/properties')
                .then(response => response.json())
                .then(data => setItems(data))
        }    
    )
    
  
    return(
    <div>
        <h2>Tareas</h2>
        
        {todos.map(function(todo){
            return (<Listitem tarea={todo.tarea} dueDate={todo.fechaLimite} />)
        })}
    </div>
    )
}

export default List