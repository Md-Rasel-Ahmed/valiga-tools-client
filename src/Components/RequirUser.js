import { Outlet } from "react-router-dom";
import useCurrentUser from "../Hooks/userCurrentUser";
const ReuirUser = () => {
  const [currentUser] = useCurrentUser();
  if (currentUser?.role !== "user") {
    return;
  }
  return <Outlet />;
};

export default ReuirUser;
