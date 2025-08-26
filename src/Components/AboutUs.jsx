import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
  const { logginIn } = useContext(UserContext);
  return (
    <div>
      aboutus
      <h1 className="text-xl font-bold">User : {logginIn}</h1>
    </div>
  );
};

export default AboutUs;
