import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
    },
    reducers:{
        setSingleCompany:(state,action)=>{
            state.singleCompany = action.payload
            
        }
    }
})
export const {setSingleCompany} = companySlice.actions;
export default companySlice.reducer;