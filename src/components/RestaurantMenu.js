import { useEffect, useState } from "react"
import { swiggy_menu_api_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { CDN_URL } from "../Utils/constants";
import { ListOfMenu } from "./ListOfMenu";

export const RestaurantMenu = () =>{
        const [Menu, SetMenu] = useState(null);
        const [ShowIndex, SetShowIndex] = useState(0);
        const {resId} =useParams();
        //console.log(resId);
        useEffect(() => {
            getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
          }, [])

          const getRestaurantInfo = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4150201&lng=72.8196225&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            //console.log(json);
            SetMenu(json.data);
          };

          if(Menu===null) return <Shimmer />;
          const {name,cloudinaryImageId,cuisines,areaName,avgRating}  = Menu?.cards[0]?.card?.card?.info;
          const itemCards = Menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>e.card?.card?.["@type"]==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
          //console.log(itemCards);
          return <>
            <div className="flex justify-center">
              <div>
              <h1 className="font-bold  my-4 mr-16 text-lg justify-start">
                {name}
              </h1>
              <h4 className="text-gray-500">{cuisines.join()}</h4>
              <span className="text-gray-500">{areaName}</span>
              <p className="bg-green-500 text-white w-16 pl-2 font-bold rounded-lg">{avgRating} ⭐</p>
              </div>
              <div>
              <img className="w-40 justify-end ml-72 rounded-lg mt-4"src={CDN_URL + cloudinaryImageId} />
              </div>
            </div>
            <div>
              <hr className="text-gray-500 mt-4"/>
            </div>
            <div>
                    {
                      itemCards.map((e,index)=>(
                        <ListOfMenu data={e?.card?.card}
                        ShowItems={index===ShowIndex?true:false}
                        SetShowIndex = {()=>
                          SetShowIndex(index)
                      }
                        />
                      )
                      )
                    }
            </div>
          </>
            
          

};