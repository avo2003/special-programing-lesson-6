import React, { useState } from 'react';
import Form from './form';
import Task from './task';

export default function App() {
    const [tasks, setTasks] = useState([]);

const addTask =(task) => setTasks([...tasks,task]);

    return (
        <div>
            <h1>Start </h1>
            <Form handleAddTask={addTask}/>
         
            {tasks.map(task=>(
               <Task key={task.id} task={task}/>
            
            ))}


        </div>
    );
}



