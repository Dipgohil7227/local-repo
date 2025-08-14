
import React, { useState } from 'react'

function TodoList() {
    const[tasks, setTasks]= useState(["walking","exercise","cycling"]);
    const[newTask, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }
    function addTask(){
      setTasks(t =>[...t,newTask])
    }
    function deleteTask(index){
         
    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

  return (
    <div className='todoclass'>
       <h1>To-Do-List</h1>
       <div>
            <input type="text" placeholder='enter a Task...' value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>Add</button>
       </div>
        <ol className=''>
            {tasks.map((task,index)=>
                <li key={index}>
                  {task}
                <button className='' onClick={()=>deleteTask(index)}>Delete</button>
                <button className='pl-2' onClick={()=>moveTaskUp(index)}> Up</button>
                <button className='pl-2' onClick={()=>moveTaskDown(index)}>Down</button>
                </li>
            )}
        </ol>
        <button>add new</button>
    </div>
    
  )
}

export default TodoList

