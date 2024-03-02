import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskReducer";

const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {tasks: tasksState}
export type AppDispatch = typeof store.dispatch

export default store