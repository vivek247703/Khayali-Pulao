import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice(
    {
        name : 'Login',
        initialState : {
            item: []
        },
        reducers:{
            setLogin : (state,action)=>{
                state.item.push(action.payload);
            },
            removeLogin : (state,action)=>{
                state.item.pop(action.payload);
            },
        },
    });

export const {setLogin,removeLogin} = Login.actions;
export default Login.reducer;