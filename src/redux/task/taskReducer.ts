import { createSlice } from "@reduxjs/toolkit";
import { ItemProps } from "../../models/Types";
// import type { RootState } from "../store";

interface taskState {
  todoTasks: Array<ItemProps[]>;
  doingTasks: Array<ItemProps[]>;
  doneTasks: Array<ItemProps[]>;
  taskCount: number;
  currentIndex: number;
}

const initialState: taskState = {
  todoTasks: [],
  doingTasks: [],
  doneTasks: [],
  taskCount: 0,
  currentIndex: 0,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addToDoTask: (state, action: any) => {
      state.todoTasks = [...state.todoTasks, ...action.payload];
      state.taskCount = state.taskCount + 1;
    },
    addDoingTask: (state, action: any) => {
      state.doingTasks = [...state.doingTasks, ...action.payload];
      state.taskCount = state.taskCount + 1;
    },
    addDoneTask: (state, action: any) => {
      state.doneTasks = [...state.doneTasks, ...action.payload];
      state.taskCount = state.taskCount + 1;
    },
  },
});

export const { addToDoTask, addDoingTask, addDoneTask } = taskSlice.actions;

// const taskReducer = (state = initialState, action : any) => {
//     switch(action.type) {
//         case ADD_TO_DO_TASK: return {
//             ...state,
//             todoTasks: [...state.todoTasks, ...action.payload],
//             taskCount: state.taskCount + 1
//         }
//         case ADD_DOING_TASK: return {
//             ...state,
//             doingTasks: [...state.doingTasks, ...action.payload],
//             taskCount: state.taskCount + 1
//         }
//         case ADD_DONE_TASK: return {
//             ...state,
//             doneTasks: [...state.doneTasks, ...action.payload],
//             taskCount: state.taskCount + 1
//         }
//     }
// }

export default taskSlice.reducer;
