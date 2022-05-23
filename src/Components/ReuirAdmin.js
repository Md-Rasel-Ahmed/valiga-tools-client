import { Outlet } from "react-router-dom";
import useCurrentUser from "../Hooks/userCurrentUser";
const ReuirAdmin = ({ children }) => {
  const [currentUser] = useCurrentUser();

  if (currentUser?.role !== "admin") {
    return;
  }
  return children;
};
export default ReuirAdmin;
