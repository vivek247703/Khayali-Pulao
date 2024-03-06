import { useState } from "react";
import { LogoURL } from "../Utils/constants";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useDispatch, useSelector } from "react-redux";
export const Header = () => {
  const [LogBtn,setLogBtn] = useState("Login")
  const cart = useSelector((store)=>store.cart.item)
  
    return (
      <div className="flex justify-between bg-blue-200 shadow-lg mb-2 h-24">
        <div className="logo-container">
          <img
            src={LogoURL}
            alt="App Logo"
            className="w-40 h-24"
          />
        </div>
        <div className="nav-items items-center px-4">
          <ul className="flex p-8 m-4">
            <li className="px-4"><Link to="/" style={{ textDecoration: 'none' }}>⌂ Home</Link></li>
            <li className="px-4"><Link to="/about" style={{ textDecoration: 'none' }}>ℹ️ About Us</Link></li>
            <li className="px-4"><Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
            <li className="px-4"><Link to="/Cart" style={{ textDecoration: 'none' }}>🛒({cart.length})</Link></li>
            {/*<p className='cart'>🛒</p>*/}
            <li className="px-4"><Link to="/Login" style={{ textDecoration: 'none' }}><button className="Login" onClick={()=>{
              (LogBtn==="login") ? setLogBtn("logout") : setLogBtn("login");
            }}>Login</button></Link></li>

          </ul>
        </div>
      </div>
    );
  };