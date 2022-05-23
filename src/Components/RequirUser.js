import { Outlet, useNavigate } from "react-router-dom";
import useCurrentUser from "../Hooks/userCurrentUser";
const ReuirUser = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser] = useCurrentUser();
  if (currentUser?.role !== "user") {
    return;
  }

  return children;
};

export default ReuirUser;
