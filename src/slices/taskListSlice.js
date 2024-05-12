import { createSlice } from '@reduxjs/toolkit';

// Retrieve tasks from localStorage if available, otherwise use an empty array
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        addTask: (state, action) => {
            //first we are going to add the task in tasks array
            state.tasks.push(action.payload); // Payload is now an object containing description and dueDate
            // then Update localStorage with the updated tasks array
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },

        removeTask: (state, action) => {
            //first we are going to remove the task in tasks array
            // Filter out the task to be removed based on its unique identifier (id)
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
            // then Update localStorage with the updated tasks array
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
    }
});

export const { addTask, removeTask } = taskListSlice.actions;

export default taskListSlice.reducer;