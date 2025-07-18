import { createSlice } from "@reduxjs/toolkit";

export const columnSlice = createSlice({
    name: "column",
    initialState: {
        columns: [
            {
                id: "DONE",
                title: "Done"
            },
            {
                id: "UP_COMING",
                title: "Up coming"
            },
            {
                id: "FOR_REVIEW",
                title: "For review"
            },
            {
                id: "IN_PROGRESS",
                title: "In progress"
            }
        ]
    },
    reducers: {
        addColumn: (state) => {
            state.columns.push({
                id: "TEST",
                title: "TEST"
            });
        }
    }
});

export const {addColumn} = columnSlice.actions;
export const selectColumn = (state) => state.column;
export default columnSlice.reducer;