import './Listitem.css'

function Listitem(props) {
    return(
        <div>
            <p>{props.tarea}</p>
            <p className="fecha">Fecha límite: {props.dueDate}</p>
            <p><a href="">Eliminar</a></p>
        </div>
    )
}

export default Listitem