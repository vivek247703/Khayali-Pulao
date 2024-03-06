import { CDN_URL } from "../Utils/constants";
export const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
  }) => {
  
  
    return (
      <div
        className="m-10 p-2 w-[240px] bg-blue-200 hover:bg-blue-700 rounded-lg shadow-lg shadow-blue-400"
      >
        <img
          className=" w-[240px] bg-slate-300  rounded-lg"
          // src={
          //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
          //   resData.data.cloudinaryImageId
          // }
  
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="Biryani"
        />
        <h3 className="font-bold text-lg uppercase truncate text-start">{name}</h3>
        <hr/>
        <h5 className="truncate text-start">{cuisines.join(",")}</h5>
        {avgRating>=4?(<span className="bg-green-500 px-2 rounded-xl font-bold text-white">☆ {avgRating}</span>):( <span className="bg-red-500 px-2 text-start rounded-xl font-bold text-white">☆ {avgRating}</span>)}
        <span> ┃ </span> 
        <span>🚴🏾{sla.deliveryTime} minutes</span>
        <h4 className="font-bold text-start">{costForTwo}</h4>
      </div>
    );
  };

  export const HighlyRatedRestaurantCard = ()=>{
    return (props) =>{
      return(
        <div>
          <label className="absolute bg-green-500 text-white rounded-lg px-2 justify-start">Recommanded</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }
  