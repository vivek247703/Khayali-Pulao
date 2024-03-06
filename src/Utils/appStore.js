import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartreduce from './CardSlice'
import Loginreduce from './Login'


const rootreducer = combineReducers({
    cart : cartreduce,
    Login : Loginreduce,
})

const appStore = configureStore(
    {
        reducer : rootreducer,
    }
)



export default appStore;