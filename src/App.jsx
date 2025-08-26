import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantDetails";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";

function App() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    //data by an api call
    const data = {
      name: "Saravana",
    };
    setUserInfo(data.name);
  });
  return (
    <Provider store = {appStore}>
      <UserContext.Provider value={{ logginIn: userInfo, setUserInfo }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default App;
