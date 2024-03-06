import { useState } from "react";
import { CDN_URL } from "../Utils/constants";
//import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { additem } from "../Utils/CardSlice";
import { removeitem } from "../Utils/CardSlice";


const ItemCards = ({item}) =>{
    const dispatch = useDispatch();
    //console.log(item)
    const addItem = (item) =>{
            alert("Item Added");
            dispatch(additem(item));
    };
    
    return(
        <div>
                {
                item.map((e)=>(
                    <div className="text-left p-2 m-2 border-b-2 border-gray-300 text-gray-800 flex">
                        <div className="p-2 w-9/12">
                            {e?.card?.info?.isVeg==1?(<p className="">🟩</p>):(<p>🟥</p>)}
                            <span className="font-bold">{e?.card?.info?.name}</span>
                            <p>Rs. {e?.card?.info?.price/100}</p>
                        </div>
                        <div className="w-3/12 relative flex">
                            <div>
                            <img className="rounded-lg w-36 bg-none" src={CDN_URL+e?.card?.info?.imageId}/>
                            <button className="absolute inset-x-10 bottom-0 h-8 bg-blue-200 rounded-lg" onClick={()=> addItem(e)}>ADD</button>
                        </div>
                            
                            
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export const CartList = ()=>{
    return (item) =>{
      return(
        <div>
          <button>Remove</button>
          <ItemCards {...item}/>
        </div>
      );
    }
  }
export default ItemCards;