import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import jobSlice from './jobSlice'

const store = configureStore({
    reducer:{
        auth:authSlice,
        job:jobSlice
    },
    /* preloadedState, */
devTools:     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

});
export default store