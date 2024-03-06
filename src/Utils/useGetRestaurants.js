import { useState } from "react";
import { useEffect } from "react";

export const useGetRestaurants = () =>{
    const [resInfo, SetresInfo] = useState(null);
    useEffect(() => {
        getRestaurants();
      }, []);

      const getRestaurants = async()=> {
        // handle the error using try... catch
          const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4150201&lng=72.8196225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await response.json();
          console.log(json);
          SetresInfo(json);

      };
      return resInfo;

};