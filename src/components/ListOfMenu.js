import { useState } from "react";
import ItemCards from "./ItemCards";

export const ListOfMenu = ({data,SetShowIndex,ShowItems}) =>{
    //console.log(data);
    //const [Click,SetClick] = useState(false);
    let n =0;
    const handleClick = () =>{
        //console.log("Clicked");
        n=n+1;
        if(n>1){
            SetShowIndex(null);
        }else{
            SetShowIndex();
        }
        
    };
    const list = data.itemCards;

    return<>
            <div className="w-6/12 mx-auto my-4 p-4 shadow-lg text-center bg-gray-100">
                <div className="justify-between flex cursor-pointer" onClick={handleClick}> 
                <h1 className="font-bold text-lg">{data.title}({data.itemCards.length})</h1>
                <span>🔽</span>
                </div>
                {ShowItems && <ItemCards item={data.itemCards}/>}
            </div>
    </>

    
}