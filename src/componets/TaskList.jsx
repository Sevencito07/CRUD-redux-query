import React from 'react'
import '../styles/styles.css'
import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation} from '../api/api'

export default function TaskList() {
    const { data: tasks, isError, isLoading, error}  = useGetTasksQuery()
    const  [deleteTask] = useDeleteTaskMutation();
    const [updateTasks]  = useUpdateTaskMutation();
    if(isLoading) return <div>...is loading</div>
    else if(isError)  return <div>{error.message}</div>
    return (
   <div className='counter-main'>
     <ul>
        {tasks.map((task)=>(
        <li key={task.id}>
               <div className='counter-list'>
               <h3>{task.name}</h3>
                <p>{task.description}</p>
               </div>
          <div>
              
          <button onClick={() => {deleteTask(task. id);}} >Delete</button>

             <input
              type="checkbox"
              id={task. id}
              checked={task. completed}
              onChange={(e) => {
               updateTasks({ ... task,  completed: e. target. checked });
              }}/>

          </div>
        </li>
            
        ))}
    </ul>
   </div>
  )
}
