import React from 'react'
import removeicon from "../assets/removeicon.png"
import { removeItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
const RestaurantCartItems = ({items}) => {

    const dispatch = useDispatch();

    const handleRemove = (index) => {
        dispatch(removeItem(index));
    }

    
  return (
    <div>
      {items.map((item, index) => (
        <div className="border-gray-200 border-b-2 grid grid-cols-3 gap-10">
          <div className="text-left ml-2 p-2 col-span-2">
            <div className="font-semibold text-gray-800 text-xl">
              {item?.card?.info?.name}
            </div>
            <div className="font-bold mt-3">
              ₹ {item?.card?.info?.price / 100}
            </div>
            <div className="mt-3 text-gray-600">
              {item?.card?.info?.description}
            </div>
          </div>
          <div className="col-span-1 relative">
            <div className="absolute left-30 bottom-0">
            <img src={removeicon} alt=""  onClick={() => handleRemove(index)} className='bg-white p-1 rounded-lg w-10'/>
            </div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item?.card?.info?.imageId
              }
              alt=""
              className="w-40 h-32 m-3 rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantCartItems
