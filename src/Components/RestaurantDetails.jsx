
import React from 'react'
import { useParams } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantDetails = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
console.log(resInfo);
    if (!resInfo) return <Shimmer />
console.log(resInfo);

const {avgRatingString, totalRatingsString, costForTwo, cuisines, areaName} = resInfo?.cards[2]?.card?.card?.info;
    
  return (
    resInfo && (
      <div>
        <div className=''>
          <div >
            {" "}
            <h1 className="text-xl font-bold ml-5 text-center">
              {resInfo?.cards[2]?.card?.card?.info?.name}
            </h1>
          <div className="border-gray-200 border-1 p-5 w-1/3 rounded-2xl shadow-lg m-5 mx-auto">
            <h1 className="text-md font-bold">
              {avgRatingString +
                "(" +
                totalRatingsString +
                ")" +
                "  " +
                costForTwo / 100 +
                "  for two"}
            </h1>
            <h2 className="text-md font-bold mt-2 text-red-500">
              {cuisines.join(",")}
            </h2>
            <h1>
              <span className="text-md font-semibold ">Outlet:</span> {areaName}{" "}
            </h1>
          </div>
          </div>
          <RestaurantMenu
            resMenu={resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR}
          />
        </div>
      </div>
    )
  );
}

export default RestaurantDetails
