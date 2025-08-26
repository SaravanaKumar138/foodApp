import React, { useState } from 'react'
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = ({resMenu}) => {


const [showIndex, setShowIndex] = useState(-1);

const resCategory = resMenu?.cards.filter(cat => cat.card.card["@type"] === 
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  return resCategory && (
    <div>
      {
        resCategory.map((category, index) => <RestaurantCategory category={category} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />)
      }
    </div>
  )
}

export default RestaurantMenu
