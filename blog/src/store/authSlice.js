import { createSlice } from "@reduxjs/toolkit";


const initialState={
loginStatus:false,
userData:null,
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.loginStatus=true
            state.userData=action.payload
        },
        logout:(state,action)=>{
            state.loginStatus=false
            state.userData=null
            console.log("Logged out, state reset.");
        },
    }
})

export default authSlice.reducer
export const {login,logout}=authSlice.actions