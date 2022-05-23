import { Outlet } from "react-router-dom";
import useCurrentUser from "../hooks/currentUser";
const ReuirAdmin = () => {
  const [currentUser] = useCurrentUser();

  if (currentUser?.role === "user") {
    return;
  }
  return <Outlet />;
};

export default ReuirAdmin;
