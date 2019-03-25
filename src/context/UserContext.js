import { createContext } from "react";

const UserContext = createContext({
  id: "",
  name: "",
  img: ""
});

export default UserContext;
