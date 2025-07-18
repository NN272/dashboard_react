import { createSlice } from "@reduxjs/toolkit";

const done = "DONE";
const upcoming = "UP_COMING";
const forReview = "FOR_REVIEW";
const inProgress = "IN_PROGRESS";

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
                        status: inProgress,
                        task: "Test task 1"
                    },
                    {
                        id: 1,
                        status: done,
                        task: "Test task 2"
                    },
                    {
                        id: 2,
                        status: upcoming,
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
                        status: done,
                        task: "Test task 1"
                    },
                    {
                        id: 1,
                        status: forReview,
                        task: "Test task 2"
                    },
                    {
                        id: 2,
                        status: done,
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
        },
        setNewStatus: (state, action) => {
            state.dashboards[action.payload.dashboardId].tasks.forEach((element) => {
                if(element.id === action.payload.id) {
                    element.status = action.payload.status;
                    console.log(`${element.id} status changed to ${action.payload.status}`);
                }
            });
        },
    }
});

export const { addDashboard, removeDashboard, setNewStatus } = dashboardSlice.actions;
export const selectDashboard = (state) => state.dashboard;
export default dashboardSlice.reducer;