import './Form.css'
import {useState} from 'react'

function Form() {

    const [task,setTask] = useState("");
    const [dueDate,setDueDate] = useState("");

    function changeTextArea(event) {
        setTask(event.target.value)
    }

    function changeDate(event) {
        setDueDate(event.target.value)
    }

    function sendData(event) {
        event.preventDefault()
        console.log(task)
        console.log(dueDate)
    }

    function clickHref(event) {
        event.preventDefault()
        console.log("Ay! me has hecho click")
    }

    return (
        <form>
            <h2>Nueva tarea</h2>
            <label>Escribe la descripción de la tarea</label>
            <p><a href="https://www.nuclio.school" onClick={clickHref}>Nuclio School</a></p>
            <textarea onChange={changeTextArea}></textarea>
            <label>Fecha límite</label>
            <input type="date" onChange={changeDate}></input>
            <button onClick={sendData}>Insertar</button>
        </form>
    )
}

export default Form