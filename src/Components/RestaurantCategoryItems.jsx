import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const RestaurantCategoryItems = ({categoryItems}) => {

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  }
 
  return (
    categoryItems && (
      <div className="m-5 ">
        {categoryItems.map((item) => (
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
              <div className="absolute">
                <button className='mx-10 bg-white px-1 py-2 shadow-lg mt-30 rounded-lg text-gray-900 font-semibold w-30 cursor-pointer' onClick={() => handleAdd(item)}>Add +</button>
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
    )
  );
}

export default RestaurantCategoryItems



