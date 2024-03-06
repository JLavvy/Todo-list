import React from 'react';
import './List.css'
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export const List = () => {
    // Initialize the state for the input value (task) 
    const [task, setTask] = useState('');
    // Initialize the state for the list of tasks 
    const [tasks, setTasks] = useState([]);

    // handleAddTask function is called when the user clicks the "Add Task" button
    const handleAddTask = () => {
        // Check if the input value is not empty
        if (task !== '') {
            // Add the task to the tasks array
            setTasks([...tasks, task]);
            // Clear the input value
            setTask('');
        }
    };

    

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      };


    return (

        <div className="todo-container">

            <h1>My Todo List🤞</h1>
            <input type='text' id='task' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Add New Task' />

            <button onClick={handleAddTask}>Add Task</button>

            <ul id="taskList" className="task-list">
                {tasks.map((taskText, index) => (
                    <li key={index}>
                        <textarea className="task-textarea" value={taskText} readOnly></textarea>
                        <button onClick={() => handleDeleteTask(index)} className="delete-task-button">
                        <FaTrash />
                            
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}
