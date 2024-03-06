import { useDispatch, useSelector } from "react-redux"
import ItemCards, { CartList } from "./ItemCards";
import { clearcart } from "../Utils/CardSlice";

export const Cart = () =>{
    const cartitems = useSelector((store)=>store.cart.item);
    console.log(cartitems);
    const dispatch = useDispatch();
    const ClearCart = () =>{
            dispatch(clearcart());
    }
    return(
        <div className="text-center"> 
        <h1 className="font-bold text-2xl">Cart items</h1>
        <div>
            <button className="rounded-lg bg-black text-white p-2 mt-2" onClick={ClearCart}>Clear Cart</button>
            {cartitems.length===0 && <h1>Cart is Empty</h1>}
           <ItemCards item={cartitems}/>
        </div>
        </div>
    )
}