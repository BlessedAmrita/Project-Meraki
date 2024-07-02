import { createSlice } from "@reduxjs/toolkit";


const initialState={
loginStatus:false,
userData:null,
}

const authSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.loginStatus=true
            state.userData=action.payload
        },
        logout:(state,action)=>{
            state.userData=false
            state.userData=null
        },
    }
})

export default authSlice.reducer
export const {login,logout}=authSlice.actions