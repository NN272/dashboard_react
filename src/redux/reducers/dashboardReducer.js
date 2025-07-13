import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        name: "Test Dashboard",
        description: "Description",
        tasks: [
            {
                id: 1,
                status: "done",
                task: "Test task 1"
            },
            {
                id: 2,
                status: "done",
                task: "Test task 2"
            },
            {
                id: 3,
                status: "done",
                task: "Test task 3"
            },
        ]
    },
    reducers: {
        addTask: (state) => {
            state.tasks.push({id: 4, status: "done", task: "New Task 4"})
        },
        removeTask: (state) => {
            state.tasks.pop()
        }
    }
});

export const { addTask, removeTask } = dashboardSlice.actions;
export const selectDashboard = (state) => state.dashboard;
export default dashboardSlice.reducer;