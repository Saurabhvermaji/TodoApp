import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTask, clearTask, setDueDate, setShowOverlay } from '../slices/TaskInputSlice';
import { addTask } from '../slices/taskListSlice';
import { v4 as uuidv4 } from 'uuid';
import '../styles/TaskInput.css'

const TaskInput = () => {
    const dispatch = useDispatch();
    const task = useSelector(state => state.taskInput.task);
    const dueDate = useSelector(state => state.taskInput.dueDate);
    const showOverlay = useSelector(state => state.taskInput.showOverlay);

    // Generate a unique id for the object
    const uniqueId = uuidv4();

    const toggleOverlay = () => {
        dispatch(setShowOverlay(!showOverlay));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        // Include dueDate when dispatching addTask
        dispatch(addTask({ id: uniqueId, description: task, dueDate: dueDate })); 
        dispatch(clearTask());
        //set showOverlay value to false to stop rendering overlay page
        dispatch(setShowOverlay(false))
    };

    return (
        <>
            {/* Button to open the overlay */}
            <button onClick={toggleOverlay} className='createtaskbutton'>Create Task</button>

            {/* Render overlay if showOverlay is true */}
            {showOverlay && <div className='overlay'>
                <div className='overlay-content'>
                    <h2> Please Enter Task </h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter task"
                            value={task}
                            onChange={(e) => {dispatch(setTask(e.target.value))}}
                        required/>
                        <input
                            type='datetime-local'
                            value={dueDate}
                            onChange={(e) => dispatch(setDueDate(e.target.value))}
                            required></input>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>}
        </>
    );
};

export default TaskInput;