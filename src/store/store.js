import { configureStore} from "@reduxjs/toolkit";
import taskInputReducer from '../slices/TaskInputSlice'
import taskListReducer from '../slices/taskListSlice'

const store = configureStore({
    reducer: {
        taskInput: taskInputReducer,
        taskList: taskListReducer
    },
})

export default store