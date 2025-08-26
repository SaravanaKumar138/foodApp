import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantCategoryItems from './RestaurantCategoryItems';
import RestaurantCartItems from './RestaurantCartItems';
import { clearCart } from '../utils/cartSlice';



const Cart = () => {

  const items = useSelector((store) => store.cart.item);
  console.log(items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="w-1/2 mx-auto">
      <div>
        <div className="flex justify-between">
          <h1 className="p-2 font-bold text-2xl text-center">Cart</h1>
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold px-2 py-2 text-md rounded-xl cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {items.length == 0 && (
          <h1 className="text-xl font-bold mx-auto w-1/2 mt-52">
            Cart is Empty . Add Items to cart
          </h1>
        )}
        <RestaurantCartItems items={items} />
      </div>
    </div>
  );
};

export default Cart
