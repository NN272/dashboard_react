import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './reducers/dashboardReducer';
import columnReducer from './reducers/columnReducer';

export default configureStore({
    reducer: {
        dashboard: dashboardReducer,
        column: columnReducer
    },
})