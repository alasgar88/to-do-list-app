import { createSlice } from "@reduxjs/toolkit";
import {getTaskFromLocalStorage,addTaskToLocalStorage,removTaskFromLocalStorage} from "../../utils/localStorage"

const initialState = {
  generalTask: 0,
  doneTask: 0,
  allTask: getTaskFromLocalStorage(),
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    clearAllTask: (state) => {
      state.generalTask = 0;
      state.doneTask = 0;
      state.allTask = [];
      removTaskFromLocalStorage()  
    },
    addTask: (state, { payload }) => {
      state.allTask.push(payload);
      addTaskToLocalStorage(state.allTask)
    },
    removeTask: (state, action) => {
      const itemId = action.payload;
      state.allTask = state.allTask.filter((item) => item.id !== itemId);
      addTaskToLocalStorage(state.allTask)
    },
    compleateTask: (state, { payload }) => {
      const singleTask = state.allTask.find((item) => {
        return item.id === payload;
      });
      singleTask.hasDone = !singleTask.hasDone;
      addTaskToLocalStorage(state.allTask)
    },

    calculateTotals: (state) => {
      state.generalTask = state.allTask.length;
      let doneTask = 0;
      state.allTask.forEach((task) => {
        if (task.hasDone) {
          doneTask += 1;
        }
      });
      state.doneTask = doneTask;
    },
  },
});

export const {
  clearAllTask,
  addTask,
  removeTask,
  compleateTask,
  calculateTotals,
} = taskSlice.actions;

export default taskSlice.reducer;
