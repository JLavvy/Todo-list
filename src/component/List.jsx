import React, { useState } from "react";
import "./List.css";
import { FaTrash } from "react-icons/fa";

export const List = () => {
    // Initialize the state for the input value (task)
    const [task, setTask] = useState("");
    // Initialize the state for the list of tasks
    const [tasks, setTasks] = useState([]);

    // handleAddTask function is called when the user clicks the "Add Task" button
    const handleAddTask = () => {
        // Check if the input value is not empty
        if (task !== "") {
            // Add the task to the tasks array with the current date and time
            setTasks([...tasks, { text: task, completed: false, createdAt: new Date().toLocaleString() }]);
            // Clear the input value
            setTask("");
        }
    };

    const handleEditTask = (index, newTaskText) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = newTaskText;
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h1>My Todo List🤞</h1>
            <input
                type="text"
                id="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="What is your today task?"
            />

            <button onClick={handleAddTask}>Add Task</button>

            <ul id="taskList" className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div className="task-container">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleTaskCompletion(index)}
                            />
                            <div className="task-text-container">
                                <textarea
                                    className={`task-textarea ${task.completed ? "task-textarea--completed" : ""}`}
                                    value={task.text}
                                    onChange={(e) => handleEditTask(index, e.target.value)}
                                ></textarea>
                                <span className="created-at">{task.createdAt}</span>
                            </div>
                            <button onClick={() => handleDeleteTask(index)} className="delete-task-button">
                                <FaTrash />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};