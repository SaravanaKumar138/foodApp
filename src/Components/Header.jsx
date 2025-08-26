import { Header_Pic } from "../utils/constants";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { logginIn } = useContext(UserContext);

  const cartItem = useSelector(store => store.cart.item);


  return (
    <div className="flex justify-between items-center bg-pink-200 m-5 shadow-lg h-40">
      <div>
        <img src={Header_Pic} alt="" className="h-25 m-10" />
      </div>
      <div>
        <ul className="flex gap-10 mr-20 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cart} alt="" className="h-10 " />
              ({cartItem.length} items)
            </Link>
          </li>
          <li>User: {logginIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
