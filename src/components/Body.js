import { RestaurantCard, HighlyRatedRestaurantCard } from "./RestuarantCrad";
import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import { NoResultFound } from "./NoResultFound";
import { Link } from "react-router-dom";
import { useGetRestaurants } from "../Utils/useGetRestaurants";
export const Body = () => {

   const [ListOfRestaurants, SetListOfRestaurants]= useState([])
   const [FlteredListOfRestaurants, SetFlteredListOfRestaurants]= useState([])

   const [message, setMessage] = useState('');
   const NewRestaurantCrad = HighlyRatedRestaurantCard(RestaurantCard)
  
    const handleChange = event => {
      setMessage(event.target.value);

    };

    useEffect(() => {
      getRestaurants();
    }, []);
  
    // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants() {
      // handle the error using try... catch
      try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4150201&lng=72.8196225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        console.log(json);
  
        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
            // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
  
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);
  
        // update the state variable restaurants with Swiggy API data
        SetListOfRestaurants(resData);
        SetFlteredListOfRestaurants(resData);
      } catch (error) {
        console.log(error);
      }
    }
   let food;
    return ListOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="text-center">
        <div className="items-center">
          {/*<input type="text" placeholder="Search Food or Restaurant" />*/}
          <button className="border border-solid border-blue-200 m-4 p-4 rounded-lg hover:text-white bg-blue-200 active: text-black" onClick={()=>{
            const filterdata = ListOfRestaurants;
            //const filterdata = ListOfRestaurants.filter((res)=>res?.info?.avgRating>4);
            SetFlteredListOfRestaurants(filterdata);
          }}>See All Restaurants</button>
          <button className="border border-solid border-blue-200 m-4 p-4 rounded-lg hover:text-white bg-blue-200 active: text-black" onClick={()=>{
            const filterdata = ListOfRestaurants.filter((res)=>res?.info?.avgRating>4);
            SetFlteredListOfRestaurants(filterdata);
          }}>Top Rated</button>
          <button className="border border-solid border-blue-200 m-4 p-4 rounded-lg hover:text-white bg-blue-200 active: text-black"onClick={()=>{
            const filterdata = ListOfRestaurants.filter((res)=>(res?.info?.sla.deliveryTime)<30);
            SetFlteredListOfRestaurants(filterdata);
          }}>Quick delivery</button>
          <input type="text" onChange={handleChange}
        value={message} placeholder="Search Restaurant" className="m-4 p-4 border border-solid border-blue-200"/>
          <button className="border border-solid border-blue-200 m-4 p-4 rounded-lg hover:text-white bg-blue-200 active: text-black" onClick={()=>{
            const filterdata = ListOfRestaurants.filter(res=>(res?.info?.name.toLowerCase().includes(message.toLowerCase())));
            SetFlteredListOfRestaurants(filterdata);
            
          }}>Search</button>
        </div>
        <div className="flex flex-wrap">
         
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {FlteredListOfRestaurants.map((restaurant) => (
            <Link  to={"restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}>
              {
                (restaurant?.info?.totalRatingsString > "2k") ? <NewRestaurantCrad {...restaurant?.info}/> : <RestaurantCard {...restaurant?.info} />
              }
            </Link>
          ))}
  
          {/* // * or */}
  
          {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
        </div>
      </div>
    );
  };