import React, { useContext, useEffect, useRef, useState } from 'react'
import ResCard, { WithPromoted } from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Body = () => {

  const [resArray, setResArray] = useState([]);

  const [filterArray, setFilterArray] = useState(resArray);

  const searchData = useRef(null);

  const RestaurantPromoted = WithPromoted(ResCard);


  const {logginIn, setUserInfo} = useContext(UserContext);
  

console.log(logginIn);

  useEffect(()=> {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=8.715017999999999&lng=77.765628&str=all%20restaurants&trackingId=b8963169-4bf2-68ab-5a39-3b54b08f03c4&submitAction=ENTER&queryUniqueId=720869de-8021-66ff-0c3e-0695f1d60ab7"
    );
    const json =await data.json();
    const rest =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    setResArray(rest.slice(1));
    console.log(resArray);
    setFilterArray(rest.slice(1));
  }

const topRated = () => {
  const topRatedRes = filterArray.filter(res => res?.card?.card?.info?.avgRating >= 4.5);
  setFilterArray(topRatedRes);
}

  const filterRestaurant = () => {
    console.log(searchData.current.value);
    const search = searchData.current.value.toLowerCase();
    const filterRes = resArray.filter(res => {
     const cuisinesArray =  res?.card?.card?.info?.cuisines;
     return cuisinesArray.some((cuisine) => cuisine.toLowerCase().includes(search));
    });
    setFilterArray(filterRes);
    
  }

 return resArray.length === 0 ? (
   <Shimmer />
 ) : (
   <div>
     <div className="m-10">
       <input
         ref={searchData}
         type="text"
         placeholder=" filter Restautrant"
         className="mr-4 w-72 h-10 border-2 rounded-lg"
       ></input>
       <button
         className="bg-pink-500 hover:bg-pink-700 text-white px-2 py-2 text-xl rounded-xl cursor-pointer"
         onClick={filterRestaurant}
       >
         Search
       </button>
       <button
         className="ml-5 bg-pink-500 hover:bg-pink-700 text-white px-2 py-2 text-xl rounded-lg cursor-pointer"
         onClick={topRated}
       >
         Top Rated Restaurants
       </button>
       <input type = "text" value={logginIn} onChange={(e) => setUserInfo(e.target.value)} className='border border-black ml-10 p-2'></input>
     </div>
     <div className="flex flex-wrap gap-5 justify-evenly items-center">
       {filterArray.map((res) => (
         <Link to={"/restaurants/" + res?.card?.card?.info?.id}>
           {res?.card?.card?.info?.promoted ? (
             <RestaurantPromoted resDetails={res} />
           ) : (
             <ResCard resDetails={res} />
           )}
         </Link>
       ))}
     </div>
   </div>
 );
}

export default Body
