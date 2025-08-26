import React, { useState } from 'react'
import RestaurantCategoryItems from './RestaurantCategoryItems';

const RestaurantCategory = ({category, showItems, setShowIndex}) => {
 
  const handleClick = () => {
    setShowIndex();
  }


  return (
    <div>
      <div className="text-center p-4 bg-gray-50 shadow-lg mt-2  w-6/12 m-auto ">
        <div className="flex items-center justify-between">
          <h1
            className="font-semibold text-xl cursor-pointer"
            onClick={handleClick}
          >
            {category?.card?.card?.title}(
            {category?.card?.card?.itemCards?.length})
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
         {showItems &&
          <RestaurantCategoryItems
            categoryItems={category?.card?.card?.itemCards}
          />}
      </div>
    </div>
  );
}

export default RestaurantCategory
