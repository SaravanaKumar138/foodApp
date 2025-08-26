import { createContext } from "react";

const UserContext = createContext({
    logginIn: "Default User"
});

export default UserContext;