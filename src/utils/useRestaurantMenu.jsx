import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null); 
    const fetchMenu = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.715017999999999&lng=77.765628&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setResInfo(json.data);
    };

    useEffect(() => {
        fetchMenu();
    }, []);
    return resInfo;
}

export default useRestaurantMenu
