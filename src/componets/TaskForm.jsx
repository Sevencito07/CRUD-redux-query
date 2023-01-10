import React from 'react'
import '../styles/styles.css'
import { useCreateTaskMutation} from '../api/api'


export default function TaskForm() {
    const [createTask] = useCreateTaskMutation()
    const handelSubmit =(e)=>{
        e.preventDefault()
        const name= e.target.elements.name.value.trim()
        const description = e.target.elements.description.value.trim()
        const completed = e.target.elements.completed.checked

        createTask({name, description, completed})
    }
 
  return (
    <form onSubmit={handelSubmit}>
        <h2>Homework  that  i  need  to do!</h2>
        <input  className='counter-input' placeholder='name' type="text" name="name"></input>
        <input className='counter-input' placeholder='description' type="text" name="description"></input>
        <input    type="checkbox" name="completed"></input>
        <button className='button-form'>add task</button>
    </form>
  )
}
