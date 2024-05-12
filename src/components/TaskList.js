// TaskList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskInput from './TaskInput';
import { removeTask } from '../slices/taskListSlice';
import '../styles/TaskList.css'

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskList.tasks);

    return (
        <div className='TaskList'>
            <TaskInput />
            <h3>Create Task to view your task here!</h3>
            <ul className='showtask'>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {/* Display task description and due date */}
                        Task - {task.description}
                        <br />
                        Date - {task.dueDate.split('T')[0]}
                        <br/>
                        Time - {task.dueDate.split('T')[1].substring(0, 5)}
                        <span className='deleteiconcontainer'>
                            <span
                                className="material-icons delete-icon"
                                onClick={() => dispatch(removeTask(task))}
                            > delete </span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;