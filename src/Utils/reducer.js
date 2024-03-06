import { combineReducers } from "@reduxjs/toolkit";
import cartreduce from './CardSlice'
import Loginreduce from './CardSlice'

export default combineReducers({
    cart : cartreduce,
    Login : Loginreduce,
})