import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice"

const store = configureStore({
    reducer:{
        auth:authSlice
    },
    /* preloadedState, */
devTools:     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

});
export default store