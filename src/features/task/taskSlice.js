import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalTask: 0,
  doneTask: 0,
  allTask: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    clearAllTask: (state) => {
      state.generalTask = 0;
      state.doneTask = 0;
      state.allTask = [];
    },
    addTask: (state, { payload }) => {
      state.allTask.push(payload);
    },
    removeTask: (state, action) => {
      const itemId = action.payload;
      state.allTask = state.allTask.filter((item) => item.id !== itemId);
    },
    compleateTask: (state, { payload }) => {
      const singleTask = state.allTask.find((item) => {
        return item.id === payload;
      });
      singleTask.hasDone = !singleTask.hasDone;
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
