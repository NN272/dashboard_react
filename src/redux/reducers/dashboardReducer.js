import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        dashboards: [
            {
                id: 0,
                name: "Test Dashboard",
                description: "Description",
                tasks: [
                    {
                        id: 0,
                        status: "done",
                        task: "Test task 1"
                    },
                    {
                        id: 1,
                        status: "done",
                        task: "Test task 2"
                    },
                    {
                        id: 2,
                        status: "done",
                        task: "Test task 3"
                    },
                ]
            },
            {
                id: 1,
                name: "Test Dashboard 2",
                description: "Description 2",
                tasks: [
                    {
                        id: 0,
                        status: "done",
                        task: "Test task 1"
                    },
                    {
                        id: 1,
                        status: "done",
                        task: "Test task 2"
                    },
                    {
                        id: 2,
                        status: "done",
                        task: "Test task 3"
                    },
                ]
            },
        ]
    },
    reducers: {
        addDashboard: (state, action) => {
            state.dashboards.push({
                id: state.dashboards[state.dashboards.length-1].id + 1,
                name: action.payload.name, 
                description: action.payload.description, 
                tasks: []
            })
        },
        removeDashboard: (state, action) => {
            state.dashboards.splice(action.payload, 1);
        }
    }
});

export const { addDashboard, removeDashboard } = dashboardSlice.actions;
export const selectDashboard = (state) => state.dashboard;
export default dashboardSlice.reducer;