import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLogin } from "../Utils/Login";

export const Login = () =>{
    const[message,Setmessage]=useState();
    const[password,SetPassword]=useState();
    const handleChange = event => {
        Setmessage(event.target.value);
      };
    const handleChangepassword = event => {
        SetPassword(event.target.value);
      };
      const dispatch = useDispatch()
      const adduser = (message)=>{
          dispatch(setLogin(message));
      }
    return(
        <div className="text-center mt-20 p-2">
        <input type="text" onChange={handleChange}
        placeholder="Username" className="m-4 p-4 border border-solid border-black"
        value={message}
        />
        <br/>
        <input type="text" onChange={handleChangepassword}
        placeholder="Password" className="m-4 p-4 border border-solid border-black"
        value={password}
        />
         <br/>
        <Link to="/"><button className="m-4 p-4 bg-blue-500 text-white"  onClick={()=>adduser(message)}>Login</button></Link>
          
      </div>
    );
}