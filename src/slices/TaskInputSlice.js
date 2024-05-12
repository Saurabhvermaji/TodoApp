import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    task: '',
    dueDate: '',
    showOverlay: false
};

const taskInputSlice = createSlice({
    name: 'taskInput',
    initialState,
    reducers: {
        setTask: (state, action) => {
            state.task = action.payload;
        },
        
        clearTask: (state) => {
            state.task = '';
        },

        setDueDate: (state, action) => {
            state.dueDate = action.payload
        },

        setShowOverlay: (state , action) => {
            state.showOverlay = action.payload
        }
    }
});

export const { setTask, clearTask, setDueDate, setShowOverlay } = taskInputSlice.actions;

export default taskInputSlice.reducer;
